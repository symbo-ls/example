'use strict'

import './config'
import DOM from 'domql'
import 'domql/packages/emotion'

import * as smbls from 'smbls'

import { App } from './app'

export default DOM.create(App, undefined, 'app', {
  extend: smbls.Box // Every component is a Box
})
