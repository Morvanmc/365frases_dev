import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

function GeneralButton(props) {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
                style={
                    {backgroundColor: props.backgroundColor,
                    height: 50, width: 130,
                    justifyContent: 'center',
                    borderRadius: 5,}
                }
            >
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = new StyleSheet.create({
    btnContainer: {
        justifyContent: 'center',
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },

});

export default GeneralButton;