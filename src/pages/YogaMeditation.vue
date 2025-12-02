<template>
  <div>

    <!-- ===============================
         HERO SECTION WITH IMAGE
    =============================== -->
    <div
      class="hero-container"
      :style="{ backgroundImage: 'url(/src/assets/yoga-hero.jpg)' }"
    >
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">Yoga & Meditation</h1>
        <p class="hero-subtitle">
          Calm, mindful practices to restore your inner balance.
        </p>
      </div>
    </div>

    <!-- ===============================
         PAGE CONTENT SECTION
    =============================== -->
    <section class="page-section">
      
      <div class="section-title-line"></div>
      <h2 class="section-title">Mind & Body Practices</h2>
      <p class="section-subtitle">
        Explore sessions designed to improve relaxation, focus, and well-being.
      </p>

      <!-- Yoga/Meditation Cards -->
      <div class="grid-3">
        <YogaCard
          v-for="(session, index) in sessions"
          :key="index"
          :title="session.title"
          :description="session.description"
        />
      </div>

    </section>

  </div>
</template>

<script>
import YogaCard from "../components/YogaCard.vue";

export default {
  name: "YogaMeditation",
  components: {
    YogaCard,
  },

  data() {
    return {
      sessions: [
        {
          title: "Deep Breathing",
          description:
            "Use slow and controlled breathing to calm your nervous system and clear your mind.",
        },
        {
          title: "Body Scan Relaxation",
          description:
            "A gentle practice that guides attention throughout the body to release tension.",
        },
        {
          title: "Mindful Sitting",
          description:
            "Sit comfortably, observe the breath, and practice being fully present.",
        },
        {
          title: "Light Stretch Flow",
          description:
            "A gentle series of stretches to improve flexibility and reduce stiffness.",
        },
        {
          title: "Box Breathing",
          description:
            "Inhale, hold, exhale, pause — each for a count of four to ground your mind.",
        },
        {
          title: "Relaxation Pause",
          description:
            "A short guided mental reset to help you reconnect with your body and breathe deeply.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* All styles are from global.css */
</style>
