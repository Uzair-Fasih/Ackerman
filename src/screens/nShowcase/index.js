import React from "react";
import { ScrollView, Dimensions, View } from "react-native";
import { connect } from "react-redux";

import Skeleton from "./Skeleton";
import Carousel from "../../components/nCarousel";
import Collection from "../../components/nCollection";
import Category from "../../components/nCategory";
import Competition from "../../components/nCompetition";
import Footer from "../../components/nFooter";

const { width, height } = Dimensions.get("window");

class Showcase extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.store.isLoaded) {
      const fetchDate = this.props.fetchData;
      setTimeout(function () {
        fetchDate();
      }, 1000);
    }
  }

  render() {
    if (!this.props.store.isLoaded) {
      return (
        <View style={{ height, width }}>
          <Skeleton />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <Carousel images={this.props.store.images} />
          <Collection
            lists={this.props.store.trending}
            title={"Trending Now"}
          />
          <Category
            lists={this.props.store.top6AiringToday}
            title={"Airing Now"}
            navigation={this.props.navigation}
          />
          <Competition lists={this.props.store.top} />
          <Footer />
        </ScrollView>
      );
    }
  }
}

function mapStateToProps(state) {
  return { store: state.showcase };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: "FETCH_SHOWCASE_DATA", dispatch }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);
