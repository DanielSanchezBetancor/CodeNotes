import { Button, ReactAriaButtonInformation } from "@/theory/ReactAria/Button";
import {
  DisabledButton,
  ReactAriaDisabledButtonInformation,
} from "@/theory/ReactAria/DisabledButton";
import {
  EventButton,
  ReactAriaEventButtonInformation,
} from "@/theory/ReactAria/EventButton";
import {
  ReactAriaSpanAsButtonInformation,
  SpanAsButton,
} from "@/theory/ReactAria/SpanAsButton";

const ReactAriaComponents = () => {
  return (
    <section>
      <h2 id="componentes">Componentes y su uso</h2>
      <h3 id="boton">Boton</h3>
      <h4 id="funcionalidad">Funcionalidad y código base</h4>
      <p>
        El hook useButton ofrece varias funcionalidades, entre las que se
        incluyen:
      </p>
      <ul>
        <li>Soporte nativo para el elemento HTML button.</li>
        <li>
          Soporte para el elemento a (enlaces) y otros tipos de elementos
          personalizados mediante el uso de atributos ARIA (Accessible Rich
          Internet Applications).
        </li>
        <li>
          Manejo de eventos de ratón y táctiles, incluyendo el control del
          estado de presión del botón.
        </li>
        <li>
          Gestión del enfoque del teclado y normalización entre diferentes
          navegadores.
        </li>
        <li>
          Soporte para eventos de teclado, especialmente para las teclas Espacio
          y Enter.
        </li>
      </ul>
      <h5>Código</h5>
      <pre id="code">{ReactAriaButtonInformation}</pre>
      <h5>Ejemplo</h5>
      <Button onPress={() => alert("Hola mundo")} />
      <h4 id="tipo-personalizado">Elemento de tipo personalizado</h4>
      <p>
        Este botón puede utilizar un elemento diferente al botón nativo de HTML,
        como un span, y aún así proporciona soporte de accesibilidad al aplicar
        automáticamente los roles y atributos ARIA necesarios.
      </p>
      <h5>Código</h5>
      <pre id="code">{ReactAriaSpanAsButtonInformation}</pre>
      <h5>Ejemplo</h5>
      <SpanAsButton onPress={() => alert("Hola mundo")} />
      <h4 id="propiedades">Propiedades</h4>
      <h5 id="eventos">Eventos</h5>
      <p>Todos los eventos ejecutados devuelven un PressEvent</p>
      <ul>
        <li>
          onPress: Este evento soporta todas las interacciones posibles, como
          eventos de teclado, de mouse, pantalla táctil...
        </li>
        <li>
          onPressStart: Evento accionado al clickar / mantener el tipo de
          puntero en el botón.
        </li>
        <li>
          onPressEnd: Evento accionado al soltar el tipo de puntero en el botón.
        </li>
        <li>
          onPressChange : Evento accionado al clickar / soltar el tipo de
          puntero en el botón.
        </li>
      </ul>
      <h6>Código</h6>
      <pre id="code">{ReactAriaEventButtonInformation}</pre>
      <h6>Ejemplo</h6>
      <EventButton />
      <h5 id="deshabilitar">Deshabilitar</h5>
      <p>Un botón puede ser deshabilitado con isDisabled</p>
      <h6>Código</h6>
      <pre id="code">{ReactAriaDisabledButtonInformation}</pre>
      <h6>Ejemplo</h6>
      <DisabledButton />
    </section>
  );
};

export default ReactAriaComponents;
