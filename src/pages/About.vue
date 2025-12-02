<template>
  <div>

    <!-- ===============================
         HERO SECTION WITH IMAGE
    =============================== -->
    <div
      class="hero-container"
      :style="{ backgroundImage: 'url(/src/assets/about-hero.jpg)' }"
    >
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">About WellnessMint</h1>
        <p class="hero-subtitle">
          A simple space to help you live healthier — one small step at a time.
        </p>
      </div>
    </div>


    <!-- ===============================
         ABOUT CONTENT SECTION
    =============================== -->
    <section class="page-section">

      <div class="section-title-line"></div>
      <h2 class="section-title">Our Purpose</h2>
      <p class="section-subtitle">
        WellnessMint is built with the intention to make wellness simple, practical, and accessible.
      </p>


      <!-- Mission Section -->
      <div class="about-block">
        <h3>🌿 Our Mission</h3>
        <p>
          We believe your well-being should not be complicated.  
          Whether it's a short breathing exercise, a healthy habit, or a mindful pause,
          small changes create meaningful impact.
        </p>
      </div>

      <!-- Vision Section -->
      <div class="about-block">
        <h3>✨ Our Vision</h3>
        <p>
          To provide a clean and minimalist space that encourages healthier choices and mindful living.
          Our goal is to help you cultivate balance in your daily routines.
        </p>
      </div>

      <!-- Approach Section -->
      <div class="about-block">
        <h3>💛 Our Approach</h3>
        <p>
          WellnessMint focuses on simplicity — easy-to-follow tips, calming guided practices,
          and a design that promotes clarity and peace.
        </p>
      </div>


      <!-- Footer / Contact style -->
      <div class="about-footer-box">
        <p>Made with intention & care as part of an academic project.</p>
        <p>© {{ new Date().getFullYear() }} WellnessMint — All Rights Reserved</p>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-block {
  background: white;
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 22px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  border-left: 5px solid var(--primary);
}

.about-block h3 {
  margin-bottom: 10px;
  color: var(--primary);
}

.about-footer-box {
  text-align: center;
  margin-top: 40px;
  font-size: 0.95rem;
  opacity: 0.8;
}
</style>
