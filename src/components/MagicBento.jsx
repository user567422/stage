import { useRef, useEffect, useCallback, useState } from 'react'
import { gsap } from 'gsap'
import './MagicBento.css'

const DEFAULT_PARTICLE_COUNT = 12
const DEFAULT_SPOTLIGHT_RADIUS = 400
const DEFAULT_GLOW_COLOR = '232, 184, 74'
const MOBILE_BREAKPOINT = 768

// ---- Helpers ----

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div')
  el.className = 'mb-particle'
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 0.9);
    box-shadow: 0 0 6px rgba(${color}, 0.5);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `
  return el
}

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
})

const updateCardGlow = (card, mouseX, mouseY, intensity, radius) => {
  const rect = card.getBoundingClientRect()
  const relX = ((mouseX - rect.left) / rect.width) * 100
  const relY = ((mouseY - rect.top) / rect.height) * 100
  card.style.setProperty('--glow-x', `${relX}%`)
  card.style.setProperty('--glow-y', `${relY}%`)
  card.style.setProperty('--glow-intensity', intensity.toString())
  card.style.setProperty('--glow-radius', `${radius}px`)
}

// ---- useMobileDetection ----

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

// ---- ParticleCard ----
// Wraps any card element and adds: particles on hover, click ripple, optional tilt/magnetism

export const ParticleCard = ({
  children,
  className = '',
  style,
  disableAnimations = false,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = true
}) => {
  const cardRef = useRef(null)
  const particlesRef = useRef([])
  const timeoutsRef = useRef([])
  const isHoveredRef = useRef(false)
  const memoizedParticles = useRef([])
  const particlesInitialized = useRef(false)
  const magnetismRef = useRef(null)

  const initParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return
    const { width, height } = cardRef.current.getBoundingClientRect()
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    )
    particlesInitialized.current = true
  }, [particleCount, glowColor])

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    magnetismRef.current?.kill()
    particlesRef.current.forEach(p => {
      gsap.to(p, {
        scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
        onComplete: () => p.parentNode?.removeChild(p)
      })
    })
    particlesRef.current = []
  }, [])

  const spawnParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return
    if (!particlesInitialized.current) initParticles()

    memoizedParticles.current.forEach((particle, i) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return
        const clone = particle.cloneNode(true)
        cardRef.current.appendChild(clone)
        particlesRef.current.push(clone)

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' })
        gsap.to(clone, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true })
        gsap.to(clone, { opacity: 0.25, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true })
      }, i * 100)
      timeoutsRef.current.push(id)
    })
  }, [initParticles])

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return
    const el = cardRef.current

    const onEnter = () => {
      isHoveredRef.current = true
      spawnParticles()
      if (enableTilt) gsap.to(el, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 })
    }

    const onLeave = () => {
      isHoveredRef.current = false
      clearParticles()
      if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' })
      if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' })
    }

    const onMove = e => {
      if (!enableTilt && !enableMagnetism) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2, cy = rect.height / 2

      if (enableTilt) {
        gsap.to(el, { rotateX: ((y - cy) / cy) * -10, rotateY: ((x - cx) / cx) * 10, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 })
      }
      if (enableMagnetism) {
        magnetismRef.current = gsap.to(el, { x: (x - cx) * 0.05, y: (y - cy) * 0.05, duration: 0.3, ease: 'power2.out' })
      }
    }

    const onClick = e => {
      if (!clickEffect) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left, y = e.clientY - rect.top
      const d = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height))
      const ripple = document.createElement('div')
      ripple.style.cssText = `position:absolute;width:${d*2}px;height:${d*2}px;border-radius:50%;background:radial-gradient(circle,rgba(${glowColor},0.35) 0%,rgba(${glowColor},0.15) 30%,transparent 70%);left:${x-d}px;top:${y-d}px;pointer-events:none;z-index:1000;`
      el.appendChild(ripple)
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: 'power2.out', onComplete: () => ripple.remove() })
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('click', onClick)

    return () => {
      isHoveredRef.current = false
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('click', onClick)
      clearParticles()
    }
  }, [spawnParticles, clearParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor])

  return (
    <div
      ref={cardRef}
      className={`mb-particle-container ${className}`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  )
}

// ---- GlobalSpotlight ----
// Appends a fixed spotlight div to body that follows the mouse over the bento section

export const GlobalSpotlight = ({
  sectionRef,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
  cardSelector = '.mb-bento-card'
}) => {
  useEffect(() => {
    if (disableAnimations || !sectionRef?.current) return

    const spotlight = document.createElement('div')
    spotlight.style.cssText = `
      position: fixed;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.13) 0%,
        rgba(${glowColor}, 0.07) 15%,
        rgba(${glowColor}, 0.03) 30%,
        transparent 65%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      will-change: transform, opacity;
    `
    document.body.appendChild(spotlight)

    const onMove = e => {
      if (!sectionRef.current) return
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
      const cards = section.querySelectorAll(cardSelector)

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' })
        cards.forEach(c => c.style.setProperty('--glow-intensity', '0'))
        return
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius)
      let minDist = Infinity

      cards.forEach(card => {
        const cr = card.getBoundingClientRect()
        const cx = cr.left + cr.width / 2, cy = cr.top + cr.height / 2
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2)
        minDist = Math.min(minDist, dist)

        let intensity = 0
        if (dist <= proximity) intensity = 1
        else if (dist <= fadeDistance) intensity = (fadeDistance - dist) / (fadeDistance - proximity)

        updateCardGlow(card, e.clientX, e.clientY, intensity, spotlightRadius)
      })

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' })

      const targetOpacity = minDist <= proximity ? 0.75
        : minDist <= fadeDistance ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.75
        : 0

      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.4, ease: 'power2.out' })
    }

    const onLeave = () => {
      sectionRef.current?.querySelectorAll(cardSelector).forEach(c => c.style.setProperty('--glow-intensity', '0'))
      gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotlight.parentNode?.removeChild(spotlight)
    }
  }, [disableAnimations, sectionRef, spotlightRadius, glowColor, cardSelector])

  return null
}

export default GlobalSpotlight
