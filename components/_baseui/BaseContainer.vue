<template>
  <component
    :is="tag"
    :class="$style.container"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss" module>
 .container {
    margin: auto;
    width: 80%;

   @media (max-width: $breakpoint-to-tablet) {
     width: 90%;
   }
 }
</style>
