import { useEffect, useState } from 'react'
import { Ban, Calendar, Clock, PawPrint } from 'lucide-react'
import AvailabilityModal from './AvailabilityModal'
import Reveal from './Reveal'
import { LeafDivider, LeafSprig } from './Ornaments'
import './App.css'

const NAV_LINKS = [
  { href: '#history', label: 'Our Story' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#breakfast', label: 'Breakfast' },
  { href: '#attractions', label: 'Door County' },
  { href: '#policies', label: 'Good to Know' },
  { href: '#contact', label: 'Contact' },
]

const HERO_COLLAGE = [
  { src: '/images/porch-img.jpg', alt: 'The garden-side porch, set with tea for two' },
  { src: '/images/main-pic7.png', alt: 'A candlelit breakfast spread with coffee and fresh fruit' },
]

const HISTORY_TIMELINE = ['1910', 'Built by John Falk', 'Carefully preserved through the years', 'Welcoming guests today']

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
    name: 'English Lavender Room',
    image: '/images/lavender-room-2.jpg',
    bed: 'Queen bed',
    blurb:
      'Named for its dusty-violet walls, this room pairs a dark wood dresser with a plush floral rug.',
    featured: true,
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
  { image: '/images/Cottage-Rose-room-2.jpg', caption: 'Classic vanity details' },
  { image: '/images/nivo2.jpg', caption: 'Private whirlpool bath' },
  { image: '/images/main-pic4.png', caption: 'Firelit evenings in the parlor', position: '30% center' },
  { image: '/images/big-rooms-vs2.png', caption: 'Original woodwork throughout', position: '85% center' },
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
    position: 'center 65%',
  },
]

