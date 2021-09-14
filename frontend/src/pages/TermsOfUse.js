import React from "react";
import { StyleSheet, View, Text } from 'react-native';

function TermsOfUse() {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Termos de Uso</Text>
            </View>

            <View style={styles.termsArea}>
                <Text style={styles.terms}>
                    1- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={styles.terms}>
                    2- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={styles.terms}>
                    3- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={styles.terms}>
                    4- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={styles.terms}>
                    5- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={styles.terms}>
                    6- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>
        </View>
    )
};

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FBFAF8',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    titleArea: {
        marginBottom: 20,
        marginTop: 70,
    },

    title: {
        height: 50,
        width: 300,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: "#6B705C",
    },

    termsArea: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    terms: {
        fontSize: 22,
        textAlign: 'center',
        color: '#000',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },
})

export default TermsOfUse;