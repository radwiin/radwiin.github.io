<template>
  <div class="app-container">
    <div class="left">
      <vs-list>
        <vs-list-header
          icon="supervisor_account"
          title="Group 1"
        ></vs-list-header>
        <vs-list-item
          icon="check"
          title="Snickerdoodle"
          subtitle="An excellent companion"
        ></vs-list-item>
        <vs-list-item
          icon="check"
          title="Sapporo Haru"
          subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"
        ></vs-list-item>
        <vs-list-header
          icon="how_to_reg"
          title="Group 2"
          color="success"
        ></vs-list-header>
        <vs-list-item
          icon="verified_user"
          title="Enid's"
          subtitle="At night a bar, during the day a delicious brunch spot."
        ></vs-list-item>
        <vs-list-item
          icon="verified_user"
          title="Veronika Ossi"
          subtitle="Has not watched anything recently"
        ></vs-list-item>
        <vs-list-header
          icon="how_to_reg"
          title="Group 2"
          color="success"
        ></vs-list-header>
        <vs-list-item
          icon="verified_user"
          title="Enid's"
          subtitle="At night a bar, during the day a delicious brunch spot."
        ></vs-list-item>
        <vs-list-item
          icon="verified_user"
          title="Veronika Ossi"
          subtitle="Has not watched anything recently"
        ></vs-list-item>
        <vs-list-header
          icon="how_to_reg"
          title="Group 2"
          color="success"
        ></vs-list-header>
        <vs-list-item
          icon="verified_user"
          title="Enid's"
          subtitle="At night a bar, during the day a delicious brunch spot."
        ></vs-list-item>
        <vs-list-item
          icon="verified_user"
          title="Veronika Ossi"
          subtitle="Has not watched anything recently"
        ></vs-list-item>
      </vs-list>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;

  .left {
    flex-shrink: 0;
    width: 300px;
    overflow-y: auto;
  }

  .right {
    flex-grow: 1;
  }
}
</style>
