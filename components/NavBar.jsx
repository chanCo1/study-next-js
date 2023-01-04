import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link
        href="/"
        className={`${router.pathname === "/" ? styles.active : ""} ${styles.link}`}
      >
        HOME
      </Link>
      <Link
        href="/about"
        className={`${router.pathname === "/about" ? styles.active : ""} ${styles.link}`}
      >
        ABOUT
      </Link>
    </nav>
  );
}
