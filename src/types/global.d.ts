import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    ifTabbar?: boolean
    icon?: string
    transition?: string
  }
}
