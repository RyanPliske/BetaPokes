import React, {Component} from 'react';
import MapView from 'react-native-maps';
import isNil from "lodash/isNil"

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)

    const region = {
      latitude: 38.778002,
      longitude: -90.524456,
      latitudeDelta: 0.9,
      longitudeDelta: 0.9
    }

    this.state = { region }
  }

  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={this.state.region}
        showsUserLocation={true}
      />
    );
  }

  componentDidMount() {
    const getPosition = (position) => {
      if (isNil(position.coords)) { return }
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2
      }
      this.setState({ region })
      console.log("Region Set to :", region)
    }

    const watchPosition = (position) => {
      console.log("New User Location:", position.coords)
    }

    navigator.geolocation.getCurrentPosition(getPosition)
    navigator.geolocation.watchPosition(watchPosition)
  }
}