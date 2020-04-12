<template functional>
  <header class="app-header">
    <div class="container">
      <router-link to="/" class="app-header__logo">
        <span>As</span>Components
      </router-link>
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  background: #1d1d1d;
  padding: 12px 0;

  &__logo {
    color: darken(#fff, 20);
    font-size: 22px;

    span {
      position: relative;
      color: #fff;
      font-weight: normal;
      font-weight: 800;

      &::after {
        content: ".";
        color: #ff6d5c;
        font-size: 28px;
        line-height: 1;
      }
    }
  }
}
</style>
