import { forwardRef } from "react";

import CardDescription from "./CardDescription";
import CardPanel from "./CardPanel";
import CardSplitter from "./CardSplitter";
import CardThumbnail from "./CardThumbnail";
import CardTitle from "./CardTitle";

const Card = forwardRef(function Card({ children, ...props }, ref) {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

Card.Thumbnail = CardThumbnail;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Panel = CardPanel;
Card.Splitter = CardSplitter;

export default Card;
