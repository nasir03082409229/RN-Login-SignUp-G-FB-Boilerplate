import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Dimensions
} from "react-native";
import AuthAction from "../store/actions/authAction";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

class SignUp extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    // alert(JSON.stringify(nextProps))
    if (nextProps.isLogin === true) {
      this.props.navigation.navigate("App");
    }
  }

  createUser = () =>
    this.props.creataUser({
      email: this.state.email,
      password: this.state.password
    });

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image style={styles.logo} source={require("../images/logo.png")} />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              style={styles.inputIcon}
              name="person"
              size={30}
              color="#5F4B8B"
            />
            {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/male-user/#5F4B8B/50/3498db' }} /> */}
            <TextInput
              style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={fullName => this.setState({ fullName })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              style={styles.inputIcon}
              name="email"
              size={30}
              color="#5F4B8B"
            />
            {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/#5F4B8B/50/3498db' }} /> */}
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              style={styles.inputIcon}
              name="lock"
              size={30}
              color="#5F4B8B"
            />
            {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/#5F4B8B/50/3498db' }} /> */}
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() => this.createUser()}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableHighlight>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={{ marginHorizontal: -15 }}>
              <Image
                style={styles.icon}
                source={require("../images/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: -15 }}>
              <Image
                style={styles.icon}
                source={require("../images/Google+.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            height: Dimensions.get("window").height - 450
          }}
        >
          <Text> </Text>
        </View>
      </ScrollView>
    );
  }
}
let mapDispatchToProps = dispatch => {
  return {
    login: data => {
      dispatch(AuthAction.loginUser(data));
    },
    creataUser: data => {
      dispatch(AuthAction.createUser(data));
    }
  };
};
let mapStateToProps = state => {
  return {
    isLogin: state.AuthReducer.isLogin
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
    // height: Dimensions.get('window').height,
    // width: '100%',
    // borderColor: 'red',
    // borderWidth: 2
    // display: 'flex'
  },
  loginText: {
    color: "white"
  },
  icon: {
    width: 50,
    height: 50,

    marginHorizontal: 20
  },
  googleButton: {
    backgroundColor: "#DD4B39"
  },
  fabookButton: {
    backgroundColor: "#3b5998"
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  socialButtonContainer: {
    elevation: 5,
    // height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    // width: 250,
    borderRadius: 100,
    elevation: 5
  },
  buttonContainer: {
    elevation: 5,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    elevation: 5
    // borderWidth: 0.3,
    // borderColor : 'black'
  },
  signupButton: {
    backgroundColor: "#5F4B8B"
  },
  signUpText: {
    color: "white"
  }
});
