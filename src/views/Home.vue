<template>
  <div class="container" :class="{ loaded }" :style="backgroundStyle">
    <clock />
  </div>
</template>

<script>
import Clock from "@/components/Clock";
export default {
  name: "home",
  components: { Clock },
  data: () => ({
    loaded: false,
    backgroundStyle: {}
  }),
  created() {
    let img, src;
    src = require("@/assets/54.jpg");
    img = new Image();
    img.addEventListener("load", () => {
      this.loaded = true;
      this.backgroundStyle = {
        "background-image": `url(${src})`
      };
    });
    img.src = src;
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  opacity: 0;
  transition: opacity 0.2s;
}

.loaded {
  opacity: 1;
}
</style>
