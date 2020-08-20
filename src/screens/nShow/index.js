import React, { createRef } from "react";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Image,
  VirtualizedList,
} from "react-native";
import ShowInformation from "../../../api/show/call";
import { FontAwesome, Foundation, Ionicons } from "@expo/vector-icons";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";

const headerHeight = 60;
const { width, height } = Dimensions.get("window");

const styles = {
  show: {
    width,
    height,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "column",
    backgroundColor: "#292929",
  },
  header: {
    marginTop: StatusBar.currentHeight,
    height: headerHeight,
    width,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, .25)",
  },
  banner: {
    height: height,
    width,
  },
  showContainer: {
    height: height - headerHeight,
    width,
    flexDirection: "column",
  },
  genre: {
    color: "#FFF",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    color: "#FFF",
    fontSize: 35,
    lineHeight: 35,
  },
  studio: {
    color: "#FFF",
    fontSize: 16,
  },
  description: {
    color: "#FFF",
    fontSize: 15,
    width: width * 0.6,
    marginVertical: 15,
  },
  popularity: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 5,
    marginRight: 15,
  },
  score: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 5,
  },
  episodeButton: {
    borderColor: "#FFF",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 110,
    borderRadius: 30,
    marginVertical: 25,
  },
  episodeButtonText: {
    color: "#FFF",
    fontSize: 15,
  },
};

const userFriendlyPopularity = (count) => {
  if (count < 1000) return `${count}`;
  if (count >= 1000 && count < 1000000) return `${Math.floor(count / 1000)}K`;
  if (count >= 1000000) return `${Math.floor(count / 1000000)}M`;
};

const EpisodeListing = ({ item }) => {
  return (
    <TouchableHighlight
      style={{
        flexDirection: "row",
        backgroundColor: "#292929",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#777",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <ImageBackground
          style={{ height: 80, width: 80 }}
          source={{ uri: item.thumbnail }}
        />
        <View
          style={{
            flexDirection: "column",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 14, width: width - 100, color: "#FFF" }}>
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const ShowInfo = ({
  genre,
  title,
  studio,
  description,
  popularity,
  score,
  setHeight,
}) => (
  <View
    style={{ width }}
    onLayout={(event) => {
      var { x, y, width, height } = event.nativeEvent.layout;
      setHeight(height);
    }}
  >
    <View
      style={{
        backgroundColor: "rgba(0, 0, 0, .25)",
        flexDirection: "column",
        padding: 15,
      }}
    >
      <Text style={styles.genre}>{genre}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.studio}>{studio}</Text>
      <Text style={styles.description}>
        {description && description.length > 80
          ? description.substring(0, 77).trim() + "..."
          : description}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome name="user" size={16} color="white" />
        <Text style={styles.popularity}>
          {userFriendlyPopularity(popularity)}
        </Text>
        <Foundation name="star" size={17} color="white" />
        <Text style={styles.score}>{score / 10}</Text>
      </View>
      <TouchableHighlight style={styles.episodeButton}>
        <Text style={styles.episodeButtonText}>Go to 1st Ep →</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    // this.props.route.params.id;
    this.state = {
      id: this.props.route.params.id,
      bannerHeight: 500,
      show: { loaded: "false" },
      mode: "crunchyroll",
    };
  }

  componentDidMount() {
    const vm = this;
    ShowInformation(this.state.id, function (show) {
      vm.setState({ show });
    });
  }

  setBannerHeight() {
    return (bannerHeight) =>
      this.setState({
        bannerHeight: bannerHeight + headerHeight + StatusBar.currentHeight,
      });
  }

  render() {
    if (this.state.show.loaded) {
      const showData = {
        genre: this.state.show.genre,
        title: this.state.show.title,
        studio: this.state.show.studio,
        description: this.state.show.description,
        popularity: this.state.show.popularity,
        score: this.state.show.score,
        setHeight: this.setBannerHeight(),
      };
      return (
        <View style={styles.show}>
          <ImageBackground
            style={{
              width,
              height: this.state.bannerHeight,
              position: "absolute",
              top: 0,
              zIndex: 1,
            }}
            source={{ uri: this.state.show.background }}
          >
            <View style={styles.header}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.goBack()}
              >
                <Ionicons name="md-arrow-back" size={24} color="white" />
              </TouchableNativeFeedback>

              <TouchableNativeFeedback
                onPress={() =>
                  this.setState({
                    mode:
                      this.state.mode == "crunchyroll"
                        ? "horriblesubs"
                        : "crunchyroll",
                  })
                }
              >
                <Image
                  source={
                    this.state.mode == "crunchyroll"
                      ? require(`../../../assets/icons/crunchyroll.png`)
                      : require(`../../../assets/icons/horriblesubs.png`)
                  }
                  style={{ height: 24, width: 24 }}
                />
              </TouchableNativeFeedback>
            </View>
          </ImageBackground>
          <VirtualizedList
            style={{
              top: headerHeight,
              position: "relative",
              zIndex: 2,
            }}
            ListHeaderComponent={ShowInfo(showData)}
            ListFooterComponent={() => (
              <View
                style={{
                  height: 80 - StatusBar.currentHeight,
                  backgroundColor: "#292929",
                }}
              ></View>
            )}
            data={this.state.show.episodes}
            getItemCount={() =>
              this.state.show.episodes ? this.state.show.episodes.length : 0
            }
            getItem={(data, index) => {
              return data[index];
            }}
            persistentScrollbar={true}
            keyExtractor={(ep, index) => String(index)}
            renderItem={(ep) => <EpisodeListing {...ep} />}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
  }
}
