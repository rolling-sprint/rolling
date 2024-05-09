import { MyPaperCard } from "./MyPaperCard";
import styles from "./MyPaperCardList.module.scss";
import { useEffect, useState } from "react";
import { getMessages, getRecipientDetail } from "../../../services/api";
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
  const INITIAL_RECIPIENT_VALUE = {
    backgroundColor: "",
    backgroundImageURL: null,
  };

  const [userMessage, setUserMessage] = useState(INITIAL_VALUE);
  const [recipient, setRecipient] = useState(INITIAL_RECIPIENT_VALUE);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const onClickButton = (message) => {
    setSelectedMessage(message);
    setModalIsOpen(true);
  };

  const handleLoad = async () => {
    const message = await getMessages(id);
    setUserMessage(message);
    const user = await getRecipientDetail(id);
    setRecipient(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const ColorNumber = (color) => {
    switch (color) {
      case "beige":
        return "#ffe2ad";
      case "purple":
        return "#ecd9ff";
      case "blue":
        return "#b1e4ff";
      case "green":
        return "#d0f5c3";
      default:
        return "#ffe2ad";
    }
  };

  const ColorStyle = {
    background: `${ColorNumber(recipient.backgroundColor)}`,
  };

  const imageStyle = {
    backgroundImage: recipient.backgroundImageURL
      ? `url(${recipient.backgroundImageURL})`
      : "none",
  };

  const sortedItems = userMessage.results
    ? userMessage.results
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <div
      className={styles.background}
      style={recipient.backgroundImageURL ? imageStyle : ColorStyle}
    >
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
