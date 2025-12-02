<template>
  <div class="hero-page">
    <div class="hero-overlay"></div>

    <!-- Top bar over the image -->
    <header class="hero-header">
  <div class="hero-brand">WellnessMint</div>

  <nav class="hero-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/tips">Daily Tips</RouterLink>
    <RouterLink to="/yoga">Yoga & Meditation</RouterLink>
    <RouterLink to="/planner">Planner</RouterLink>
    <RouterLink to="/breathing">Breathing</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</header>


    <!-- Center content -->
    <main class="hero-content">
      <p class="hero-subtitle">Breathe • Move • Reset</p>
      <h1 class="hero-title">Your Daily Health & Wellness Companion</h1>
      <p class="hero-text">
        Simple practices, mindful movement, and science-backed tips to help you feel better every day.
      </p>
      <div class="hero-actions">
        <RouterLink to="/tips" class="btn-main">Explore Daily Tips</RouterLink>
        <RouterLink to="/yoga" class="btn-outline">Start a Calm Session</RouterLink>
      </div>
    </main>

    <!-- Footer on top of the image -->
    <footer class="hero-footer">
      <p>© {{ new Date().getFullYear() }} WellnessMint · For course use only</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.hero-page {
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center;
}

/* Dark overlay so text is readable */
.hero-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.8)
  );
  z-index: 0;
}

.hero-header,
.hero-content,
.hero-footer {
  position: relative;
  z-index: 1;
}

/* Top bar */
.hero-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 60px;
  font-size: 0.95rem;
}

.hero-brand {
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #f9fafb;
  opacity: 0.85;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 999px;
  transition: 0.2s;
}

.hero-nav a.router-link-active,
.hero-nav a:hover {
  background-color: rgba(240, 243, 189, 0.15);
  opacity: 1;
}

/* Center hero text */
.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  padding: 0 60px;
}

.hero-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  color: #f0f3bd;
  margin-bottom: 12px;
}

.hero-title {
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero-text {
  max-width: 550px;
  font-size: 1rem;
  opacity: 0.9;
}

/* Buttons */
.hero-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-main {
  background: var(--primary);
  color: white;
  padding: 12px 26px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: 0.25s;
}

.btn-main:hover {
  background: var(--secondary);
  transform: translateY(-1px);
}

.btn-outline {
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 11px 24px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: 0.25s;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

/* Footer */
.hero-footer {
  padding: 16px 60px 24px;
  font-size: 0.8rem;
  opacity: 0.75;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 16px 20px;
  }

  .hero-content {
    padding: 40px 20px 20px;
  }

  .hero-title {
    font-size: 2.1rem;
  }

  .hero-footer {
    padding: 12px 20px 20px;
  }

  .hero-nav a {
    margin-left: 10px;
    font-size: 0.85rem;
  }
}
</style>
