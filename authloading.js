import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet, Text,
    View, Image
} from 'react-native';
import * as firebase from "firebase";
class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // const userToken = await AsyncStorage.getItem('userToken');

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.props.navigation.navigate('App');
            } else {
                this.props.navigation.navigate('Auth');
            }
        });
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row1}>
                    <Image style={styles.logo} source={require('./src/images/logo.png')} />
                </View>
                <ActivityIndicator style={styles.row1} size={100} color="green" />
                <StatusBar barStyle="default" />
                <View><Text>Loading . . . . . </Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        // marginTop: 30,
        // width: 150,
        // height: 153,
    },
    row1: {
        // flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,


        height: 200,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F0E4D2',
    }
})
export default AuthLoading;