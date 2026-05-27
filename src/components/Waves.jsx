import { useEffect, useRef } from 'react'

export default function Waves({
  lineColor        = '#ffffff',
  backgroundColor  = 'transparent',
  waveSpeedX       = 0.0125,
  waveSpeedY       = 0.01,
  waveAmpX         = 40,
  waveAmpY         = 20,
  friction         = 0.9,
  tension          = 0.01,
  maxCursorMove    = 120,
  xGap             = 12,
  yGap             = 36,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let W = 0, H = 0
    let lines  = []   // lines[row][col] = { x, y, ox, oy, vx, vy, seed }
    let mouseX = -9999, mouseY = -9999
    let tick   = 0
    let lastTs = 0

    // ---- Build point grid ----
    function buildGrid() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      lines = []
      const cols = Math.ceil(W / xGap) + 1
      const rows = Math.ceil(H / yGap) + 1
      for (let r = 0; r <= rows; r++) {
        const row = []
        for (let c = 0; c <= cols; c++) {
          const ox = c * xGap
          const oy = r * yGap
          row.push({ x: ox, y: oy, ox, oy, vx: 0, vy: 0, seed: Math.random() * Math.PI * 2 })
        }
        lines.push(row)
      }
    }

    // ---- Animation loop ----
    function step(ts) {
      animId = requestAnimationFrame(step)

      // ~30 fps cap — canvas 2D with many points still benefits from this
      if (ts - lastTs < 32) return
      lastTs = ts
      tick++

      // Clear
      ctx.clearRect(0, 0, W, H)
      if (backgroundColor && backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, W, H)
      }

      // Update spring physics for every point
      lines.forEach((row, ri) => {
        row.forEach((pt, ci) => {
          // Target position: sine wave offset from origin
          const tx = pt.ox + Math.sin(tick * waveSpeedX + ri * 0.5 + ci * 0.1 + pt.seed) * waveAmpX
          const ty = pt.oy + Math.cos(tick * waveSpeedY + ci * 0.5 + ri * 0.1 + pt.seed) * waveAmpY

          // Mouse influence: pull point toward cursor within maxCursorMove radius
          const dx   = mouseX - pt.x
          const dy   = mouseY - pt.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          let mx = 0, my = 0
          if (dist < maxCursorMove) {
            const f = (1 - dist / maxCursorMove)
            mx = dx * f * 0.4
            my = dy * f * 0.4
          }

          // Spring toward (target + mouse offset)
          const ax = ((tx + mx - pt.x) * tension * 8)
          const ay = ((ty + my - pt.y) * tension * 8)
          pt.vx = (pt.vx + ax) * friction
          pt.vy = (pt.vy + ay) * friction
          pt.x += pt.vx
          pt.y += pt.vy
        })
      })

      // Draw horizontal wave lines as smooth quadratic bezier curves
      ctx.strokeStyle = lineColor
      ctx.lineWidth   = 1
      ctx.beginPath()

      lines.forEach(row => {
        if (row.length < 2) return
        ctx.moveTo(row[0].x, row[0].y)
        for (let i = 0; i < row.length - 1; i++) {
          // Mid-point for smooth curve
          const mx = (row[i].x + row[i + 1].x) * 0.5
          const my = (row[i].y + row[i + 1].y) * 0.5
          ctx.quadraticCurveTo(row[i].x, row[i].y, mx, my)
        }
        ctx.lineTo(row[row.length - 1].x, row[row.length - 1].y)
      })

      ctx.stroke()
    }

    // ---- Event listeners ----
    const onMove   = e => { mouseX = e.clientX; mouseY = e.clientY }
    const onLeave  = ()  => { mouseX = -9999;   mouseY = -9999 }
    const onResize = ()  => buildGrid()

    buildGrid()
    animId = requestAnimationFrame(step)

    window.addEventListener('mousemove',   onMove)
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize',      onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove',    onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize',       onResize)
    }
  }, [lineColor, backgroundColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY,
      friction, tension, maxCursorMove, xGap, yGap])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
