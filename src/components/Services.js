export function renderServices() {
  return `
    <section id="services" class="section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-description">At Classic Collision, we offer comprehensive automotive repair services with the highest quality standards and customer satisfaction.</p>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <img src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg" alt="Collision Repair">
            </div>
            <h3>Collision Repair</h3>
            <p>Expert repair services for vehicles involved in accidents. We restore your car to pre-accident condition.</p>
            <button class="btn-text service-learn-more">Learn more</button>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg" alt="Auto Body Work">
            </div>
            <h3>Auto Body Work</h3>
            <p>Complete auto body services including dent removal and panel replacement.</p>
            <button class="btn-text service-learn-more">Learn more</button>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <img src="https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg" alt="Paint Services">
            </div>
            <h3>Paint Services</h3>
            <p>Premium paint services with computerized color matching for a flawless finish.</p>
            <button class="btn-text service-learn-more">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  `;
}