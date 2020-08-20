import React from "react";
import { Dimensions } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";

const { width, height } = Dimensions.get("window");
const CarouselHeight = -50;
const verticalPadding = 15;
const templateWidth = (width - verticalPadding * 2 - 30) / 3;

export default function ShowcaseSkeleton() {
  return (
    <ContentLoader
      style={{ minHeight: height, width: width }}
      speed={1}
      backgroundColor="#ccc"
      foregroundColor="#ddd"
      interval={0.25}
    >
      <Rect
        x="15"
        y={CarouselHeight + 238}
        rx="0"
        ry="0"
        width="80"
        height="15"
      />
      <Rect
        x={15 + templateWidth + verticalPadding}
        y={CarouselHeight + 235}
        rx="0"
        ry="0"
        width="80"
        height="15"
      />
      <Rect
        x={15 + templateWidth * 2 + verticalPadding * 2}
        y={CarouselHeight + 235}
        rx="0"
        ry="0"
        width="80"
        height="15"
      />

      <Rect
        x="15"
        y={CarouselHeight + 210}
        rx="0"
        ry="0"
        width="60"
        height="15"
      />

      <Rect
        x={15 + templateWidth + verticalPadding}
        y={CarouselHeight + 210}
        rx="0"
        ry="0"
        width="60"
        height="15"
      />

      <Rect
        x={15 + templateWidth * 2 + verticalPadding * 2}
        y={CarouselHeight + 210}
        rx="0"
        ry="0"
        width="60"
        height="15"
      />

      <Rect
        x="15"
        y={CarouselHeight + 75}
        rx="5"
        ry="5"
        width={templateWidth}
        height={templateWidth}
      />

      <Rect
        x={15 + templateWidth + verticalPadding}
        y={CarouselHeight + 75}
        rx="5"
        ry="5"
        width={templateWidth}
        height={templateWidth}
      />

      <Rect
        x={15 + templateWidth * 2 + verticalPadding * 2}
        y={CarouselHeight + 75}
        rx="5"
        ry="5"
        width={templateWidth}
        height={templateWidth}
      />
    </ContentLoader>
  );
}
