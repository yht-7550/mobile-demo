import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    ifTabbar?: boolean
    ifHideNav?: boolean
    icon?: string
    transition?: string
  }
}
