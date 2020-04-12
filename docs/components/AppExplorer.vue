<template functional>
  <nav class="app-explorer">
    <ul class="app-explorer__list">
      <li
        v-for="(item, index) in $options.NAV_ITEMS"
        :key="item.slug"
        class="app-explorer__list-item"
      >
        <router-link
          :to="{
            name: 'docs-slug',
            params: {
              slug: item.slug
            }
          }"
          class="app-explorer__list-link"
          active-class="app-explorer__list-link--active"
        >
          {{ item.title }}
        </router-link>

        <ul
          v-if="parent.$route.params.slug === item.slug"
          class="app-explorer__sub-list"
        >
          <li v-for="(subItem, index) in item.children" :key="subItem.hash">
            <a class="app-explorer__sub-list-item" :href="'#' + subItem.hash">
              {{ subItem.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import NAV_ITEMS from '@/utils/nav.json'

export default {
  NAV_ITEMS,
}
</script>

<style lang="scss">
.app-explorer {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__list-item {
    display: block;
  }

  &__list-link {
    display: block;
    color: #000;
    padding: 2px 0;
    line-height: 1.5;
    opacity: 0.5;
    transition: opacity 0.2s;

    &:hover,
    &:focus,
    &--active {
      opacity: 1;
    }

    &--active {
      font-weight: 600;
    }
  }

  &__sub-list {
    margin: 0 0 6px;
    padding: 0;
    list-style: none;
  }

  &__sub-list-item {
    display: block;
    padding: 2px 0 2px 6px;
    color: #777;
    font-size: 14px;
    transition: 0.15s;

    &:hover {
      color: #333;
    }
  }
}
</style>
