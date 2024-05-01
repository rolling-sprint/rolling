import { useState } from "react";
import DropDownBox from "./DropDownBox/DropDownBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import styles from "./MessagePostForm.module.scss";

const INITIAL_VALUES = {
  recipientId: null,
  sender: "",
  profileImageURL: "",
  relationship: "",
  content: "",
  font: "",
};

const RELATIONSHIP = [
  { id: 1, value: "친구" },
  { id: 2, value: "지인" },
  { id: 3, value: "동료" },
  { id: 4, value: "가족" },
];

const FONT = [
  { id: 1, value: "Noto Sans" },
  { id: 2, value: "Pretendard" },
  { id: 3, value: "나눔명조" },
  { id: 4, value: "나눔손글씨 손편지체" },
];

function MessagePostForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [submitActive, setSubmitActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (values.sender && values.content) {
      setSubmitActive(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div>
          <h2>From.</h2>
          <input
            name="sender"
            type="text"
            value={values.sender}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div>
          <h2>프로필 이미지</h2>
          <ProfileImage name="profileImageURL" onChange={handleInputChange} />
        </div>
        <div>
          <h2>상대와의 관계</h2>
          <DropDownBox
            name="relationship"
            onChange={handleInputChange}
            options={RELATIONSHIP}
          />
        </div>
        <div>
          <h2>내용을 입력해 주세요</h2>
        </div>
        <div>
          <h2>폰트 선택</h2>
          <DropDownBox
            name="font"
            onChange={handleInputChange}
            options={FONT}
          />
        </div>
        <button type="submit">생성하기</button>
      </form>
    </div>
  );
}

export default MessagePostForm;