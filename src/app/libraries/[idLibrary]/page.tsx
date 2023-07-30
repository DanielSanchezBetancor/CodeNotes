"use client";

import { useParams } from "next/navigation";
import ReactAria from "./libraries/ReactAria";

const LibraryInformation = () => {
  const params = useParams();

  switch (params.idLibrary) {
    case "ReactAria":
      return <ReactAria />;
  }
  return <>No existe</>;
};

export default LibraryInformation;
