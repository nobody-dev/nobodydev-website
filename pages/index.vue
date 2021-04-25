<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ $t("hello") }}
      </h1>
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="$i18n.setLocale(locale.code)"
      >
        {{ locale.name }}
      </button>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: { Logo },

  data () {
    return {
      asd: [
        'first',
        'second',
        'third',
        'sdgsdgd',
      ],
    }
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--main-bg);
}
</style>
