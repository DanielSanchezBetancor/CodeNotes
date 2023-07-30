const ReactAriaSpanAsButtonInformation = `import React, { useRef } from "react";
import { useButton } from "react-aria";

interface ISpanAsButton {
  onPress: () => void;
}

const SpanAsButton = (props: ISpanAsButton) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    { ...props, elementType: "span" },
    buttonRef
  );
  return (
    <span
      {...buttonProps}
      style={{
        backgroundColor: "lightgray",
        padding: "0.5rem",
        border: "1px solid black",
        borderRadius: "0.5rem",
      }}
    >
      Soy un boton!
    </span>
  );
};

export default SpanAsButton;
`;

export default ReactAriaSpanAsButtonInformation;
