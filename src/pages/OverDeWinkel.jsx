import { useRef } from 'react'
import { ParticleCard, GlobalSpotlight } from '../components/MagicBento'
import ScrollFloat from '../components/ScrollFloat'

const GLOW = '232, 184, 74'

export default function OverDeWinkel() {
  const sectionRef = useRef(null)

  return (
    <>
      <div className="page-header" data-title="WINKEL">
        <div className="container">
          <h1>Over de winkel</h1>
          <p>Nostalgie — Frankrijklei 29, 2000 Antwerpen</p>
        </div>
      </div>

      <section className="section" ref={sectionRef}>
        <GlobalSpotlight sectionRef={sectionRef} glowColor={GLOW} spotlightRadius={380} cardSelector=".mb-bento-card" />

        <div className="container">
          <div className="two-col wide">

            <div>
              <h2 className="section-title"><ScrollFloat stagger={0.05}>Wat is Nostalgie?</ScrollFloat></h2>
              <div className="divider"></div>
              <div className="prose">
                <p>
                  Nostalgie is een Oekraïense en Oost-Europese specialiteitswinkel in de Frankrijklei in Antwerpen. De winkel heeft een vaste klantenbasis van mensen uit Oekraïne en andere Oost-Europese landen die in Antwerpen en de omgeving wonen.
                </p>
                <p>
                  In de winkel vind je producten die je niet snel in een gewone Belgische supermarkt tegenkomt: Oekraïense koekjes en snoep, traditionele conserven, zuivelproducten, verschillende soorten brood en een groot assortiment aan dranken. Naast Oekraïense producten zijn er ook Poolse, Russische en andere Slavische artikelen te koop.
                </p>
                <p>
                  De eigenaar heeft de winkel geopend zodat Oekraïners en andere Oost-Europeanen die ver van huis zijn, toch hun vertrouwde producten kunnen vinden. Voor veel klanten is Nostalgie daarom niet zomaar een winkel — het is een stukje thuis in een vreemde stad.
                </p>
                <p>
                  De winkel is klein maar heel goed gesorteerd. Alles staat netjes op zijn plek en er zijn altijd nieuwe producten bij. Tijdens mijn stage ontdekte ik veel artikelen die ik nog nooit eerder had gezien, wat ik eigenlijk heel interessant vond.
                </p>
              </div>
            </div>

            <div>
              <ParticleCard className="info-panel mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false}>
                <p className="info-panel-title">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" fill="#1e3a5f"/>
                    <circle cx="7" cy="5" r="1.8" fill="#e8b84a"/>
                  </svg>
                  Locatie
                </p>
                <ul className="info-list">
                  <li>
                    <span className="icoon">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9L9 2L16 9V16H12.5V12H5.5V16H2V9Z" fill="#1e3a5f"/>
                        <polygon points="0.5,9.5 9,1.5 17.5,9.5" fill="#e8b84a" opacity="0.9"/>
                      </svg>
                    </span>
                    <div>
                      <strong style={{color: 'rgba(255,255,255,0.9)', fontWeight: 700}}>Nostalgie</strong>
                      Frankrijklei 29<br />2000 Antwerpen, België
                    </div>
                  </li>
                  <li>
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
                    <span>Vlakbij het stadscentrum van Antwerpen</span>
                  </li>
                  <li>
                    <span className="icoon">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="4" width="14" height="9" rx="2" fill="#1e3a5f"/>
                        <rect x="4" y="6" width="4" height="3" rx="0.5" fill="#e8b84a" opacity="0.85"/>
                        <rect x="10" y="6" width="4" height="3" rx="0.5" fill="#e8b84a" opacity="0.85"/>
                        <circle cx="5" cy="14.5" r="1.5" fill="#1e3a5f"/>
                        <circle cx="13" cy="14.5" r="1.5" fill="#1e3a5f"/>
                        <rect x="2" y="10.5" width="14" height="1.5" fill="#e8b84a" opacity="0.4"/>
                      </svg>
                    </span>
                    <span>Goed bereikbaar met het openbaar vervoer</span>
                  </li>
                </ul>
              </ParticleCard>

              <ParticleCard className="info-panel mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={8} clickEffect enableTilt={false} enableMagnetism={false} style={{marginTop: '1.5rem'}}>
                <p className="info-panel-title">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="5.5" stroke="#1e3a5f" strokeWidth="1.5" fill="none"/>
                    <line x1="7" y1="7" x2="7" y2="3.5" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="7" y1="7" x2="10" y2="8.5" stroke="#e8b84a" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="7" cy="7" r="1" fill="#1e3a5f"/>
                  </svg>
                  Openingstijden
                </p>
                <table className="tijden">
                  <tbody>
                    <tr className="gesloten"><td>Maandag</td><td>Gesloten</td></tr>
                    <tr><td>Dinsdag</td><td>10:00 – 20:00</td></tr>
                    <tr><td>Woensdag</td><td>10:00 – 20:00</td></tr>
                    <tr><td>Donderdag</td><td>10:00 – 20:00</td></tr>
                    <tr><td>Vrijdag</td><td>10:00 – 20:00</td></tr>
                    <tr><td>Zaterdag</td><td>10:00 – 20:00</td></tr>
                    <tr><td>Zondag</td><td>10:00 – 20:00</td></tr>
                  </tbody>
                </table>
              </ParticleCard>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
