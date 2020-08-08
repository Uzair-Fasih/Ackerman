import React, { useRef, useEffect } from "react";
import { TouchableHighlight } from "react-native";

import {
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
} from "react-native";

const CarouselHeight = 280;
let scrollPosition = 0;

const { width: windowWidth } = Dimensions.get("window");

export default class Carousel extends React.Component {
  interval = null;

  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
    };
    this.scrollViewRef = React.createRef();
  }

  componentDidMount() {
    const width = windowWidth;
    const size = this.props.HeroGallery.length;

    if (this.interval) clearInterval(this.interval);

    function slideshowLogic() {
      if (
        this.scrollViewRef &&
        "current" in this.scrollViewRef &&
        "scrollTo" in this.scrollViewRef.current
      ) {
        scrollPosition =
          width * size >= scrollPosition ? scrollPosition + width : 0;
        this.scrollViewRef.current.scrollTo({
          y: 0,
          x: scrollPosition,
          animated: true,
        });
      }
    }
    this.interval = setInterval(slideshowLogic.bind(this), 5000);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.scrollContainer}>
        <Animated.ScrollView
          ref={this.scrollViewRef}
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
                    x: this.state.scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
        >
          {this.props.HeroGallery.map((show, imageIndex) => {
            return (
              <TouchableHighlight
                style={{
                  width: windowWidth,
                  height: CarouselHeight,
                }}
                key={imageIndex}
                onPress={() => {
                  this.props.navigation.navigate("Show", {
                    id: show.id,
                  });
                }}
              >
                <ImageBackground
                  source={{ uri: show.banner }}
                  style={styles.card}
                  imageStyle={styles.cardBackground}
                ></ImageBackground>
              </TouchableHighlight>
            );
          })}
        </Animated.ScrollView>
        <View style={styles.indicatorContainer}>
          {this.props.HeroGallery.map((image, imageIndex) => {
            const width = this.state.scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [4, 16, 4],
              extrapolate: "clamp",
            });
            const backgroundColor = this.state.scrollX.interpolate({
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
