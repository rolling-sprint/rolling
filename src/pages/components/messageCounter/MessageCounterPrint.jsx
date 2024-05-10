import React from "react";
import Text from "../../../components/UI/text/Text";

export default function MessageCounterPrint({
  messageCount,
  isBackgroundImage = false,
}) {
  const textStyle = isBackgroundImage ? { color: "#fff" } : {};

  // 호버이벤트
  const handleMouseEnter = (event) => {
    event.target.style.cursor = "default";
  };
  return (
    <Text font="bold16" style={textStyle} onMouseEnter={handleMouseEnter}>
      {messageCount}
      <Text font="regular16" style={textStyle}>
        명이 작성했어요!
      </Text>
    </Text>
  );
}
