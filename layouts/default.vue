<template>
  <div :class="$style.root">
    <TheHeader />
    <Nuxt :class="$style.page" />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: { TheHeader },
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>

<style lang="scss" module>
  .root {
    height: 100%;
  }

  .page {
    min-height: calc(100vh - 125px);
    margin-top: 100px;
    margin-bottom: 50px;

    @media (max-width: $breakpoint-to-tablet) {
      margin-top: 50px;
    }
  }
</style>
