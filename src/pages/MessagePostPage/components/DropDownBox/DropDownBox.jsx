import { useState } from "react";
import styles from "./DropDownBox.module.scss";
import arrowIconUrl from "../../../../assets/icons/icon-arrow-bottom.svg";

function DropDownBox({ name, onChange, options }) {
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => {
    setIsDrop(!isDrop);
  };

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelected(selectedValue);
    setIsDrop(false);
    onChange(e);
  };

  return (
    <div className={styles.container}>
      <button className={styles.dropDownButton} onClick={toggleDropdown}>
        <div>{selected}</div>
        <img alt="옵션 선택" src={arrowIconUrl} className={styles.arrowIcon} />
      </button>

      {isDrop && (
        <div className={styles.options}>
          {options.map((option) => (
            <label className={styles.option}>
              <input
                name={name}
                type="radio"
                value={option}
                checked={selected === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownBox;
