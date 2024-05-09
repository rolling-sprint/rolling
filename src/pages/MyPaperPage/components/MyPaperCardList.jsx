import { MyPaperCard } from "./MyPaperCard";
import styles from "./MyPaperCardList.module.scss";
import { useEffect, useState } from "react";
import { getMessages } from "../../../services/api";
import AddPaperCard from "./AddPaperCard";
import Modal from "./Modal/Modal";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const onClickButton = (message) => {
    setSelectedMessage(message);
    setModalIsOpen(true);
  };

  const handleLoad = async () => {
    const message = await getMessages(id);
    setUserMessage(message);
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
            <MyPaperCard
              className={styles.card}
              onClick={() => onClickButton(result)}
              key={index}
              message={result}
            />
          ))}
        {modalIsOpen && (
          <Modal
            open={modalIsOpen}
            onClose={() => {
              setModalIsOpen(false);
            }}
            message={selectedMessage}
          />
        )}
      </div>
    </div>
  );
}

export default MyPaperCardList;
