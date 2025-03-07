import type { RouteRecordRaw } from 'vue-router'

/**
 * 全局
 */
export interface GlobalState {
  theme: 'light' | 'dark'
  themeColor: string
  navBarTitle: string
  navBarTitleColor: string
  ifTabbar: boolean
  activeTabbarIdx: number
}

/**
 * 路由
 */
interface TabBarMenuOpt {
  path: string
  name: string | symbol | undefined
  title: string
  icon: string
}
export namespace AuthState {
  export type MenuItem = RouteRecordRaw
  export type TabBarMenu = TabBarMenuOpt[]
  export type FlatMenu = Omit<RouteRecordRaw, 'children'>
}
