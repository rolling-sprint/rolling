import styles from "../SeletBox/SelectBox.module.scss";
import checkImage from "../../../../assets/images/Enabled.svg";

const Checkbox = ({ id, type, color, image, isChecked, onCheckboxChange }) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`${styles.selectLabel} ${
          type === "color" ? styles[color] : styles[image]
        } ${isChecked ? "checked" : ""}`}
      >
        {isChecked && (
          <img className={styles.check} src={checkImage} alt="checked" />
        )}
      </label>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => onCheckboxChange(id)}
      />
    </>
  );
};

export default Checkbox;
