import { lazy, Suspense, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ParticleCard, GlobalSpotlight } from '../components/MagicBento'
import TextType from '../components/TextType'

// Three.js / LiquidEther — грузится только при посещении главной
const LiquidEther = lazy(() => import('../components/LiquidEther'))

const GLOW = '232, 184, 74'   // золотой цвет — rgba(232,184,74,...)

export default function Home() {
  const sectionRef = useRef(null)

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Suspense fallback={null}>
            <LiquidEther
              colors={['#5227FF', '#FF9FFC', '#B497CF']}
              mouseForce={20}
              cursorSize={80}
              isViscous={false}
              resolution={0.35}
              BFECC={false}
              iterationsPoisson={12}
              isBounce={false}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </Suspense>
        </div>

        <div className="hero-solo">
          <span className="hero-badge">Stageverslag 2024–2025</span>
          <h1>
            <TextType
              texts={['Stage bij Nostalgie']}
              typingSpeed={75}
              pauseDuration={2500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              renderText={(text) => {
                const prefix = 'Stage bij '   // 10 chars
                if (text.length <= prefix.length) return text
                return (
                  <>
                    {prefix}
                    <em>{text.slice(prefix.length)}</em>
                  </>
                )
              }}
            />
          </h1>
          <p className="hero-desc">
            Vier weken werkervaring bij een Oekraïense speciaalzaak in Antwerpen.
            Klanten helpen, producten bijvullen en werken in een internationale omgeving.
          </p>
          <div className="hero-info">
            <span><strong>Mykyta Horovyi</strong></span>
            <span><strong>Nostalgie</strong> &mdash; Frankrijklei 29, Antwerpen</span>
            <span>5oos &bull; Campus De Vesten &bull; 2024–2025</span>
          </div>
        </div>
      </section>

      {/* ---- Stats row ---- */}
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-num">4</span>
          <span className="stat-label">weken stage</span>
        </div>
        <div className="stat-sep" />
        <div className="stat-item">
          <span className="stat-num">6</span>
          <span className="stat-label">werkdagen</span>
        </div>
        <div className="stat-sep" />
        <div className="stat-item">
          <span className="stat-num">29</span>
          <span className="stat-label">Frankrijklei</span>
        </div>
        <div className="stat-sep" />
        <div className="stat-item">
          <span className="stat-num">100+</span>
          <span className="stat-label">producten</span>
        </div>
      </div>

      {/* ---- Cards section ---- */}
      <section className="section" ref={sectionRef}>

        {/* Spotlight следует за мышью и подсвечивает ближайшие карточки */}
        <GlobalSpotlight
          sectionRef={sectionRef}
          glowColor={GLOW}
          spotlightRadius={420}
          cardSelector=".mb-bento-card"
        />

        <div className="container">
          <div className="cards-row">

            <ParticleCard
              className="card mb-bento-card mb-border-glow"
              glowColor={GLOW}
              particleCount={10}
              clickEffect
              enableTilt={false}
              enableMagnetism={false}
            >
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="10" width="24" height="17" rx="2.5" fill="#1e3a5f"/>
                  <polygon points="2,12 16,2 30,12" fill="#e8b84a" opacity="0.92"/>
                  <rect x="13" y="17" width="6" height="10" rx="1" fill="rgba(255,255,255,0.18)"/>
                  <rect x="6" y="13" width="5" height="5" rx="0.8" fill="#e8b84a" opacity="0.5"/>
                  <rect x="21" y="13" width="5" height="5" rx="0.8" fill="#e8b84a" opacity="0.5"/>
                </svg>
              </div>
              <h3>Over de winkel</h3>
              <p>Nostalgie is een Oekraïense en Oost-Europese speciaalzaak op de Frankrijklei in Antwerpen.</p>
              <Link to="/over-de-winkel" className="card-link">Lees meer →</Link>
            </ParticleCard>

            <ParticleCard
              className="card mb-bento-card mb-border-glow"
              glowColor={GLOW}
              particleCount={10}
              clickEffect
              enableTilt={false}
              enableMagnetism={false}
            >
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="13" width="26" height="15" rx="2.5" fill="#1e3a5f"/>
                  <path d="M11 13V10Q11 6 16 6Q21 6 21 10V13" stroke="#e8b84a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <rect x="3" y="18" width="26" height="2.5" fill="#e8b84a" opacity="0.4"/>
                  <circle cx="16" cy="19.5" r="2" fill="#e8b84a" opacity="0.85"/>
                </svg>
              </div>
              <h3>Mijn stage</h3>
              <p>Wat ik heb gedaan, welke uitdagingen ik tegenkwam en welke vaardigheden ik heb geoefend.</p>
              <Link to="/mijn-stage" className="card-link">Lees meer →</Link>
            </ParticleCard>

            <ParticleCard
              className="card mb-bento-card mb-border-glow"
              glowColor={GLOW}
              particleCount={10}
              clickEffect
              enableTilt={false}
              enableMagnetism={false}
            >
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="6" width="26" height="20" rx="3" fill="#1e3a5f"/>
                  <circle cx="16" cy="16" r="6" stroke="#e8b84a" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  <circle cx="16" cy="16" r="3" fill="#e8b84a" opacity="0.55"/>
                  <circle cx="24" cy="9" r="2" fill="#e8b84a" opacity="0.4"/>
                </svg>
              </div>
              <h3>Foto's</h3>
              <p>Een kijkje in de winkel en het assortiment. Foto's worden nog toegevoegd.</p>
              <Link to="/fotos" className="card-link">Bekijk foto's →</Link>
            </ParticleCard>

          </div>
        </div>
      </section>
    </>
  )
}
