import MyPaperCard from "./MyPaperCard";
import styles from "./MyPaperCardList.module.scss";
import { useEffect, useState } from "react";
import { getMessages } from "../../../services/api";

function MyPaperCardList() {
  const INITIAL_VALUE = {
    sender: "",
    profileImage: null,
    relationship: "",
    content: "",
    font: "",
    createdAt: "",
  };

  const [userMessage, setUserMessage] = useState(INITIAL_VALUE);
  const handleLoad = async () => {
    const message = await getMessages(6692);
    setUserMessage(message);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="page-wrapper">
      <div className={styles.cardList}>
        {userMessage &&
          userMessage.results &&
          userMessage.results.map((result, index) => (
            <MyPaperCard key={index} message={result} />
          ))}
      </div>
    </div>
  );
}

export default MyPaperCardList;
