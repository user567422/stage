import { Outlet, Link, useLocation } from 'react-router-dom'
import PillNav from './PillNav'
import Waves from './Waves'

export default function Layout() {
  const location = useLocation()
  const isHome   = location.pathname === '/'

  return (
    <>
      {/* Waves background — all pages EXCEPT Home (Home has LiquidEther) */}
      {!isHome && (
        <Waves
          lineColor="rgba(255, 255, 255, 0.1)"
          backgroundColor="transparent"
          waveSpeedX={0.0125}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      )}

      {/*
        layout-content — z-index: 1 so it paints above the Waves canvas (z-index: 0).
        Without this wrapper, fixed z-index: 0 canvas would be drawn on top of
        regular (non-positioned) DOM content in the same stacking context.
      */}
      <div className="layout-content">
        <div className="school-banner">
          <div className="school-banner-track">
            {[0, 1, 2, 3].map(i => (
              <span className="school-banner-item" key={i} aria-hidden={i > 0 ? true : undefined}>
                Schoolproject &bull; <span>5oos Campus De Vesten</span> &bull; Mykyta Horovyi &bull; <span>2025–2026</span>
              </span>
            ))}
          </div>
        </div>

        <nav>
          <div className="nav-inner">
            <Link to="/" className="nav-logo">Nostalgie Stage</Link>

            <PillNav
              items={[
                { label: 'Home',            href: '/' },
                { label: 'Over de winkel',  href: '/over-de-winkel' },
                { label: 'Mijn stage',      href: '/mijn-stage' },
                { label: "Foto's",          href: '/fotos' },
                { label: 'Contact',         href: '/contact' },
              ]}
              activeHref={location.pathname}
              baseColor="#0d1220"
              pillColor="rgba(232, 184, 74, 0.13)"
              pillTextColor="rgba(255,255,255,0.68)"
              hoveredPillTextColor="#e8b84a"
              ease="power3.easeOut"
              initialLoadAnimation={false}
            />
          </div>
        </nav>

        <Outlet />

        <footer>
          <p>Stageverslag <span className="footer-name">Nostalgie</span> &mdash; Mykyta Horovyi &bull; 5oos Campus De Vesten</p>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/over-de-winkel">Over de winkel</Link></li>
            <li><Link to="/mijn-stage">Mijn stage</Link></li>
            <li><Link to="/fotos">Foto's</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </footer>
      </div>
    </>
  )
}
