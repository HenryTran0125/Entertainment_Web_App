import styles from "./page.module.css";
import SideNav from "./ui/sideNav/sidenav";

export default function Home() {
  return (
    <main className={styles.main}>
      <SideNav />
    </main>
  );
}
