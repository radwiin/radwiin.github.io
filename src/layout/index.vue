<template>
  <div class="layout">
    <vs-navbar v-model="activeItem" class="navbar">
      <div slot="title">
        <vs-navbar-title>
          radwiin.github.io
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <vs-dropdown>
          <a href="#">HoverHover</a>
          <vs-dropdown-menu>
            <vs-dropdown-item>
              Option
            </vs-dropdown-item>
            <vs-dropdown-item>
              Option2
            </vs-dropdown-item>
            <vs-dropdown-item divider>
              Option3ddd
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </vs-navbar-item>

      <vs-spacer></vs-spacer>
    </vs-navbar>
    <div class="container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  data: () => ({
    activeItem: 0
  })
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;

  .navbar {
    flex-shrink: 0;

    ::v-deep .vs-navbar-after {
      background-color: #2c3e50;
    }
  }

  .container {
    flex-grow: 1;
    min-height: 0px;
  }
}
</style>
