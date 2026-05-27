import { useRef } from 'react'
import { ParticleCard, GlobalSpotlight } from '../components/MagicBento'
import ScrollFloat from '../components/ScrollFloat'

const GLOW = '232, 184, 74'

export default function MijnStage() {
  const sectionRef = useRef(null)

  return (
    <>
      <div className="page-header" data-title="STAGE">
        <div className="container">
          <h1>Mijn stage</h1>
          <p>Wat ik deed, wat ik leerde en wat mij opviel</p>
        </div>
      </div>

      <section className="section" ref={sectionRef}>
        <GlobalSpotlight sectionRef={sectionRef} glowColor={GLOW} spotlightRadius={420} cardSelector=".mb-bento-card" />

        <div className="container">

          <ParticleCard className="stage-block mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={10} clickEffect enableTilt={false} enableMagnetism={false}>
            <h3>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="16" height="9" rx="1.5" fill="#1e3a5f"/>
                <path d="M6.5 7V5.5Q6.5 3.5 9 3.5Q11.5 3.5 11.5 5.5V7" stroke="#e8b84a" strokeWidth="1.5" fill="none"/>
                <rect x="1" y="10" width="16" height="1.5" fill="#e8b84a"/>
              </svg>
              <ScrollFloat stagger={0.08}>Mijn taken</ScrollFloat>
            </h3>
            <p>
              De meeste tijd werkte ik aan de kassa. Dat betekende klanten helpen met afrekenen, zowel met cash als met bankkaart.
            </p>
            <p>
              Naast de kassa hielp ik bij het uitladen van leveringen en het bijvullen van de rekken. Als klanten iets zochten, probeerde ik hen zo goed mogelijk te helpen.
            </p>
            <ul>
              <li>Werken aan de kassa</li>
              <li>Producten uitladen en in de rekken leggen</li>
              <li>Klanten helpen</li>
              <li>Winkel proper houden</li>
              <li>Prijslabels controleren</li>
            </ul>
          </ParticleCard>

          <ParticleCard className="stage-block mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={10} clickEffect enableTilt={false} enableMagnetism={false}>
            <h3>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.5L5 9.5H8.5L7 16.5L13 8.5H9.5Z" fill="#e8b84a" stroke="#1e3a5f" strokeWidth="0.8" strokeLinejoin="round"/>
              </svg>
              <ScrollFloat stagger={0.08}>Uitdagingen</ScrollFloat>
            </h3>
            <p>
              Ik ben zelf Oekraïner en spreek ook Russisch, dus de communicatie met de meeste klanten ging eigenlijk heel goed. Dat was voor mij juist een voordeel van deze stage.
            </p>
            <p>
              De echte uitdaging was het Nederlands. Soms moest ik goed nadenken om alles te begrijpen, maar ik leer er snel van. Zaterdag was ook druk. Dan kwamen veel mensen tegelijk en moest ik snel werken zonder fouten te maken.
            </p>
          </ParticleCard>

          <ParticleCard className="stage-block mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={10} clickEffect enableTilt={false} enableMagnetism={false}>
            <h3>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.5Q9 2.5 4.5 2.5H2V15.5H4.5Q9 15.5 9 16.5V3.5Z" fill="#1e3a5f"/>
                <path d="M9 3.5Q9 2.5 13.5 2.5H16V15.5H13.5Q9 15.5 9 16.5V3.5Z" fill="#264f83"/>
                <line x1="9" y1="3.5" x2="9" y2="16.5" stroke="#e8b84a" strokeWidth="1.5"/>
                <line x1="3" y1="7" x2="7.5" y2="7" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
                <line x1="3" y1="9.5" x2="7.5" y2="9.5" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
              </svg>
              <ScrollFloat stagger={0.06}>Wat ik heb geleerd</ScrollFloat>
            </h3>
            <p>
              Ik leerde hoe een winkel werkt en hoe je goed omgaat met klanten. Het fijnste was dat ik al snel zelfstandig mocht werken aan de kassa. Dat gaf me veel vertrouwen.
            </p>
            <p>
              Ik leerde ook veel over Oekraïense producten en cultuur. Klanten vertelden soms over wat ze kochten of over hun thuisland. Dat vond ik heel interessant.
            </p>
          </ParticleCard>

          <ParticleCard className="stage-block mb-bento-card mb-border-glow" glowColor={GLOW} particleCount={10} clickEffect enableTilt={false} enableMagnetism={false}>
            <h3>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="7.5" stroke="#1e3a5f" strokeWidth="1.5" fill="none"/>
                <circle cx="9" cy="9" r="4.5" stroke="#1e3a5f" strokeWidth="1.5" fill="none"/>
                <circle cx="9" cy="9" r="2" fill="#e8b84a"/>
              </svg>
              <ScrollFloat stagger={0.07}>Vaardigheden</ScrollFloat>
            </h3>
            <p>Vaardigheden die ik tijdens mijn stage heb geoefend:</p>
            <div className="skills-wrap">
              <span className="skill-tag">Kassabeheer</span>
              <span className="skill-tag">Klantgesprekken</span>
              <span className="skill-tag">Samenwerken</span>
              <span className="skill-tag">Producten beheren</span>
              <span className="skill-tag">Initiatief nemen</span>
              <span className="skill-tag">Communiceren</span>
              <span className="skill-tag">Flexibel werken</span>
              <span className="skill-tag">Zelfstandigheid</span>
              <span className="skill-tag">Vriendelijkheid</span>
              <span className="skill-tag">Probleemoplossing</span>
            </div>
          </ParticleCard>

        </div>
      </section>
    </>
  )
}
