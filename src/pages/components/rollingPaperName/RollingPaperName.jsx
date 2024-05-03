import React from "react";
import styles from "./RollingPaperName.module.scss";
import Text from "../../../components/UI/text/Text";
const RollingPaperName = ({ name, isBackgroundImage }) => {
  const textStyle = isBackgroundImage ? { color: "#fff" } : {};
  return (
    <Text font="bold24" style={textStyle}>
      To. {name}
    </Text>
  );
};

export default RollingPaperName;
