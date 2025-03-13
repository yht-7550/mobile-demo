import type { RouteRecordRaw } from 'vue-router'

/**
 * 全局
 */
export interface GlobalState {
  /** 主题风格 */
  theme: 'light' | 'dark'
  /** 主题色/navBar背景颜色 */
  themeColor: string
  /** 导航栏文字 */
  navBarTitle: string
  /** 导航栏文字颜色 */
  navBarTitleColor: string
  /** 是否 tabbar 页面 */
  ifTabbar: boolean
  /** 当前 tabbar 下标 */
  activeTabbarIdx: number
  /** 设备类型 */
  devicePlatform: 'ios' | 'android' | 'web' | null
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
