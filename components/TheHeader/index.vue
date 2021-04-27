<template>
  <header
    :class="$style.header"
    data-test-id="the-header"
  >
    <BaseContainer>
      <BaseImage
        name="logo"
        alt="Nobodydev logo"
        height="35"
        width="35"
        transparent
      />
    </BaseContainer>
  </header>
</template>

<script>
export default { name: 'TheHeader' }
</script>

<style lang="scss" module>
  .header {
    @include main-shadow;

    position: fixed;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 60px;
    background-color: var(--main-bg-items)
  }
</style>
