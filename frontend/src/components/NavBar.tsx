import styles from "@/styles/components/NavBar.module.scss";

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className={styles.NavBar}>
      <ul>{children}</ul>
    </nav>
  );
}

NavBar.style = styles.NavBar;

function NavBarItem({ children }: { children: React.ReactNode }) {
  return <li className={styles.NavBarItem}>{children}</li>;
}

NavBar.Item = NavBarItem;
NavBarItem.style = styles.NavBarItem;

export default NavBar;
