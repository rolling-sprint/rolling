import { useEffect, useState } from "react";
import { getImages } from "../../../../services/api";
import ToggleButton from "../ToggleButton/ToggleButton";
import Checkbox from "../CheckBox/CheckBox";
import checkImage from "../../../../assets/images/Enabled.svg";
import styles from "./SelectBox.module.scss";

const Select = [
  { label: "컬러", value: "color" },
  { label: "이미지", value: "image" },
];

const SelectColorDefault = {
  ckb1: true,
  ckb2: false,
  ckb3: false,
  ckb4: false,
};

function SelectBox({ onSelectionChange, onSelectTypeChange }) {
  const [type, setType] = useState("color");
  const [isChecked, setIsChecked] = useState(SelectColorDefault);
  const [imageUrls, setImageUrls] = useState([]);

  const handleCheckboxChange = (checkboxId) => {
    const newIsChecked = {
      ckb1: false,
      ckb2: false,
      ckb3: false,
      ckb4: false,
    };

    newIsChecked[checkboxId] = true;

    setIsChecked(newIsChecked);

    const index = parseInt(checkboxId.slice(3)) - 1;

    const newBackgroundColor = getColorFromCheckbox(checkboxId) || "";
    const newImageURL = imageUrls[index] || "";

    onSelectionChange({
      backgroundColor: newBackgroundColor,
      imageURL: newImageURL,
    });
  };

  const getColorFromCheckbox = (checkboxId) => {
    switch (checkboxId) {
      case "ckb1":
        return "beige";
      case "ckb2":
        return "purple";
      case "ckb3":
        return "blue";
      case "ckb4":
        return "green";
      default:
        return "beige";
    }
  };

  useEffect(() => {
    // const fetchImageUrls = getImages("background-images");
    // if (fetchImageUrls && fetchImageUrls.length > 0) {
    //   setImageUrls(fetchImageUrls);
    // }
    const fetchImageUrls = async () => {
      try {
        const backgroundImageUrl =
          "https://rolling-api.vercel.app/background-images/";
        const response = await fetch(backgroundImageUrl);
        const data = await response.json();

        if (data && data.imageUrls && data.imageUrls.length > 0) {
          setImageUrls(data.imageUrls);
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls();
  }, []);

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

      <div className={styles.selectorBox}>
        {imageUrls.map((imageUrl, index) => (
          <Checkbox
            key={`ckb${index + 1}`}
            id={`ckb${index + 1}`}
            type={type}
            color={getColorFromCheckbox(`ckb${index + 1}`)}
            image={`image${index + 1}`}
            isChecked={isChecked[`ckb${index + 1}`]}
            onCheckboxChange={() => handleCheckboxChange(`ckb${index + 1}`)}
            checkIcon={<image src={checkImage} className={styles.check} />}
          />
        ))}
      </div>
    </>
  );
}

export default SelectBox;
