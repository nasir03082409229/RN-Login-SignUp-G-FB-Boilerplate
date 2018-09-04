import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Scrollvew,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import Icon from "react-native-vector-icons/MaterialIcons";

class ForGetScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  sendEmail = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        alert("Email Send , check your email");
        this.setState({ email: "" });
      })
      .catch(err => {
        alert(JSON.stringify(err.message));
      });
  };
  componentWillReceiveProps = nextProps => {
    // alert(JSON.stringify(nextProps))
    if (nextProps.isLogin === true) {
      this.props.navigation.navigate("App");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require("../images/logo.png")} />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            style={styles.inputIcon}
            name="email"
            size={30}
            color="#5F4B8B"
          />
          {/* <Image  source={{ uri: 'https://png.icons8.com/message/50/3498db' }} /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton, { elevation: 5 }]}
          onPress={this.sendEmail}
        >
          <Text style={styles.loginText}> Send Email</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate("SignIn")}
        >
          <Text>Back to login screen </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
let mapStateToProps = state => {
  return {
    isLogin: state.AuthReducer.isLogin
  };
};
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
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);
export default ForGetScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
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
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,

    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#5F4B8B"
  },
  loginText: {
    color: "white"
  }
});
