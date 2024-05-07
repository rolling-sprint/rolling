import MyPaperCard from "./MyPaperCard";
import styles from "./MyPaperCardList.module.scss";
import { useEffect, useState } from "react";
import { getMessages } from "../../../services/api";
import AddPaperCard from "./AddPaperCard";

function MyPaperCardList({ id }) {
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
    const message = await getMessages(id);
    setUserMessage(message);
    console.log(message);
  };

  useEffect(() => {
    handleLoad();
  }, [id]);

  const sortedItems = userMessage.results
    ? userMessage.results
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <div className={styles.background}>
      <div className={styles.cardList}>
        <AddPaperCard className={styles.addCard} />
        {sortedItems &&
          sortedItems.map((result, index) => (
            <MyPaperCard className={styles.card} key={index} message={result} />
          ))}
      </div>
    </div>
  );
}

export default MyPaperCardList;
