<template>
  <div>
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
</template>

<script>

export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
}
</script>
