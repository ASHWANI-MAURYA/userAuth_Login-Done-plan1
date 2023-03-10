import React, { Component } from 'react'  
import {  
    View,StyleSheet,AppRegistry  
} from 'react-native'  
import {WebView} from 'react-native-webview'  
  
export default class ActivityIndicatorDemo extends Component {  
    render() {  
        return (  
            <View style = {styles.container}>  
                {/*<WebView 
                    source={{html: '<h1>Hello javaTpoint</h1>'}} 
                />*/}  
             {/*   <WebView 
                    source={require("./resources/index.html")} 
                />*/}  
                <WebView  
                    source = {{ uri:'https://www.irctc.co.in/nget/train-search' }}  
                />  
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  
  
AppRegistry.registerComponent('App', () => ActivityIndicatorDemo)  