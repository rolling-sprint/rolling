import MyPaperCard from "./MyPaperCard";
import styles from "./MyPaperCardList.module.scss";
import { useEffect, useState } from "react";
import { getMessages } from "../../../services/api";
import AddPaperCard from "./AddPaperCard";

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
    const message = await getMessages(6691);
    setUserMessage(message);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={styles.cardList}>
      <AddPaperCard className={styles.addCard} />
      {userMessage &&
        userMessage.results &&
        userMessage.results.map((result, index) => (
          <MyPaperCard className={styles.card} key={index} message={result} />
        ))}
    </div>
  );
}

export default MyPaperCardList;
