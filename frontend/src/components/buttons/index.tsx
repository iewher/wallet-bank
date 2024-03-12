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
    <button className={styles.Button} {...buttonProps}>
      {loading && <FiLoader />}
      {!loading && icon}
      {children}
    </button>
  );
};
