import React from "react";
import { View, Dimensions, ScrollView, Text } from "react-native";
import Tile from "../../components/nTile";
import Skeleton from "./Skeleton";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

const styles = {
  Daily: {
    width,
    paddingHorizontal: 10,
  },
  Content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 100,
  },
};

class Daily extends React.Component {
  constructor(props) {
    super(props);
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const d = new Date().getDay();
    this.state = {
      day: this.props.route.name,
      offset: days.indexOf(this.props.route.name) - d,
    };
  }

  componentDidMount() {
    this.props.fetchData(this.state.day, this.state.offset);
  }

  render() {
    if (!this.props.store[this.state.day].isLoaded) return <Skeleton />;
    else {
      // console.log(this.props.store[this.state.day]);
      return (
        <ScrollView style={styles.Daily}>
          <View style={styles.Content}>
            {this.props.store[this.state.day].lists.map((show, itemIndex) => (
              <Tile
                item={show}
                key={itemIndex}
                width={width / 3}
                navigation={this.props.navigation}
              />
            ))}
          </View>
        </ScrollView>
      );
    }
  }
}

function mapStateToProps(state) {
  return { store: state.daily };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (day, offset) =>
      dispatch({ type: "FETCH_SCHEDULE_DATA", dispatch, day, offset }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
