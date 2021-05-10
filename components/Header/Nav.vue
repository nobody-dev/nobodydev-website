<template>
  <nav
    :class="$style.nav"
    data-test-id="nav"
  >
    <ul>
      <li>
        <NuxtLink
          v-for="item in navList"
          :key="item.name"
          :to="item.link"
          :class="$style.item"
        >
          {{ $t("nav")[item.name] }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    navList: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="scss" module>
 .nav {
   display: block;
 }

 .item {
   margin-left: 30px;
   color: var(--links-color);
   &:hover {
     color: var(--links-hover-color);
   }
 }
</style>
