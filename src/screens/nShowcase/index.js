import React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";

import {
  Carousel,
  Collection,
  Category,
  Competition,
  Footer,
} from "components";
import Skeleton from "./Skeleton";

class Showcase extends React.Component {
  componentDidMount() {
    if (!this.props.store.isLoaded) {
      const fetchData = this.props.fetchData;
      fetchData();
    }
  }

  render() {
    if (!this.props.store.isLoaded) {
      return <Skeleton />;
    } else {
      return (
        <ScrollView>
          <Carousel
            HeroGallery={this.props.store.HeroGallery}
            navigation={this.props.navigation}
          />
          <Collection
            lists={this.props.store.Trending}
            title={"Trending Now"}
            navigation={this.props.navigation}
          />
          <Category
            lists={this.props.store.TopAiringToday}
            title={"Airing Now"}
            navigation={this.props.navigation}
          />
          <Competition
            lists={this.props.store.TopCategories}
            navigation={this.props.navigation}
          />
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
