import React from "react";
import { Dimensions } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";

const { width, height } = Dimensions.get("window");
const CarouselHeight = 280;

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
        y={CarouselHeight + 225}
        rx="0"
        ry="0"
        width="35"
        height="10"
      />
      <Rect
        x="120"
        y={CarouselHeight + 225}
        rx="0"
        ry="0"
        width="35"
        height="10"
      />
      <Rect
        x="225"
        y={CarouselHeight + 225}
        rx="0"
        ry="0"
        width="35"
        height="10"
      />

      <Rect
        x="15"
        y={CarouselHeight + 208}
        rx="0"
        ry="0"
        width="70"
        height="10"
      />
      <Rect
        x="120"
        y={CarouselHeight + 208}
        rx="0"
        ry="0"
        width="70"
        height="10"
      />
      <Rect
        x="225"
        y={CarouselHeight + 208}
        rx="0"
        ry="0"
        width="70"
        height="10"
      />

      <Rect
        x="15"
        y={CarouselHeight + 190}
        rx="0"
        ry="0"
        width="50"
        height="10"
      />
      <Rect
        x="120"
        y={CarouselHeight + 190}
        rx="0"
        ry="0"
        width="50"
        height="10"
      />
      <Rect
        x="225"
        y={CarouselHeight + 190}
        rx="0"
        ry="0"
        width="50"
        height="10"
      />

      <Rect
        x="15"
        y={CarouselHeight + 75}
        rx="5"
        ry="5"
        width={95}
        height={95}
      />
      <Rect x="15" y="165" rx="0" ry="0" width="55" height="8" />
      <Rect x="15" y="180" rx="0" ry="0" width="80" height="10" />
      <Rect x="15" y="195" rx="0" ry="0" width="30" height="8" />

      <Rect
        x="120"
        y={CarouselHeight + 75}
        rx="5"
        ry="5"
        width={95}
        height={95}
      />
      <Rect x="15" y="165" rx="0" ry="0" width="55" height="8" />
      <Rect x="15" y="180" rx="0" ry="0" width="80" height="10" />
      <Rect x="15" y="195" rx="0" ry="0" width="30" height="8" />

      <Rect
        x="225"
        y={CarouselHeight + 75}
        rx="5"
        ry="5"
        width={95}
        height={95}
      />
      <Rect x="15" y="165" rx="0" ry="0" width="55" height="8" />
      <Rect x="15" y="180" rx="0" ry="0" width="80" height="10" />
      <Rect x="15" y="195" rx="0" ry="0" width="30" height="8" />

      <Rect
        x="15"
        y={CarouselHeight + 35}
        rx="0"
        ry="0"
        width="140"
        height="22"
      />

      <Rect x="0" y="0" rx="0" ry="0" width={width} height={CarouselHeight} />
    </ContentLoader>
  );
}
