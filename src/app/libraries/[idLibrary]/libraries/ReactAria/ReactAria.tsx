"use client";

import ReactAriaInformation from "./components/ReactAriaInformation";
import ReactAriaLanguages from "./components/ReactAriaLanguages";
import ReactAriaLegend from "./components/ReactAriaLegend";
import ReactAriaInstalation from "./components/ReactAriaInstalation";
import ReactAriaComponents from "./components/ReactAriaComponents";

const ReactAria = () => {
  return (
    <div>
      <ReactAriaInformation />
      <ReactAriaLegend />
      <ReactAriaLanguages />
      <ReactAriaInstalation />
      <ReactAriaComponents />
    </div>
  );
};

export default ReactAria;
