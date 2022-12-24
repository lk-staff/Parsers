export enum AppLayoutsEnum {
  default = 'default',
  login = 'login',
  error = 'error',
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'DefaultLayout.vue',
  login: 'AppLayoutLogin.vue',
  error: 'AppLayoutError.vue',
};
