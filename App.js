/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TextInput, TouchableOpacity
} from 'react-native';
import AuthAction from './src/store/actions/authAction'
import { connect } from "react-redux";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu TouchableOpacity for dev menu',
});

type Props = {};
class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      registerShow: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLogin ? <View>
          <Text>Login Successfully</Text>
        </View> :

          <View>
            {this.state.registerShow ? <View>
              <Text style={styles.heading}>Register here !</Text>
              <View>
                <TextInput underlineColorAndroid="transparent" style={styles.inputFeild} placeholder="Email"
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({ email: text }) }} />
                <TextInput underlineColorAndroid="transparent" style={styles.inputFeild} placeholder="password" secureTextEntry={true}
                  value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} />
                <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                  this.setState({ registerShow: !this.state.registerShow })
                }}><Text style={{ color: 'white', fontSize: 20 }}>Back</Text></TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                  let emailPass = {
                    email: this.state.email,
                    password: this.state.password
                  }
                  this.props.creataUser(emailPass);
                }} ><Text style={{ color: 'white', fontSize: 20 }}>Register</Text></TouchableOpacity>
              </View>
            </View> :
              <View>
                <Text style={styles.heading}>Access your Account</Text>
                <TextInput underlineColorAndroid="transparent" style={styles.inputFeild} placeholder="Email"
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({ email: text }) }} />
                <TextInput underlineColorAndroid="transparent" style={styles.inputFeild} placeholder="password" secureTextEntry={true}
                  value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} />
                <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                  let emailPass = {
                    email: this.state.email,
                    password: this.state.password
                  }
                  this.props.login(emailPass)
                }} ><Text style={{ color: 'white', fontSize: 20 }}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                  this.setState({ registerShow: !this.state.registerShow, email: '', password: '' })
                }} ><Text style={{ color: 'white', fontSize: 20 }}>Register</Text></TouchableOpacity>
              </View>
            }
          </View>

        }
      </View>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    isLogin: state.AuthReducer.isLogin,
    // registerShow: state.AuthReducer.registerShow
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => { dispatch(AuthAction.loginUser(data)) },
    creataUser: (data) => { dispatch(AuthAction.createUser(data)) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


const styles = StyleSheet.create({
  TouchableOpacity:
    {
      borderRadius: 20,
      margin: 10,
      borderColor: 'white',
      borderWidth: 2,
      backgroundColor: 'blue',
      padding: 10

    },
  inputFeild: {
    fontSize: 20,
    height: 50,
    width: 400,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
    , margin: 10
  },
  heading: {
    fontSize: 36

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
