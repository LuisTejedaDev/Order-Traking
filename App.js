import 'react-native-gesture-handler'
import React from 'react';
import {Provider} from 'react-redux'
import {store} from './src/store'
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import App from './src/index';

export default () => {

    return (
        <Provider store={store}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#3498db" 
            />
            <SafeAreaView style={{backgroundColor: '#3498db'}} />
            <GestureHandlerRootView>
                <App />
            </GestureHandlerRootView>
            <SafeAreaView style={{backgroundColor: '#3498db'}}/>
        </Provider>
    );
};