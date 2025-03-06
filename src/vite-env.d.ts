/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_ROUTER_MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
