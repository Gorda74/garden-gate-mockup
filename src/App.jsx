import { useEffect, useState } from 'react'
import AvailabilityModal from './AvailabilityModal'
import './App.css'

const NAV_LINKS = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#breakfast', label: 'Breakfast' },
  { href: '#attractions', label: 'Door County' },
  { href: '#policies', label: 'Good to Know' },
  { href: '#contact', label: 'Contact' },
]

const ROOMS = [
  {
    name: 'Cottage Rose Room',
    image: '/images/Cottage-Rose-room-1.jpg',
    bed: 'Queen bed',
    blurb:
      'A warm, wood-paneled retreat with a hand-carved antique headboard and its own fireplace glow.',
  },
  {
    name: 'Garden Suite',
    image: '/images/Garden-Suite-1.jpg',
    bed: 'Queen bed · Private bath',
    blurb:
      'Soft sage walls, a mirrored oak armoire, and a private en-suite bath just steps from the bed.',
  },
  {
    name: 'Lavender Room',
    image: '/images/lavender-room-2.jpg',
    bed: 'Queen bed',
    blurb:
      'Named for its dusty-violet walls, this room pairs a dark wood dresser with a plush floral rug.',
  },
  {
    name: 'Vintage Rose Room',
    image: '/images/vintage-rose-room.jpg',
    bed: 'King bed · Sitting area',
    blurb:
      'Our largest room — a king bed, a window seat for reading, and a private bath with a soaking tub.',
  },
]

const DETAIL_SHOTS = [
  { image: '/images/Cottage-Rose-room-2.jpg', caption: 'Ensuite baths, freshened daily' },
  { image: '/images/nivo2.jpg', caption: 'A rose-side soak for two' },
  { image: '/images/Garden-Suite-2.jpg', caption: 'Breakfast tray, delivered warm' },
  { image: '/images/main-pic4.png', caption: 'The parlor fire, lit each evening' },
]

