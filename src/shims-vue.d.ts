/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent , computed, PropType, ref  } from 'vue'
  const component: DefineComponent<{}, {}, any>
  const component: computed<{}, {}, any>
  const component: PropType<{}, {}, any>
  const component: ref<{}, {}, any>
  export default component
}
