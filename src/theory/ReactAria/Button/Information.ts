const ReactAriaButtonInformation = `"use client";

import React, { useRef } from "react";
import { useButton } from "react-aria";

interface IButton {
  onPress: () => void;
}

const Button = (props: IButton) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton({ ...props }, buttonRef);
  
  return (
    <button {...buttonProps} ref={buttonRef}>
      Boton de Aria
    </button>
  );
};

export default Button;`;

export default ReactAriaButtonInformation;
