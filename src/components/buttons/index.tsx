import { FiLoader } from "react-icons/fi";
import styles from "./index.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export const PrimaryButton = (props: ButtonProps) => {
  const { children, loading, icon } = props;

  return (
    <button className={styles.Button}>
      {loading && <FiLoader />}
      {!loading && icon}
      {children}
    </button>
  );
};
