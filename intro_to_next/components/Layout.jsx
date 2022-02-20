import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* <h1>NAV BAR WILL GO HERE</h1> */}
      <main className={styles.main}> {children}</main>
    </div>
  );
};

export default Layout;
