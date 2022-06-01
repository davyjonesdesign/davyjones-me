<template>
  <div class="card-stats">
    <div v-for="(item, index) in info" :key="index" class="one-third">
      <div class="stat-value">{{ item.value }}</div>
      <div class="stat">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.card-stats {
  display: flex;
  color: var(--soft);
  background-color: var(--blue);
  font-weight: 700;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
}
.card-stats .one-third {
  width: 33%;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 15px;
}
.card-stats .one-third:last-child {
  border-right: none;
}
.card-stats .stat-value {
  position: relative;
  font-size: 24px;
  margin-bottom: 5px;
}
.card-stats .stat {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
}
.card-stats .no-border {
  border-right: none;
}
</style>
