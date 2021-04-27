import Vue from 'vue'
import BaseImage from '@/components/_baseui/BaseImage.vue'
import BaseContainer from '@/components/_baseui/BaseContainer.vue'

const components = {
  BaseImage,
  BaseContainer,
}

Object.entries(components).forEach(([
  name,
  component,
]) => {
  Vue.component(name, component)
})
