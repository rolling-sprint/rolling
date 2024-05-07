import styles from "../SeletctBox/SelectBox.module.scss";
import checkImage from "../../../../assets/images/Enabled.svg";

const Checkbox = ({ id, type, color, image, isChecked, onCheckboxChange }) => {
  const ColorStyle = {
    background: `${color}`,
  };

  const imageStyle = {
    backgroundImage: image ? `url(${image})` : "none",
  };

  return (
    <>
      <label
        htmlFor={id}
        className={`${styles.selectLabel} ${isChecked ? "checked" : ""}`}
        style={type === "color" ? ColorStyle : imageStyle}
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
