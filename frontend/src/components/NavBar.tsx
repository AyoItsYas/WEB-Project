import Link from "next/link";
import Image from "next/image";
import styles from "@/components/NavBar.module.scss";

function NavBar({
  children,
  logoSrc = "/logo.png",
  logoProps = { fill: true },
}: {
  children: React.ReactNode;
  logoSrc?: string;
  logoProps?: {
    fill?: boolean;
    width?: number;
    height?: number;
  };
}) {
  return (
    <nav className={styles.NavBar}>
      <Link href="/">
        <h1>Kpop Fiesta</h1>
      </Link>

      <div className={styles.NavBarItems}>{children}</div>
    </nav>
  );
}

NavBar.style = styles.NavBar;

function NavBarItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.NavBarItem}>{children}</div>;
}

NavBar.Item = NavBarItem;
NavBarItem.style = styles.NavBarItem;

export default NavBar;
export { NavBar, NavBarItem };