const ATTRACTIONS = [
  {
    image: '/images/lighthouse2.png',
    title: 'Historic Lighthouses',
    text: 'A short drive to some of the most photographed lighthouses on the Great Lakes.',
  },
  {
    image: '/images/state-park.png',
    title: 'Shoreline & State Parks',
    text: 'Rocky beaches, bluff-top trails, and quiet water just minutes from the porch.',
  },
  {
    image: '/images/farmer_market.png',
    title: 'Farmers Markets',
    text: 'Weekend stalls of just-picked produce, cherries, and local preserves in season.',
  },
  {
    image: '/images/Restaurants-and-Fish-boils.png',
    title: 'A Classic Fish Boil',
    text: 'Watch the boil-over up close at one of the county’s traditional outdoor fish boils.',
  },
  {
    image: '/images/wines.png',
    title: 'Winery Tastings',
    text: 'Small, family-run wineries pour tastings a short scenic drive from your room.',
  },
  {
    image: '/images/lighthouse.png',
    title: 'Theatre in the Pines',
    text: 'Open-air performances under the trees at the county’s beloved outdoor theatre.',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <a href="#top" className="brand">
            The Garden Gate
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="site-header__actions">
            <button
              type="button"
              className="btn btn--primary btn--small"
              onClick={() => setModalOpen(true)}
            >
              Check Availability
            </button>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img src="/images/gate-house.jpg" alt="The Garden Gate, a blue Victorian home with a white picket fence" />
          <div className="hero__scrim" />
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">Door County, Wisconsin</p>
            <h1>The Garden Gate</h1>
            <p className="hero__subtitle">
              A Victorian bed &amp; breakfast where every room has a story and breakfast is
              never rushed.
            </p>
            <div className="hero__actions">
              <a href="#rooms" className="btn btn--primary">
                View Rooms
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => setModalOpen(true)}>
                Check Availability
              </button>
            </div>
          </div>
        </section>

        <section className="welcome">
          <div className="welcome__image">
            <img src="/images/main-pic3.png" alt="The home's original oak staircase and entry hall" />
          </div>
          <div className="welcome__text">
            <p className="eyebrow">Welcome</p>
            <h2>A century-old home, kept just as warm as ever</h2>
            <p>
              Built in the late 1800s and lovingly restored, The Garden Gate keeps its original
              woodwork, its wallpapered corners, and its slow front-porch pace. We&rsquo;re a
              five-minute walk from the harbor and a short drive from the county&rsquo;s
              lighthouses, wineries, and shoreline trails &mdash; close enough to explore, quiet
              enough to actually rest.
            </p>
            <p>
              Four guest rooms, a fireplace-lit parlor, and a breakfast table that fills most
              mornings with the smell of something baking.
            </p>
            <a href="#rooms" className="text-link">
              See the rooms &rarr;
            </a>
          </div>
        </section>

        <section id="rooms" className="rooms">
          <div className="section-heading">
            <p className="eyebrow">Stay</p>
            <h2>Four Rooms, Each Its Own Mood</h2>
            <p className="section-heading__sub">
              Every room is individually decorated with antiques original to the house, a private
              or en-suite bath, and a bed made up with more pillows than you asked for.
            </p>
          </div>
          <div className="room-grid">
            {ROOMS.map((room) => (
              <article className="room-card" key={room.name}>
                <div className="room-card__image">
                  <img src={room.image} alt={room.name} loading="lazy" />
                </div>
                <div className="room-card__body">
                  <h3>{room.name}</h3>
                  <p className="room-card__bed">{room.bed}</p>
                  <p>{room.blurb}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="detail-strip">
            {DETAIL_SHOTS.map((shot) => (
              <figure key={shot.image}>
                <img src={shot.image} alt={shot.caption} loading="lazy" />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="breakfast" className="breakfast">
          <div className="breakfast__image">
            <img src="/images/main-pic7.png" alt="A gourmet baked breakfast dish with coffee and juice" />
          </div>
          <div className="breakfast__text">
            <p className="eyebrow">Every Morning</p>
            <h2>Breakfast, Made From Scratch</h2>
            <p>
              A full, hot breakfast is included with every stay &mdash; baked egg dishes, coffee
              cake still warm from the oven, and fresh fruit, served in the dining room or out on
              the porch when the weather cooperates.
            </p>
            <blockquote>
              <p>
                &ldquo;I still cook the way this kitchen was built for &mdash; slow, from scratch,
                and enough for seconds.&rdquo;
              </p>
              <footer>
                <img src="/images/robin.png" alt="Robin, innkeeper of The Garden Gate" />
                <span>Robin, Innkeeper</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <section id="attractions" className="attractions">
          <div className="section-heading">
            <p className="eyebrow">Nearby</p>
            <h2>Door County, Right Outside</h2>
            <p className="section-heading__sub">
              Lighthouses, shoreline, and small-town charm are all within easy reach &mdash; close
              enough for an afternoon, far enough to feel like a proper trip.
            </p>
          </div>
          <div className="attraction-grid">
            {ATTRACTIONS.map((item) => (
              <article className="attraction-card" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="attraction-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="policies" className="policies">
          <div className="policies__banner">
            <img src="/images/guest-policy-min.jpg" alt="Garden flowers, the house exterior, and a set breakfast table" />
          </div>
          <div className="policies__content">
            <div className="section-heading section-heading--left">
              <p className="eyebrow">Good to Know</p>
              <h2>Before You Book</h2>
            </div>
            <div className="policies__grid">
              <div>
                <h3>Check-in &amp; Check-out</h3>
                <p>Check-in from 3:00 PM, check-out by 11:00 AM. Early arrivals are welcome to relax on the porch until your room is ready.</p>
              </div>
              <div>
                <h3>Cancellations</h3>
                <p>Full refund up to 7 days before arrival. We understand plans change &mdash; just give us a call.</p>
              </div>
              <div>
                <h3>A Quiet, Grown-up Stay</h3>
                <p>The house is best suited to guests 12 and older, and kept smoke-free throughout, gardens included.</p>
              </div>
              <div>
                <h3>Bringing a Pet?</h3>
                <p>Well-behaved pets are welcome in select rooms by advance arrangement &mdash; just ask when you book.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact__inner">
            <p className="eyebrow eyebrow--light">Plan Your Stay</p>
            <h2>Come Sit on the Porch a While</h2>
            <p className="contact__sub">
              Reach out and we&rsquo;ll help you find the right room and the right dates.
            </p>
            <div className="contact__details">
              <div>
                <h3>Address</h3>
                <p>124 Garden Lane<br />Door County, WI 54235</p>
              </div>
              <div>
                <h3>Phone</h3>
                <p>(920) 555-0148</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>stay@gardengateinn.example</p>
              </div>
            </div>
            <button type="button" className="btn btn--primary" onClick={() => setModalOpen(true)}>
              Check Availability
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>The Garden Gate Bed &amp; Breakfast &middot; Door County, Wisconsin</p>
        <p>&copy; {new Date().getFullYear()} The Garden Gate. All rights reserved.</p>
      </footer>

      <AvailabilityModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
