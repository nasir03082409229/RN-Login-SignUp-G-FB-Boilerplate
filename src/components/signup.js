//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity
} from 'react-native';
import AuthAction from "../store/actions/authAction";
import { connect } from "react-redux";

// create a component
class SignUp extends Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    createUser = () => this.props.creataUser({ email: this.state.email, password: this.state.password })
    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.container}>
                <TextInput style={{ width: 250 }} keyboardType={'email-address'} placeholder={"Email"} value={email} onChangeText={(email) => this.setState({ email })} />
                <TextInput style={{ width: 250 }} placeholder={"Password"} secureTextEntry={true} value={password} onChangeText={(password) => this.setState({ password })} />
                <TouchableOpacity onPress={this.createUser}><Text>Register here !</Text></TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
let mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => { dispatch(AuthAction.loginUser(data)) },
        creataUser: (data) => { dispatch(AuthAction.createUser(data)) },
    }
}
export default connect(null, mapDispatchToProps)(SignUp)
