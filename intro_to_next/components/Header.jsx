import headerStyles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>My </span>Profile
        <p className={headerStyles.description}>
          Keep up to date with what i am doing
        </p>
      </h1>
    </div>
  );
};
