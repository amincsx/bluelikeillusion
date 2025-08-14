export default function HomePage() {
  return (
    <div className="explore-content">
      <div className="video-background">
        <video autoPlay loop muted playsInline id="bgVideo">
          <source src="/animations/bluelikeillusion animation.mp4" type="video/mp4" />
        </video>
        <div className="overlay" />
      </div>

      <nav className="explore-nav">
        <div className="logo-container">
          <a href="/" className="small-logo">Bluelike Illusion</a>
          <video className="logo-animation" muted playsInline>
            <source src="/blender file/1h2640060-0130.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="nav-links">
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <main className="explore-content">
        <section id="hero" className="hero-section">
          <h1>Crafting Digital Excellence</h1>
          <p className="tagline">Web Development • Mobile Apps • Digital Solutions</p>
        </section>
      </main>
    </div>
  );
}

