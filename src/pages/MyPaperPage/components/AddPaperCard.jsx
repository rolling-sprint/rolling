import styles from "./AddPaperCard.module.scss";
import addButton from "../../../../src/assets/icons/add-papercard-button.svg";
import { Link, useNavigate } from "react-router-dom";

function AddPaperCard() {
  const navigate = useNavigate();
  const addCard = () => {
    navigate("/post/6789/message");
  };
  return (
    <div className={styles.addPaperCard}>
      <Link to="/post/6789/message">
        <button className={styles.addButton} onClick={addCard}>
          <img
            className={styles.addButtonImg}
            src={addButton}
            alt="롤링 페이퍼 카드 추가 버튼"
          />
        </button>
      </Link>
    </div>
  );
}

export default AddPaperCard;
