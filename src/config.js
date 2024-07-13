'use strict'

const S3_BUCKET = 'https://symbols-fonts.s3.us-west-1.amazonaws.com'

const AvenirLight = '/avenir/49c5f3e1-5867-4b1d-a843-2d07fa60d85d.woff2'
const AvenirRegular = '/avenir/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2'
const AvenirMedium = '/avenir/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2'
const AvenirDemiBold = '/avenir/6afe4676-059a-4aa8-b891-29856bbcba22.woff2'
const AvenirBold = '/avenir/14c73713-e4df-4dba-933b-057feeac8dd1.woff2'
const AvenirHeavy = '/avenir/5c57b2e2-f641-421e-a95f-65fcb47e409a.woff2'

/**
 * Colors
 * @tutorial https://docs.symbols.app/color
 */
const COLOR = {
  transparent: 'transparent',
  black: 'black',
  white: 'white',

  blue: '#2485F0',
  indigo: '#50E1FF',
  green: '#59AC56',
  red: '#EB6650',
  yellow: '#E8CC56',
  orange: '#E98232',
  brown: '#7D6755',
  pink: '#EE90BD',
  purple: '#7345AF',
  phosphorus: '#BCD835',
  indigoblue: `#55B7D8`,
  milk: '#D8D8D8',
  grassgreen: '#6A9A55',

  gray: '#57575c',
  gray1: '#0C0C0D',
  gray2: '#141416',
  gray3: '#1C1C1F',
  gray4: '#252527',
  gray5: '#3E3E41',
  gray6: '#57575C',
  gray7: '#818186',
  gray8: '#A3A3A8',
  gray9: '#BDBDC1',
  gray10: '#cfcfd1',
  gray11: '#e0e0e2',
  gray12: '#e9e9ea'
}

/**
 * Gradients
 * @tutorial https://docs.symbols.app/color
 */
const GRADIENT = {
  dotsDark: `radial-gradient(#252527 6%, transparent 6%)`,
  dotsLight: `radial-gradient(#cfcfd1 6%, transparent 6%)`,

  'gradient-dark': `linear-gradient(0deg,
    rgba(0,0,0,0.06) 0%,
    rgba(0,0,0,0.07) 100%
  )`,
  'gradient-light': `linear-gradient(
    0deg,
    rgba(255,255,255,0.05) 0%,
    rgba(255,255,255,0.06) 100%
  )`,
  'gradient-light-active': `linear-gradient(
    0deg,
    rgba(255,255,255,0.09) 0%,
    rgba(255,255,255,0.10) 100%
  )`,
  'gradient-colorful': `linear-gradient(60deg,
    #00A2E7 0%,
    #185DF3 31%,
    #1E54F0 36%,
    #8B4CCA 69%,
    #C66894 100%
  )`,
  'gradient-colorful-active': `linear-gradient(60deg,
    #00A2E7 0%,
    #185DF3 25%,
    #1E54F0 32%,
    #8B4CCA 75%,
    #C66894 100%
  )`
}

/**
 * Themes
 * @tutorial https://docs.symbols.app/theme
 */
const THEME = {
  transparent: {
    variants: {
      dark: {
        background: 'transparent',
        color: 'white 0.65'
      },
      light: {
        background: 'transparent',
        color: 'black 0.65'
      }
    }
  },

  text: {
    background: 'transparent 0',
    variants: {
      dark: {
        color: 'gray9'
      },
      light: {
        color: 'gray3'
      }
    }
  },

  document: {
    variants: {
      dark: {
        color: 'gray9',
        background: 'black'
      },
      light: {
        background: 'gray12',
        color: 'gray1'
      }
    }
  },
  primary: {
    variants: {
      dark: {
        color: 'white',
        background: 'gradient-colorful'
      },
      light: {
        color: 'white',
        background: 'gradient-colorful'
      }
    }
  },

  secondary: {
    color: 'white',
    background: 'blue'
  },

  tertiary: {
    color: 'black',
    background: 'white'
  },

  quaternary: {
    state: {
      hover: {
        color: 'white',
        background: 'gradient-light-active'
      },
      active: {
        color: 'white',
        background: 'gradient-light-active'
      }
    },
    variants: {
      dark: {
        color: 'gray9',
        background: 'gradient-light'
      },
      light: {
        color: 'gray1',
        background: 'gradient-dark'
      },
      active: {
        color: 'white',
        background: 'gradient-light-active'
      }
    }
  },

  quinary: {
    background: 'white 0.05',
    color: 'white 0.35'
  }
}

/**
 * Fonts
 * @tutorial https://docs.symbols.app/font
 */
const FONT = {
  smbls: [{
    url: S3_BUCKET + AvenirLight,
    fontWeight: 300
  }, {
    url: S3_BUCKET + AvenirRegular,
    fontWeight: 400
  }, {
    url: S3_BUCKET + AvenirMedium,
    fontWeight: 500
  }, {
    url: S3_BUCKET + AvenirDemiBold,
    fontWeight: 600
  }, {
    url: S3_BUCKET + AvenirBold,
    fontWeight: 700
  }, {
    url: S3_BUCKET + AvenirHeavy,
    fontWeight: 900
  }]
}

/**
 * Font families
 * @tutorial https://docs.symbols.app/font
 */
const FONT_FAMILY = {
  smbls: {
    isDefault: true,
    value: ['"smbls"'],
    type: 'serif'
  },
  code: {
    value: ['"Droid Sans Mono for Powerline"'],
    type: 'monospace'
  }
}

/**
 * Typography
 * @tutorial https://docs.symbols.app/typography
 * @tutorial https://docs.symbols.app/sequence
 */
const TYPOGRAPHY = {
  base: 18,
  ratio: 1.2,

  '@screenM': {
    base: 16
  },

  '@tabletM': {
    base: 15,
    ratio: 1.125
  },

  '@mobileM': {
    base: 14,
    ratio: 1.125
  }
}

/**
 * Spacing
 * @tutorial https://docs.symbols.app/spacing
 * @tutorial https://docs.symbols.app/sequence
 */
const SPACING = {
  '@tabletM': {
    ratio: 1.5
  },
  '@mobileM': {
    ratio: 1.333
  }
}

export default {
  COLOR,
  GRADIENT,
  THEME,
  TYPOGRAPHY,
  SPACING,
  FONT,
  FONT_FAMILY
}
