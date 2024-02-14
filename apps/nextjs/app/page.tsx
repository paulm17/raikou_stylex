/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import React from "react";
import { Button } from "@acme/button";
import stylex from "@stylexjs/stylex";

const styles1 = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: "green",
  },
  highlighted: {
    color: "rebeccapurple",
  },
});

export default function Home() {
  return (
    <>
      <Button>MK</Button>
      <div {...stylex.props(styles1.base)}>hello</div>
    </>
  );
}
