import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollFloat — scroll-triggered character-by-character float-in animation.
 * Each character slides up from below its clip container as it enters the viewport.
 *
 * Props match the React Bits API:
 *   animationDuration, ease, scrollStart, scrollEnd, stagger, className
 */
export default function ScrollFloat({
  children,
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top 90%',   // fires when element enters viewport from below
  scrollEnd = 'bottom 20%',
  stagger = 0.03,
  className = '',
}) {
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const chars = el.querySelectorAll('.sf-char')
    if (!chars.length) return

    // gsap.context keeps cleanup scoped to this component instance
    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { y: '110%' },
        {
          y: '0%',
          duration: animationDuration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger])

  // Accept string children only; convert anything else to string
  const text = typeof children === 'string' ? children : String(children)

  return (
    <span
      ref={wrapRef}
      className={`sf-wrap${className ? ` ${className}` : ''}`}
      aria-label={text}
      style={{ display: 'inline' }}
    >
      {[...text].map((char, i) => (
        /* sf-clip clips the character; sf-char slides up inside it */
        <span
          key={i}
          className="sf-clip"
          aria-hidden="true"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            lineHeight: 'inherit',
          }}
        >
          <span className="sf-char" style={{ display: 'inline-block' }}>
            {char === ' ' ? ' ' : char}
          </span>
        </span>
      ))}
    </span>
  )
}
