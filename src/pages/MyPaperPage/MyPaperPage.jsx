import { useParams } from "react-router-dom";
import EmojiAdd from "../components/emojiAdd/EmojiAdd";

function MyPaperPage() {
  // id값 잘 넘어가는지 확인
  const { id } = useParams();
  return (
    <div className="page-wrapper">
      MyPaperPage
      <EmojiAdd recipientId={id} />
    </div>
  );
}

export default MyPaperPage;
