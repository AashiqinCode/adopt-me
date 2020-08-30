/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./color";

// const color = "pink";
const Navbar = () => {
  const spin = keyframes`
  to{
      transform: rotate(360deg);
  }`;
  const [pad, setPadding] = useState(15);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <header
      css={css`
        /* background-color: #333; */
        background-color: ${colors.primary};

        padding: ${pad}px;
        position: sticky;
        top: 0;
        z-index: 10;
      `}
      onClick={() => {
        setPadding(15 + pad);
      }}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        aria-label="logo"
        role="img"
        css={css`
          font-size: 30px;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite reverse;
          }
          display:inline-block;
          animation: .1s ${spin} linear infinite;
        `}
      >
        🐔
      </span>
    </header>
  );
};

export default Navbar;
