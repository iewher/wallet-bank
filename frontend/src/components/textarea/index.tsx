import styles from "./styles.module.scss";

type TextareaProps = {
  label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = (props: TextareaProps) => {
  const { label, ...textareaProps } = props;
  return (
    <div className={styles.Textarea}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea {...textareaProps} name={props.name} />;
    </div>
  );
};
