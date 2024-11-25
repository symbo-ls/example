'use strict'

import { Flex } from 'smbls'

/**
 * Creating a component
 * @tutorial https://symbols.app/components
 * @tutorial https://symbols.app/atoms
 * @tutorial https://symbols.app/composition
 */

/**
 * Component composition
 * @tutorial https://symbols.app/composition
 */
export const Card = {
  extend: Flex,
  state: { active: 0 },

  /**
   * Properties
   * @tutorial https://symbols.app/props
   */
  props: {
    flow: 'column',
    align: 'flex-start space-between',
    padding: 'A2 B2 B2 B2',
    round: 'A2',
    boxSize: 'auto G2-default',

    '@dark': {
      background: 'gray3 .65',
      color: 'white',
      boxShadow: 'black .05, 0 A A'
    },
    '@light': {
      background: 'white .8',
      color: 'gray3',
      boxShadow: 'gray12 .35, 0 A A'
    }
  },

  /**
   * Atoms
   * @tutorial https://symbols.app/atoms
   */
  Caption: {
    color: 'gray 1 +85',
    text: 'Incremental Number'
  },

  H2: {
    margin: '0 0 B1',
    text: ({ state }) => state.active
  },

  Button: {
    fontSize: 'A',
    theme: 'primary',
    padding: 'Z2 B2',
    round: 'B2',
    margin: '-X2',
    text: 'Increment',
    onClick: (event, element, state) => {
      state.update({ active: state.active + 1 })
    }
  }
}
