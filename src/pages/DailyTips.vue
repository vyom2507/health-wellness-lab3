<template>
  <div>

    <!-- ===============================
         HERO SECTION WITH IMAGE
    ================================ -->
    <div
      class="hero-container"
      :style="{ backgroundImage: 'url(/src/assets/tips-hero.jpg)' }"
    >
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">Daily Wellness Tips</h1>
        <p class="hero-subtitle">
          Simple habits that support your mind & body every single day.
        </p>
      </div>
    </div>

    <!-- ===============================
         PAGE CONTENT SECTION
    ================================ -->
    <section class="page-section">

      <!-- section heading -->
      <div class="section-title-line"></div>
      <h2 class="section-title">Healthy Routines You Can Start Today</h2>
      <p class="section-subtitle">
        These small steps can make a powerful long-term difference.
      </p>

      <!-- Grid of cards -->
      <div class="grid-3">
        <TipCard
          v-for="(tip, index) in tips"
          :key="index"
          :title="tip.title"
          :description="tip.description"
        />
      </div>
    </section>

  </div>
</template>

<script>
import TipCard from "../components/TipCard.vue";

export default {
  name: "DailyTips",
  components: {
    TipCard,
  },
  data() {
    return {
      tips: [
        {
          title: "Hydrate Early",
          description:
            "Begin your morning with a glass of water to activate metabolism and rehydrate your body.",
        },
        {
          title: "10-Minute Stretch",
          description:
            "Loosen stiff muscles and improve circulation with a short daily stretch routine.",
        },
        {
          title: "Mindful Breathing",
          description:
            "Take slow, deep breaths to calm your nervous system and reduce stress instantly.",
        },
        {
          title: "Eat Colorfully",
          description:
            "Add colorful fruits and vegetables to your meals for natural vitamins and antioxidants.",
        },
        {
          title: "Short Walks",
          description:
            "A 20-minute walk improves mood, digestion, posture, and mental clarity.",
        },
        {
          title: "Digital Detox",
          description:
            "Step away from screens regularly to rest your eyes and boost mental focus.",
        },
        {
          title: "Consistent Sleep",
          description:
            "Maintain a regular sleep schedule to improve energy and overall well-being.",
        },
        {
          title: "Practice Gratitude",
          description:
            "Write down three things you're grateful for. It boosts positivity and mindfulness.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* no scope-level styling needed; everything is controlled by global.css */
</style>
