import { Nav } from "./Nav";
import { Header } from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        {/* <h1>NAV BAR WILL GO HERE</h1> */}
        <Header />
        <main className={styles.main}> {children}</main>
      </div>
    </>
  );
};

export default Layout;
