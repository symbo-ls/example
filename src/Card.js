"use strict";

import { Flex, Button } from "smbls";

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

  props: {
    flexDirection: "row",

    width: "100%",
    padding: "B 0 B Z1",
    height: "100px",
    // minHeight: 'calc(10px + 10px)',

    border: "lightBlack 1, solid",
    borderWidth: "0 0 V 0",

    willChange: "border-bottom-color",
    transitionProperty: "all",
    transition: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease",
    transitionDelay: "0s",

    "@mobile": {
      padding: "0 0 0 0",
      backgroundColor: "red",
      height: "150px",
    },

    "@tablet": {
      padding: "0 0 0 0",
    },

    "@dark": {
      borderColor: "lightBlack",
    },

    "@light": {
      borderColor: "#CFCFD1",
    },

    ":hover": {
      borderColor: "#CFCFD1 0.35",
    },
  },
  vote: (props) => {
    // if (props.data && props.passedFromComments) console.warn('Data is missing', props.data)
    return {
      extend: Vote,
      props: {},
      passed: props.passedFromComments,
      data: props.data,
    };
  },
  content: (props) => {
    return {
      extend: Content,
      props: {},
      data: props.data,
    };
  },
};
