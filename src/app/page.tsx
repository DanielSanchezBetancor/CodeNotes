import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href={"/programming-languages"}>Lenguajes de programación</Link>
        </li>
        <li>
          <Link href={"/snippets"}>Snippets</Link>
        </li>
        <li>
          <Link href={"/libraries"}>Liberias y herramientas</Link>
        </li>
        <li>
          <Link href={"/projects"}>Proyectos</Link>
        </li>
      </ul>
    </main>
  );
}
