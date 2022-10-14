"use strict";

import SYSTEM from "./config";

import DOM from "domql";
import "domql/packages/emotion";

import * as smbls from "smbls";
import { App } from "./app";

export default DOM.create(App, undefined, "app", {
  extend: smbls.Box, // Make component a Box
  context: { SYSTEM, COMPONENTS: smbls },
});
