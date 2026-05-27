import { useState, useEffect, useCallback } from 'react'
import './TextType.css'

export default function TextType({
  texts = [],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  cursorBlinkDuration = 0.5,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  renderText = null,
  className = '',
}) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase]         = useState('typing')   // 'typing' | 'deleting' | 'done'
  const [idx, setIdx]             = useState(0)
  const [cursorOn, setCursorOn]   = useState(true)

  const current = texts[idx] ?? ''

  // Variable speed helper
  const speed = useCallback((base) => {
    if (!variableSpeedEnabled) return base
    return variableSpeedMin + Math.random() * (variableSpeedMax - variableSpeedMin)
  }, [variableSpeedEnabled, variableSpeedMin, variableSpeedMax])

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), cursorBlinkDuration * 1000)
    return () => clearInterval(id)
  }, [cursorBlinkDuration])

  // Typing state machine
  useEffect(() => {
    if (!texts.length || phase === 'done') return
    let t

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        // Still typing
        t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          speed(typingSpeed)
        )
      } else {
        // Finished this text
        if (texts.length === 1) {
          setPhase('done')   // single text — stop, cursor keeps blinking
          return
        }
        t = setTimeout(() => setPhase('deleting'), pauseDuration)
      }
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        t = setTimeout(
          () => setDisplayed(d => d.slice(0, -1)),
          speed(deletingSpeed)
        )
      } else {
        setIdx(i => (i + 1) % texts.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(t)
  }, [displayed, phase, current, texts, typingSpeed, deletingSpeed, pauseDuration, speed])

  return (
    <span className={`tt${className ? ` ${className}` : ''}`}>
      {renderText ? renderText(displayed) : displayed}
      {showCursor && (
        <span
          className="tt-cursor"
          style={{ opacity: cursorOn ? 1 : 0 }}
          aria-hidden="true"
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  )
}
