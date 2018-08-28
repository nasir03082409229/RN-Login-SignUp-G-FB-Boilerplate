//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as firebase from 'firebase'
// create a component
class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize : ''}}>Login SuccessFully </Text>
                <Text>Welcome To Home Component </Text>
                <Button title="logout" onPress={() => {
                    firebase.auth().signOut()
                        .then(() => this.props.navigation.navigate('Auth'))
                        .catch((err) => {
                            alert(err.message)
                        })
                }}></Button>
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
export default Home;
