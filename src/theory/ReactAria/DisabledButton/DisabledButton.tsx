"use client";

import React, { useRef } from "react";
import { useButton } from "react-aria";

const DisabledButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    {
      isDisabled: true,
    },
    buttonRef
  );

  return (
    <button {...buttonProps} ref={buttonRef}>
      Boton de Aria
    </button>
  );
};

export default DisabledButton;
