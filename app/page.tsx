import Image from "next/image";
import Petals from "./Petals";

const photos = [
  { src: "/images/photo2.jpg", alt: "Our first chapter" },     // matches public/images/photo2.jpg
  { src: "/images/Photo3.jpg", alt: "A beautiful moment together" }, // matches public/images/Photo3.jpg
  { src: "/images/Photo4.jpg", alt: "Our engagement chapter" }, // matches public/images/Photo4.jpg
];

export default function Home() {
  return (
    <>
      <div className="petals" aria-hidden="true" /><Petals />

      <header className="hero" id="home">
        <nav className="nav">
          <a className="brand" href="#home">A <span>♥</span> A</a>
          <div className="nav-links">
            <a href="#story">Our Story</a>
            <a href="#promise">Forever</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">OUR ENGAGEMENT STORY</p>
          <h1>Our Forever<br /><em>Begins Here</em></h1>
          <p className="hero-subtitle">Two hearts. One beautiful journey. A lifetime to go.</p>
          <a className="scroll-btn" href="#story">Discover our story <span>↓</span></a>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-frame">
            <Image src="/images/cover.jpg" alt="The engaged couple together" width={940} height={1175} priority />
          </div>
          <span className="frame-note">Together, always</span>
        </div>
      </header>

      <main>
        <section className="intro" id="story">
          <p className="eyebrow">A LITTLE BIT OF US</p>
          <h2>Some stories are written.<br /><em>Ours was meant to be lived.</em></h2>
          <p className="intro-text">
            From a first glance to a promise of forever, every little moment brought us
            closer to this beautiful chapter.
          </p>
        </section>

        <section className="story-section">
          <article className="story-card">
            <div className="story-image">
              <Image src={photos[0].src} alt={photos[0].alt} width={720} height={960} />
              <span className="chapter">01</span>
            </div>
            <div className="story-copy">
              <p className="eyebrow">WHERE OUR STORY BEGAN · 14 MARCH 2026</p>
              <h2>It started with<br /><em>a first glance.</em></h2>
              <p>
                Our eyes met for the first time at Pennukanal, in the warmth of home.
                Little did we know that this moment would be the beginning of our forever.
              </p>
            </div>
          </article>

          <article className="story-card reverse">
            <div className="story-image">
              <Image src={photos[1].src} alt={photos[1].alt} width={720} height={960} />
              <span className="chapter">02</span>
            </div>
            <div className="story-copy">
              <p className="eyebrow">FINDING OUR WAY TO EACH OTHER</p>
              <h2>Somehow,<br /><em>we found us.</em></h2>
              <p>
                Life led us beyond that first meeting, and somewhere along the way,
                we found each other. Two hearts, one beautiful journey, and a love
                that grew with every step.
              </p>
            </div>
          </article>

          <article className="story-card">
            <div className="story-image">
              <Image src={photos[2].src} alt={photos[2].alt} width={720} height={960} />
              <span className="chapter">03</span>
            </div>
            <div className="story-copy" id="promise">
              <p className="eyebrow">THE PROMISE OF FOREVER · 28 SEPTEMBER 2026</p>
              <h2>And then came<br /><em>our forever.</em></h2>
              <p>
                And then came our engagement—a promise to walk through life hand in hand.
                What began with a first glance became a lifetime of love, and our forever starts here.
              </p>
            </div>
          </article>
        </section>

        <section className="dates-section">
          <p className="eyebrow">THE DATES THAT BECAME OURS</p>
          <div className="date-grid">
            <div className="date-item">
              <span className="date-number">14</span>
              <div><strong>March 2026</strong><p>The day our story began.</p></div>
            </div>
            <div className="date-heart">♥</div>
            <div className="date-item">
              <span className="date-number">28</span>
              <div><strong>September 2026</strong><p>The day we said yes to forever.</p></div>
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="closing-inner">
            <p className="eyebrow">TO NEW BEGINNINGS</p>
            <h2>Here’s to love,<br /><em>laughter & forever.</em></h2>
            <div className="heart-line"><span></span> ♥ <span></span></div>
            <p className="closing-text">Our next chapter is just beginning.</p>
          </div>
        </section>
      </main>

      <footer><p>Made with love <span>♥</span> for our forever</p></footer>
    </>
  );
}
