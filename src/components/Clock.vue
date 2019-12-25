<template>
  <div class="time" :class="{ loaded }">
    <div class="inner">
      <span class="hours">{{ hours }}</span>
      <span class="seperator" :class="{ hidden }">:</span>
      <span class="minutes">{{ minutes }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "clock",
  data: () => ({
    loaded: false,
    hours: "00",
    minutes: "00",
    hidden: true
  }),
  created() {
    this.tick();
    setInterval(this.tick, 1000);
  },
  methods: {
    tick() {
      let now, hours, minutes;
      now = new Date();
      hours = now.getHours();
      minutes = now.getMinutes();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      this.hours = hours;
      this.minutes = minutes;
      this.hidden = !this.hidden;
      this.loaded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.time {
  display: inline-block;
  color: #fff;
  border: 1vw solid #fff;
  font-family: "Lato";
  height: 13.8vw;
  padding: 0 2vw;
  user-select: none;
  cursor: default;
  font-weight: 700;
  font-size: 0;
  opacity: 0;
  transition: opacity 0.2s;
  // white-space-collapse: discard; // not yet support

  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .hours {
      font-family: "Lato";
      font-size: 9vw;
    }

    .seperator {
      font-family: "Lato";
      font-size: 9vw;
      transform: translateY(-0.9vw);
      opacity: 0.99999;
      transition: opacity 0.2s;
    }

    .minutes {
      font-family: "Lato";
      font-size: 9vw;
    }
  }
}

.hidden {
  opacity: 0.01 !important;
}

.loaded {
  opacity: 1;
}
</style>
