import { NativeScriptConfig } from '@nativescript/core'
export default {
  id: 'org.nativescript.testApp',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  profiling: 'timeline',
} as NativeScriptConfig
