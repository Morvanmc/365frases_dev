import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import SwiperBackgrounds from '../components/SwiperBackgrounds';
import GeneralButton from '../components/GeneralButton';

function Main() {
const [ currentDate, setCurrentDate ] = useState([]);

useEffect(() => {
    function getCurrentDate() {
        const date = new Date();
        const month = date.getMonth();
        const monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
                            'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const day = date.getDay();

        setCurrentDate(`${monthName[month]} ${day}`);
    }

    getCurrentDate();
}, []);

    return (
        <View style={styles.container}>
            <View style={styles.dateArea}>
                <Text style={styles.texto}>{currentDate}</Text>
            </View>

            <View style={styles.phraseArea}>
                <Text style={styles.phrase}>“ Seu beijo de despidida foi como um cigarro que fumei pela metade.
                    Meio que me matou ”</Text>
                <Text style={styles.author}>- Morvan Marques -</Text>
            </View>

            <View style={styles.backgroundArea}>
                <SwiperBackgrounds />
            </View>

            <View>
                <MaterialIcons name="share" size={40} color="#000" />
            </View>

            <View style={styles.btnArea}>
                <GeneralButton
                    backgroundColor="#004643"
                    onPress={() => {}}
                    title="+ 2" />
                <GeneralButton
                    backgroundColor="#D1AC00"
                    onPress={() => {}}
                    title="CRIE A SUA" />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFAF8',
        justifyContent: 'center',
        alignItems: 'center',
    },

    dateArea: {
        flexDirection: 'row',
        marginBottom: 35,
    },

    texto: {
        height: 50,
        width: 200,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0C1618',
        textAlign: 'center',

    },

    phraseArea: {
        width: 320,
        height: 240,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    phrase: {
        fontSize: 18,
        textAlign: 'center',
        color: '#0C1618',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },

    author: {
        fontSize: 14,
        textAlign: 'center',
        color: '#0C1618',
        marginTop: 25,
    },

    backgroundArea: {
        marginTop: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 30,
    },

    btnArea: {
        flexDirection: 'row',
    },
});

export default Main;