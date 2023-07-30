import type { PointerType, PressEvent } from "@react-types/shared";
import { useRef, useState } from "react";
import { useButton } from "react-aria";

const EventButton = () => {
  // Estados locales para el manejo de eventos
  const [isPressed, setIsPressed] = useState<PointerType | null>(null);
  const [isPressing, setIsPressing] = useState(false);
  const [hasFinishedPressing, setHasFinishedPressing] = useState(false);
  const [isPressedChange, setIsPressedChange] = useState(0);

  // Generación del botón y eventos relacionados.
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    {
      onPress: (e: PressEvent) => {
        setIsPressed(e.pointerType);
      },
      onPressStart: () => {
        setIsPressing(true);
        setHasFinishedPressing(false);
      },
      onPressEnd: () => {
        setIsPressing(false);
        setHasFinishedPressing(true);
      },
      onPressChange: () => setIsPressedChange((prev) => prev + 1),
    },
    buttonRef
  );

  return (
    <>
      <button {...buttonProps}>
        ¡Presiona de alguna manera! (Pero no con la cabeza)
      </button>
      <p>Pulsación del botón: Has presionado con un: {isPressed}</p>
      <p>
        Manteniendo pulsado el botón:
        {isPressing ? <span>Si</span> : <span>No</span>}
      </p>
      <p>
        Ha soltado el botón:
        {hasFinishedPressing ? <span>Si</span> : <span>No</span>}
      </p>
      <p>
        Cambios en la pulsación:
        {isPressedChange}
      </p>
    </>
  );
};

export default EventButton;
