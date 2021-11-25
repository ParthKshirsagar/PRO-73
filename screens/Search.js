import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Search extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Search</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});