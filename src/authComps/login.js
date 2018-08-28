import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert, Scrollvew
} from 'react-native';
import { connect } from "react-redux";
import AuthAction from "../store/actions/authAction";
import Icon from 'react-native-vector-icons/MaterialIcons';

class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        this.props.navigation.navigate('SignUp')
        // Alert.alert("Alert", "Button pressed "+viewId);
    }
    loginFunc = () => this.props.login({ email: this.state.email, password: this.state.password })
    componentWillReceiveProps = (nextProps) => {
        // alert(JSON.stringify(nextProps))
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.logo} source={require('../images/logo.png')} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon style={styles.inputIcon} name="email" size={30} color="#5F4B8B" />
                    {/* <Image  source={{ uri: 'https://png.icons8.com/message/50/3498db' }} /> */}
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/#5F4B8B/50/3498db' }} /> */}
                    <Icon style={styles.inputIcon} name="lock" size={30} color="#5F4B8B" />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton, { elevation: 5, }]}
                    onPress={() => this.loginFunc()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                {/* <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight> */}

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                    <Text>Create an Account Here !</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        isLogin: state.AuthReducer.isLogin
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => { dispatch(AuthAction.loginUser(data)) },
        creataUser: (data) => { dispatch(AuthAction.createUser(data)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,

        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#5F4B8B",
    },
    loginText: {
        color: 'white',
    }
});
