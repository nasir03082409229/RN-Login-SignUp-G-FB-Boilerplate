import { AppRegistry } from 'react-native';
import React from 'react'
import { Provider } from 'react-redux'
import App from './App';
import { store } from './src/store/index'
console.disableYellowBox = true;

class MainApplication extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}
AppRegistry.registerComponent('loginSignUpBoilerPlate', () => MainApplication);