const POLICIES = [
  {
    icon: Clock,
    title: 'Check-in & Check-out',
    text: 'Check-in from 3:00 PM, check-out by 11:00 AM. Early arrivals are welcome to relax on the porch until your room is ready.',
  },
  {
    icon: Calendar,
    title: 'Cancellations',
    text: 'Full refund up to 7 days before arrival. We understand plans change — just give us a call.',
  },
  {
    icon: Ban,
    title: 'A Quiet, Grown-up Stay',
    text: 'The house is best suited to guests 12 and older, and kept smoke-free throughout, gardens included.',
  },
  {
    icon: PawPrint,
    title: 'Bringing a Pet?',
    text: 'Well-behaved pets are welcome in select rooms by advance arrangement — just ask when you book.',
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
          <div className="hero__media">
            <img
              className="hero__main-image"
              src="/images/gate-house.jpg"
              alt="The Garden Gate, a blue Victorian home with a white picket fence and garden"
            />
            <div className="hero__scrim" />
          </div>
          <div className="hero__collage">
            {HERO_COLLAGE.map((item) => (
              <div className="hero__collage-item" key={item.src}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">Door County, Wisconsin</p>
            <h1>Historic Charm. Warm Hospitality.</h1>
            <p className="hero__subtitle">
              A Victorian bed &amp; breakfast where every room has a story and breakfast is
              never rushed.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn--primary" onClick={() => setModalOpen(true)}>
                Check Availability
              </button>
              <a href="#rooms" className="btn btn--ghost">
                View Rooms
              </a>
            </div>
          </div>
        </section>

        <section className="more-than-stay">
          <Reveal className="more-than-stay__image">
            <img src="/images/main-pic4.png" alt="A fireplace glowing beside a formal dining room" />
          </Reveal>
          <Reveal as="div" className="more-than-stay__text">
            <p className="eyebrow">More Than a Stay</p>
            <h2>Relax Like You&rsquo;re Visiting Old Friends</h2>
            <p>
              Sink into a cozy chair beside the fireplace, enjoy a homemade dessert in the
              evening, and wake to the smell of a freshly prepared breakfast.
            </p>
          </Reveal>
        </section>

        <LeafDivider />

        <section id="history" className="history">
          <Reveal as="div" className="history__text">
            <p className="eyebrow">Our Story</p>
            <h2>A Storied Home Since 1910</h2>
            <ol className="timeline">
              {HISTORY_TIMELINE.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              Built in 1910 by local craftsman John Falk — the same builder behind several of
              downtown Door County&rsquo;s landmark buildings — this home has been carefully
              preserved through generations, from its original woodwork to its wraparound porch.
              Today it continues its purpose, welcoming travelers just as it has for over a
              century.
            </p>
          </Reveal>
          <Reveal className="history__image">
            <img
              src="/images/main-pic3.png"
              alt="The home's original oak staircase and entry hall"
              style={{ objectPosition: '25% center' }}
            />
          </Reveal>
        </section>

        <section id="rooms" className="rooms">
          <Reveal as="div" className="section-heading">
            <p className="eyebrow">Stay</p>
            <h2>Four Rooms, Each Its Own Mood</h2>
            <p className="section-heading__sub">
              Every room is individually decorated with antiques original to the house, a private
              or en-suite bath, and a bed made up with more pillows than you asked for.
            </p>
          </Reveal>
          <div className="room-grid">
            {ROOMS.map((room, i) => (
              <Reveal as="article" className="room-card" key={room.name} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="room-card__image">
                  {room.featured && <span className="room-card__badge">Featured Room</span>}
                  <img src={room.image} alt={room.name} loading="lazy" />
                </div>
                <div className="room-card__body">
                  <h3>{room.name}</h3>
                  <p className="room-card__bed">{room.bed}</p>
                  <p>{room.blurb}</p>
                  <button
                    type="button"
                    className="text-link room-card__cta"
                    onClick={() => setModalOpen(true)}
                  >
                    View Room &rarr;
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="detail-strip">
            {DETAIL_SHOTS.map((shot, i) => (
              <Reveal
                as="figure"
                key={shot.image}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={shot.image}
                  alt={shot.caption}
                  loading="lazy"
                  style={{ objectPosition: shot.position || 'center' }}
                />
                <figcaption>{shot.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="breakfast" className="breakfast">
          <Reveal className="breakfast__image">
            <img src="/images/main-pic7.png" alt="A gourmet baked breakfast dish with coffee and juice" />
          </Reveal>
          <Reveal as="div" className="breakfast__text">
            <p className="eyebrow">Every Morning</p>
            <h2>Breakfast, Made From Scratch</h2>
            <p>
              Each morning, guests gather in the dining room for a candlelit breakfast with soft
              music and easy conversation. Everything is prepared fresh by innkeeper Robin Vallow
              using locally sourced ingredients &mdash; think seasonal fruit, homemade scones,
              quiche, and more.
            </p>
            <blockquote>
              <p>
                &ldquo;I still cook the way this kitchen was built for &mdash; slow, from scratch,
                and enough for seconds.&rdquo;
              </p>
              <footer>
                <img src="/images/robin.png" alt="Robin Vallow, innkeeper of The Garden Gate" />
                <span>Robin Vallow, your innkeeper</span>
              </footer>
            </blockquote>
          </Reveal>
        </section>

        <section id="attractions" className="attractions">
          <Reveal as="div" className="section-heading">
            <p className="eyebrow">Nearby</p>
            <h2>Door County, Right Outside</h2>
            <p className="section-heading__sub">
              Lighthouses, shoreline, and small-town charm are all within easy reach &mdash; close
              enough for an afternoon, far enough to feel like a proper trip.
            </p>
          </Reveal>
          <div className="attraction-grid">
            {ATTRACTIONS.map((item, i) => (
              <Reveal
                as="article"
                className="attraction-card"
                key={item.title}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="attraction-card__image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectPosition: item.position || 'center' }}
                  />
                </div>
                <div className="attraction-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <LeafDivider />

        <section id="faith" className="faith">
          <Reveal className="faith__inner">
            <LeafSprig className="faith__icon" />
            <p className="eyebrow">Our Values</p>
            <h2>Rooted in Faith. Guided by Hospitality.</h2>
            <p>
              Hospitality, to us, is more than a business &mdash; it&rsquo;s a way of caring for
              people. We try to welcome every guest the way we&rsquo;d want to be welcomed
              ourselves: unhurried, genuinely looked after, and always with a warm place to land.
            </p>
            <blockquote className="faith__verse">
              <p>&ldquo;Build houses and settle down; plant gardens and eat what they produce.&rdquo;</p>
              <cite>Jeremiah 29:5</cite>
            </blockquote>
          </Reveal>
        </section>

        <section id="policies" className="policies">
          <Reveal className="policies__banner">
            <img src="/images/guest-policy-min.jpg" alt="Garden flowers, the house exterior, and a set breakfast table" />
          </Reveal>
          <div className="policies__content">
            <Reveal as="div" className="section-heading section-heading--left">
              <p className="eyebrow">Good to Know</p>
              <h2>Before You Book</h2>
            </Reveal>
            <div className="policies__grid">
              {POLICIES.map((item) => (
                <div className="policy-item" key={item.title}>
                  <item.icon className="policy-item__icon" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeafDivider />

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
        <div className="site-footer__inner">
          <p className="site-footer__brand">The Garden Gate</p>
          <p>Bed &amp; Breakfast &middot; Door County, Wisconsin</p>
          <p className="site-footer__press">As seen in Fun in Wisconsin magazine</p>
          <div className="site-footer__divider" />
          <p className="site-footer__copyright">
            &copy; {new Date().getFullYear()} The Garden Gate. All rights reserved.
          </p>
        </div>
      </footer>

      <AvailabilityModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
