import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPaper } from "../../../services/api";
//import styles from "@/pages/post/PostPage.module.scss";
import SelectBox from "./SeletBox/SelectBox";
import PrimaryButton from "../../../components/UI/PrimaryButton";

function PaperPostForm() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [backgroundSelection, setBackgroundSelection] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setError("");
    setIsDisabled(value.trim() === "");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      name: inputValue,
      backgroundColor: backgroundSelection.backgroundColor,
      backgroundImageURL:
        type === "image" ? backgroundSelection.imageURL : null,
    };

    postPaper(requestBody);
  };

  const [type, setType] = useState("color");

  const handleSelectionChange = (selection) => {
    setBackgroundSelection(selection);
  };

  const handleSelectTypeChange = (newType) => {
    setType(newType);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>To.</label>
          <input
            type="text"
            id="sendingInput"
            placeholder="받는 사람 이름을 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
            errorMessage={error}
          />
        </div>
        <div>
          <h2>배경화면을 선택해 주세요.</h2>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <SelectBox
          type={type}
          onSelectionChange={handleSelectionChange}
          onSelectTypeChange={handleSelectTypeChange}
        />
        <PrimaryButton disable={isDisabled}>생성하기</PrimaryButton>
      </form>
    </div>
  );
}

export default PaperPostForm;
