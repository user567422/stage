import { useRef } from 'react'
import { ParticleCard, GlobalSpotlight } from '../components/MagicBento'
import ScrollFloat from '../components/ScrollFloat'

const GLOW = '232, 184, 74'

export default function Fotopagina() {
  const sectionRef = useRef(null)

  return (
    <>
      <div className="page-header" data-title="FOTO'S">
        <div className="container">
          <h1>Foto's</h1>
          <p>Een kijkje in de winkel en het assortiment</p>
        </div>
      </div>

      <section className="section" ref={sectionRef}>
        <GlobalSpotlight sectionRef={sectionRef} glowColor={GLOW} spotlightRadius={380} cardSelector=".mb-bento-card" />

        <div className="container">
          <h2 className="section-title"><ScrollFloat stagger={0.06}>Galerij</ScrollFloat></h2>
          <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '0.4rem'}}>Foto's worden nog toegevoegd.</p>
          <div className="divider"></div>

          <div className="gallery-grid">

            <ParticleCard className="gallery-item no-photo mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false}>
              <div className="photo-placeholder">
                <span className="ph-icon">📷</span>
                <p className="ph-label">De sfeer in de winkel</p>
                <span className="ph-hint">Foto volgt nog</span>
              </div>
            </ParticleCard>

            <ParticleCard className="gallery-item no-photo mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false}>
              <div className="photo-placeholder">
                <span className="ph-icon">📷</span>
                <p className="ph-label">Producten in de rekken</p>
                <span className="ph-hint">Foto volgt nog</span>
              </div>
            </ParticleCard>

            <ParticleCard className="gallery-item no-photo mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false}>
              <div className="photo-placeholder">
                <span className="ph-icon">📷</span>
                <p className="ph-label">Conserven en droge producten</p>
                <span className="ph-hint">Foto volgt nog</span>
              </div>
            </ParticleCard>

            <ParticleCard className="gallery-item no-photo mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false}>
              <div className="photo-placeholder">
                <span className="ph-icon">📷</span>
                <p className="ph-label">Oekraïens snoep en koekjes</p>
                <span className="ph-hint">Foto volgt nog</span>
              </div>
            </ParticleCard>

            <ParticleCard className="gallery-item no-photo mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false}>
              <div className="photo-placeholder">
                <span className="ph-icon">📷</span>
                <p className="ph-label">Vers brood en bakproducten</p>
                <span className="ph-hint">Foto volgt nog</span>
              </div>
            </ParticleCard>

            <ParticleCard className="gallery-item no-photo mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false}>
              <div className="photo-placeholder">
                <span className="ph-icon">📷</span>
                <p className="ph-label">Assortiment dranken</p>
                <span className="ph-hint">Foto volgt nog</span>
              </div>
            </ParticleCard>

          </div>
        </div>
      </section>
    </>
  )
}
