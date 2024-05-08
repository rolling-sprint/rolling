import { useParams } from "react-router-dom";
import BestEmoji from "../../components/bestEmoji/BestEmoji";
import EmojiAdd from "../../components/emojiAdd/EmojiAdd";
import EmojiListDropDown from "../../components/emojiListDropDown/EmojiListDropDown";
import MessageCounterPrint from "../../components/messageCounter/MessageCounterPrint";
import ProfileImagePreview from "../../components/profileImagePreview/ProfileImagePreview";
import RollingPaperName from "../../components/rollingPaperName/RollingPaperName";
import styles from "./MyPageHeader.module.scss";
import { useEffect, useState } from "react";
import { getRecipientDetail } from "../../../services/api";

const MyPageHeader = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);

  const getData = async (id) => {
    const data = await getRecipientDetail(id);
    setMyData(data);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className={styles.header}>
      <div className={styles.mypage_name}>
        <RollingPaperName {...myData} />
      </div>
      <ProfileImagePreview {...myData} />
      <MessageCounterPrint {...myData} />
      <BestEmoji {...myData} />
      <EmojiListDropDown recipientId={id} />
      <EmojiAdd recipientId={id} />
      <div>공유드롭다운</div>
    </div>
  );
};

export default MyPageHeader;
