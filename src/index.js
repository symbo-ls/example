'use strict'

import { create } from 'smbls'
import designSystem from './config'
import { App } from './app'

export default create(App, {
  designSystem
})
