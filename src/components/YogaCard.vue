<template>
  <div class="yoga-card" :style="{ animationDelay: delay + 'ms' }">
    <div class="circle">{{ emoji }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "YogaCard",
  props: {
    title: String,
    description: String,
    emoji: String,
    delay: Number
  }
};
</script>

<style scoped>
.yoga-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
  opacity: 0;
  transform: translateY(18px);
  animation: fadeUp 0.6s ease forwards;
  text-align: left;
}

.yoga-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.16);
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  margin-bottom: 12px;
}

h3 {
  color: var(--primary);
  margin-bottom: 8px;
  font-size: 1.25rem;
}

p {
  color: #444;
  line-height: 1.6;
  opacity: 0.9;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
