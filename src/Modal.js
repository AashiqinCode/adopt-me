import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // Cleaning
    return () => modalRoot.removeChild(elRef.current);
  },
//   To make it once
  []);

  return createPortal(<div> {children} </div>, elRef.current);
};

export default Modal;
