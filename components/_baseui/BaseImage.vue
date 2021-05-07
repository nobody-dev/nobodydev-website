<template>
  <picture>
    <template v-if="!svg">
      <source
        :srcset="require(`@/assets/images/${name}.webp`)"
        :type="`image/webp`"
      >
      <source
        :srcset="require(`@/assets/images/${name}.${transparent ? 'png' : 'jpg'}`)"
        :type="`image/${transparent ? 'png' : 'jpg'}`"
      >
    </template>
    <template v-else>
      <source
        :srcset="require(`@/assets/images/${name}.svg`)"
        :type="'image/svg+xml'"
      >
    </template>
    <img
      :class="$style.image"
      :height="height"
      :width="width"
      :alt="alt"
      loading="lazy"
      decoding="async"
    >
  </picture>
</template>

<script>
export default {
  name: 'UiImage',
  props: {
    name: {
      required: true,
      type: String,
    },
    alt: {
      default: 'Image',
      type: String,
    },
    height: {
      default: 100,
      type: String || Number,
    },
    width: {
      default: 100,
      type: String || Number,
    },
    transparent: {
      default: false,
      type: Boolean,
    },
    svg: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style module>
  .image {
    max-width: 100%;
    height: auto;
    content-visibility: auto;
  }
</style>
