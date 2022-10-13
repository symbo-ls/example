'use strict'

import { Flex, DatePicker } from 'smbls'
import { Card } from './Card'

export const App = {
  extend: Flex,

  props: {
    width: '100%',
    height: '100%',
    padding: 'B',
    flexAlign: 'center center'
  },

  card: { extend: Card }
}
