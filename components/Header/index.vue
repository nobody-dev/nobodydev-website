<template>
  <header
    :class="$style.header"
    data-test-id="header"
  >
    <BaseContainer :class="$style.headerContainer">
      <NuxtLink :to="homeLink">
        <BaseImage
          name="logo"
          alt="Nobodydev"
          height="35"
          width="35"
          transparent
        />
      </NuxtLink>

      <Nav :nav-list="navList" />
    </BaseContainer>
  </header>
</template>

<script>
import constants from '~/dictionary'
import Nav from '~/components/Header/Nav'

export default {
  name: 'Header',
  components: { Nav },
  computed: {
    navList () {
      return constants.NAV_LIST
    },
    homeLink () {
      return this.navList.find(el => el.name === 'home')?.link
    },
  },
}
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
    background-color: var(--main-bg-items);
  }

  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
