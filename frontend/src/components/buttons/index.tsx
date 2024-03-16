import { FiLoader } from "react-icons/fi";
import styles from "./index.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = (props: ButtonProps) => {
  const { children, loading, icon, ...buttonProps } = props;

  return (
    <button className={styles.Primary} {...buttonProps}>
      {loading && <FiLoader />}
      {!loading && icon}
      {children}
    </button>
  );
};

export const SecondaryButton = (props: ButtonProps) => {
  const { children, loading, icon, ...buttonProps } = props;

  return (
    <button className={styles.Secondary}>
      {loading && <FiLoader />}
      {!loading && icon}
      {children}
    </button>
  );
};
