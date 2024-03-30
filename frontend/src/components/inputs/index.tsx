import styles from "./index.module.scss";

type InputProps = {
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const { icon, ...inputProps } = props;

  return (
    <div className={styles.Input}>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
