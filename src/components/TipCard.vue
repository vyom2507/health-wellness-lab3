<template>
  <div class="tip-card" :style="{ animationDelay: delay + 'ms' }">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "TipCard",
  props: {
    title: String,
    description: String,
    delay: Number
  }
};
</script>

<style scoped>
.tip-card {
  background: white;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  border-left: 5px solid var(--primary);
  transition: 0.25s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.7s ease forwards;
}

.tip-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.14);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 8px;
}

p {
  color: #444;
  opacity: 0.9;
  line-height: 1.5;
}
</style>
