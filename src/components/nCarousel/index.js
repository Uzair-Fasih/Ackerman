import React, { useRef, useEffect } from "react";

import {
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from "react-native";

const CarouselHeight = 280;
let scrollPosition = 0;

export default function Carousel(props) {
  const { width: windowWidth } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef();
  let interval;

  useEffect(() => {
    const width = windowWidth;
    const size = props.images.length;
    if (interval) clearInterval(interval);
    if (scrollViewRef && scrollViewRef.current.scrollTo) {
      interval = setInterval(function () {
        if (scrollViewRef && scrollViewRef.current.scrollTo) {
          scrollPosition =
            width * size >= scrollPosition ? scrollPosition + width : 0;
          scrollViewRef.current.scrollTo({
            y: 0,
            x: scrollPosition,
            animated: true,
          });
          // console.log(width * size, scrollView.contentOffset);
        }
      }, 5000);
    }
  });

  return (
    <View style={styles.scrollContainer}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal={true}
        style={styles.scrollViewStyle}
        pagingEnabled
        onScrollEndDrag={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const scrollPostitonOffset = Math.floor(offsetX % windowWidth);
          scrollPosition = offsetX - scrollPostitonOffset;
        }}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={1}
      >
        {props.images.map((image, imageIndex) => {
          return (
            <View
              style={{ width: windowWidth, height: CarouselHeight }}
              key={imageIndex}
              onPress={() => {
                console.log(image.id);
              }}
            >
              <ImageBackground
                source={{ uri: image.bannerImage }}
                style={styles.card}
                imageStyle={styles.cardBackground}
              ></ImageBackground>
            </View>
          );
        })}
      </Animated.ScrollView>
      <View style={styles.indicatorContainer}>
        {props.images.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: [4, 16, 4],
            extrapolate: "clamp",
          });
          const backgroundColor = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: ["transparent", "#FFF", "transparent"],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={imageIndex}
              style={[
                styles.normalDot,
                {
                  width,
                  backgroundColor,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  scrollContainer: {
    height: CarouselHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  cardBackground: {
    resizeMode: "cover",
  },
  normalDot: {
    height: 4,
    width: 4,
    borderRadius: 4,
    borderColor: "white",
    borderWidth: 1,
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 5,
    backgroundColor: "rgba(0,0,0, .5)",
    borderRadius: 20,
    paddingHorizontal: 5,
    height: 20,
  },
});
