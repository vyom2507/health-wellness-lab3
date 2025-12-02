<template>
  <div>


    <div
      class="hero-container"
      :style="{ backgroundImage: 'url(/src/assets/breathing-hero.jpeg)' }"
    >
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">Breathing Exercise</h1>
        <p class="hero-subtitle">
          Follow the gentle rhythm to reset your mind and body.
        </p>
      </div>
    </div>


    <!-- ===============================
         MAIN CONTENT SECTION
    =============================== -->
    <section class="page-section">

      <div class="section-title-line"></div>
      <h2 class="section-title">Guided Box Breathing</h2>
      <p class="section-subtitle">
        Inhale, hold, exhale, and pause — each for 4 seconds.
      </p>


      <!-- Breathing Animation Container -->
      <div class="breathing-container">
        <div class="breathing-circle"></div>
      </div>

      <!-- Instructions -->
      <div class="breathing-text">
        <h3>🌬️ How it works:</h3>
        <p>Inhale for 4 seconds</p>
        <p>Hold for 4 seconds</p>
        <p>Exhale for 4 seconds</p>
        <p>Pause for 4 seconds</p>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "Breathing",
};
</script>

<style scoped>
/* Center the animation */
.breathing-container {
  display: flex;
  justify-content: center;
  margin: 40px 0 25px;
}

/* The Animated Circle */
.breathing-circle {
  width: 160px;
  height: 160px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  animation: breathe 6s infinite ease-in-out;
  opacity: 0.9;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
}

/* Breathing Animation */
@keyframes breathe {
  0% {
    transform: scale(0.85);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.95);
  }
  75% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(0.85);
  }
}

/* Text instructions */
.breathing-text {
  text-align: center;
  margin-top: 20px;
}

.breathing-text h3 {
  margin-bottom: 14px;
  color: var(--primary);
}

.breathing-text p {
  opacity: 0.85;
  margin: 6px 0;
}
</style>
