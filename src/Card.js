'use strict'

import { Flex, Button } from 'smbls'

/**
 * Creating a component
 * @tutorial https://docs.symbols.app/components
 * @tutorial https://docs.symbols.app/atoms
 * @tutorial https://docs.symbols.app/composition
 */

/**
 * Component composition
 * @tutorial https://docs.symbols.app/composition
 */
export const Card = {
  extend: Flex,
  state: { active: 0 },

  /**
   * Properties
   * @tutorial https://docs.symbols.app/props
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
   * @tutorial https://docs.symbols.app/atoms
   */
  caption: {
    props: { color: 'gray 1 +85' },
    text: 'Incremental Number'
  },

  title: {
    tag: 'h2',
    props: { margin: '0 0 B1' },
    text: ({ state }) => state.active
  },

  button: {
    extend: Button,
    props: {
      fontSize: 'A',
      theme: 'primary',
      padding: 'Z2 B2',
      round: 'B2',
      margin: '-X2'
    },
    text: 'Increment',
    on: {
      click: (ev, element, state) => {
        state.update({ active: state.active + 1 })
      }
    }
  }
}
