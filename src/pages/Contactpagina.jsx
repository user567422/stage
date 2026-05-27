import { useRef } from 'react'
import { ParticleCard, GlobalSpotlight } from '../components/MagicBento'
import ScrollFloat from '../components/ScrollFloat'

const GLOW = '232, 184, 74'

export default function Contactpagina() {
  const sectionRef = useRef(null)

  return (
    <>
      <div className="page-header" data-title="CONTACT">
        <div className="container">
          <h1>Contact & Locatie</h1>
          <p>Nostalgie — Frankrijklei 29, 2000 Antwerpen</p>
        </div>
      </div>

      <section className="section" ref={sectionRef}>
        <GlobalSpotlight sectionRef={sectionRef} glowColor={GLOW} spotlightRadius={380} cardSelector=".mb-bento-card" />

        <div className="container">
          <div className="two-col">

            <div>
              <h2 className="section-title"><ScrollFloat stagger={0.06}>Gegevens</ScrollFloat></h2>
              <div className="divider"></div>

              <ParticleCard className="contact-card mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={10} clickEffect enableTilt={false} enableMagnetism={false}>
                <p className="contact-card-title"><ScrollFloat stagger={0.05}>Contactinformatie</ScrollFloat></p>

                <div className="adres-item">
                  <span className="icoon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="8" width="14" height="8" rx="1" fill="#1e3a5f"/>
                      <polygon points="1,9 9,2 17,9" fill="#e8b84a"/>
                      <rect x="7" y="11" width="4" height="5" rx="0.5" fill="#f7f5f1"/>
                      <rect x="3" y="9.5" width="3" height="3" rx="0.5" fill="#e8b84a" opacity="0.55"/>
                      <rect x="12" y="9.5" width="3" height="3" rx="0.5" fill="#e8b84a" opacity="0.55"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Nostalgie</strong>
                    Oekraïense &amp; Oost-Europese speciaalzaak
                  </div>
                </div>

                <div className="adres-item">
                  <span className="icoon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1.5C6.24 1.5 4 3.74 4 6.5C4 10.5 9 16.5 9 16.5C9 16.5 14 10.5 14 6.5C14 3.74 11.76 1.5 9 1.5Z" fill="#1e3a5f"/>
                      <circle cx="9" cy="6.5" r="2.2" fill="#e8b84a"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Adres</strong>
                    Frankrijklei 29<br />
                    2000 Antwerpen, België
                  </div>
                </div>

                <div className="adres-item">
                  <span className="icoon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="7" stroke="#1e3a5f" strokeWidth="1.5" fill="none"/>
                      <line x1="9" y1="9" x2="9" y2="4.5" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="9" y1="9" x2="12.5" y2="11" stroke="#e8b84a" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="9" cy="9" r="1.2" fill="#1e3a5f"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Openingstijden</strong>
                    Maandag: gesloten<br />
                    Dinsdag t/m zondag: 10:00 – 20:00
                  </div>
                </div>

                <div className="adres-item">
                  <span className="icoon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="12" height="9" rx="2" fill="#1e3a5f"/>
                      <rect x="5" y="5.5" width="3" height="2.5" rx="0.5" fill="#e8b84a" opacity="0.85"/>
                      <rect x="10" y="5.5" width="3" height="2.5" rx="0.5" fill="#e8b84a" opacity="0.85"/>
                      <line x1="5.5" y1="12" x2="4" y2="15.5" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="12.5" y1="12" x2="14" y2="15.5" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="3" y="9.5" width="12" height="2" fill="#e8b84a" opacity="0.4"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Bereikbaarheid</strong>
                    Goed bereikbaar met tram en bus vanuit het centrum van Antwerpen
                  </div>
                </div>
              </ParticleCard>

              <a
                href="https://www.google.com/maps/place/NOSTALGIE+%D0%9D%D0%9E%D0%A1%D0%A2%D0%90%D0%9B%D0%AC%D0%93%D0%98%D0%AF/@51.2172194,4.4154313,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-maps"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 0.5C5.01 0.5 3 2.51 3 5C3 8.5 7.5 14.5 7.5 14.5C7.5 14.5 12 8.5 12 5C12 2.51 9.99 0.5 7.5 0.5Z" fill="white"/>
                  <circle cx="7.5" cy="5" r="2" fill="#1a73e8"/>
                </svg>
                Open in Google Maps
              </a>
            </div>

            <div>
              <h2 className="section-title"><ScrollFloat stagger={0.07}>Kaart</ScrollFloat></h2>
              <div className="divider"></div>

              <ParticleCard className="map-wrap mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={6} clickEffect enableTilt={false} enableMagnetism={false}>
                <iframe
                  src="https://maps.google.com/maps?q=Frankrijklei+29,+2000+Antwerpen&z=17&output=embed"
                  title="Locatie van Nostalgie op Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </ParticleCard>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
