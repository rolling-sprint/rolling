import styles from "./BestEmoji.module.scss";
import Text from "../../../components/UI/text/Text";

const BestEmoji = ({ topReactions = [] }) => {
  console.log(topReactions);
  return (
    <>
      {topReactions.length !== 0 ? (
        <div className={styles.emoji_container}>
          {topReactions.map((emoji) => {
            return (
              <div key={emoji.id} className={styles.badge_emoji}>
                <div>{emoji.emoji}</div>
                <Text font="regular16" className={styles.emoji_count}>
                  {emoji.count}
                </Text>
              </div>
            );
          })}
        </div>
      ) : (
        <div>이모지를 추가해주세요</div>
      )}
    </>
  );
};

export default BestEmoji;
