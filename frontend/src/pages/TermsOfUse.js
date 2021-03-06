import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

function TermsOfUse() {
    let [fontsLoaded] = useFonts({
        BerkshireSwash_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Termos de Uso</Text>
                </View>

                <View style={styles.termsArea}>
                    <Text style={styles.terms}>
                        Declaro que estou ciente de que:</Text>
                    <Text style={styles.terms}>
                        1- TERMOS GERAIS</Text>
                </View>
            </View>
        )
    }
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
        paddingVertical: 6,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#000',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: "#6B705C",
    },

    termsArea: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },

    terms: {
        fontSize: 20,
        textAlign: 'justify',
        color: '#000',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },
})

export default TermsOfUse;