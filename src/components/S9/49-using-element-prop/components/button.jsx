import styles from "./button.module.css";

// As allows to customize the element returned in the DOM when the component in mounted
// props are the same
const Button = ({
  As = "button",
  size = "m",
  className = "",
  ...otherProps
}) => {
  return (
    <As
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
