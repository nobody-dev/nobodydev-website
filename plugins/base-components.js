import Vue from 'vue'
import BaseImage from '@/components/_baseui/BaseImage.vue'

const components = { BaseImage }

Object.entries(components).forEach(([
  name,
  component,
]) => {
  Vue.component(name, component)
})
