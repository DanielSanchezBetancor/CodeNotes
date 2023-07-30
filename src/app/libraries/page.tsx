import Link from "next/link";
import React from "react";

const Libraries = () => {
  return (
    <ul>
      <li>
        <Link href="/libraries/ReactAria">React Aria</Link>
      </li>
      <li>
        <Link href="/libraries/NextJS">NextJS</Link>
      </li>
    </ul>
  );
};

export default Libraries;
