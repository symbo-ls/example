'use strict'

import { Flex, Button } from 'smbls'

const Card = {
  extend: Flex,
  state: { active: 0 },

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
    },

    caption: {
      color: 'gray 1 +85'
    },

    title: {
      margin: '0 0 B1'
    },

    button: {
      fontSize: 'A',
      theme: 'primary',
      padding: 'Z2 B2',
      round: 'B2',
      margin: '-X2'
    }
  },

  caption: {
    text: 'Incremental Number'
  },

  title: {
    tag: 'h2',
    text: ({ state }) => state.active
  },

  button: {
    extend: Button,
    text: 'Increment',
    on: {
      click: (ev, element, state) => {
        state.update({ active: state.active + 1 })
      }
    }
  }
}

export const App = {
  extend: Flex,
  props: {
    width: '100%',
    height: '100%',
    padding: 'B',
    flexAlign: 'center center'
  },

  Card
}
