<template>
  <div>

    <!-- ===============================
         HERO SECTION WITH IMAGE
    =============================== -->
    <div
      class="hero-container"
      :style="{ backgroundImage: 'url(/src/assets/planner-hero.jpg)' }"
    >
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">Wellness Planner</h1>
        <p class="hero-subtitle">
          Build healthy routines and track your daily wellness goals.
        </p>
      </div>
    </div>

    <!-- ===============================
         MAIN CONTENT SECTION
    =============================== -->
    <section class="page-section">

      <div class="section-title-line"></div>
      <h2 class="section-title">Your Daily Wellness Plan</h2>
      <p class="section-subtitle">
        Simple rituals that keep your mind & body aligned.
      </p>

      <!-- Grid Layout -->
      <div class="grid-3">

        <!-- Morning Routine -->
        <div class="planner-card">
          <h3>🌞 Morning Routine</h3>
          <ul>
            <li>Drink a glass of water</li>
            <li>5-minute stretch</li>
            <li>2 minutes of mindful breathing</li>
            <li>Quick gratitude reflection</li>
          </ul>
        </div>

        <!-- Daily Goals -->
        <div class="planner-card">
          <h3>✔️ Daily Wellness Goals</h3>
          <ul>
            <li>8,000+ steps</li>
            <li>Eat 3 colorful foods</li>
            <li>Stay hydrated (6–8 glasses)</li>
            <li>Limit screen time breaks</li>
          </ul>
        </div>

        <!-- Evening Routine -->
        <div class="planner-card">
          <h3>🌙 Evening Routine</h3>
          <ul>
            <li>Light stretching</li>
            <li>Reflect on your day</li>
            <li>Write tomorrow’s priority</li>
            <li>Get to bed on time</li>
          </ul>
        </div>

      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: "Planner",
};
</script>

<style scoped>
.planner-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  border-left: 5px solid var(--primary);
}

.planner-card h3 {
  margin-bottom: 12px;
  color: var(--primary);
}

.planner-card ul {
  list-style: none;
  padding-left: 0;
}

.planner-card li {
  margin-bottom: 8px;
  opacity: 0.85;
}
</style>
