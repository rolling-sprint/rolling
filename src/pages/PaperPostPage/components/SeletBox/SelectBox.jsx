import { useEffect, useState } from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import styles from "./SelectBox.module.scss";

const Select = [
  { label: "컬러", value: "color" },
  { label: "이미지", value: "image" },
];

function SelectBox({ onSelectTypeChange }) {
  const [type, setType] = useState("color");

  return (
    <>
      <div className={styles.toggleBox}>
        <ToggleButton
          items={Select}
          selected={type}
          onClickItem={(type) => {
            setType(type);
            onSelectTypeChange(type);
          }}
        />
      </div>
    </>
  );
}

export default SelectBox;
