import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = { TextInput_10: "" }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View style={styles.View_5}>
        <View>
          <TextInput
            placeholder="Number Input Placeholder"
            keyboardType="numeric"
            value={this.state.TextInput_10}
            onChangeText={nextValue =>
              this.setState({ TextInput_10: nextValue })
            }
          />
        </View>
      </View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_5: { flexDirection: "row" },
  View_6: {},
  TextInput_10: {},
  Button_12: {}
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
