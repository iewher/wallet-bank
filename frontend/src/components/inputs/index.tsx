import styles from "./index.module.scss";

type InputProps = {
  icon?: React.ReactNode;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  const { icon, name, ...inputProps } = props;

  return (
    <div className={styles.Input}>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...inputProps} name={props.name} />
    </div>
  );
};
