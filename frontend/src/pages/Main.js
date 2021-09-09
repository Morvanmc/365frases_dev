import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import { MaterialIcons, Foundation } from '@expo/vector-icons';

import SwiperBackgrounds from '../components/SwiperBackgrounds';
import { MonthNames } from '../utils/Datas';
import api from '../services/api';

function Main({ navigation }) {
    const [currentDate, setCurrentDate] = useState('');
    const [showContent, setShowContent] = useState([]);
    const [newBackground, setNewBackground] = useState()

    useEffect(() => {
        //Date Title
        function getCurrentDate() {
            try {
                const date = new Date();
                const tilteDate = `${MonthNames[date.getMonth()]} ${date.getDate()}`

                setCurrentDate(tilteDate);
            } catch (err) {
                console.log(err);
            }
        }

        getCurrentDate();
    }, []);

    useEffect(() => {
        //First Phrase
        async function loadPhrase() {
            try {
                const response = await api.get('/phrase');
                const currencyContent = [...response.data]
                const max = currencyContent.length;
                const randomIndex = getRandomIndex(0, max);

                function getRandomIndex(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                setShowContent({
                    content: currencyContent[randomIndex].content,
                    author: currencyContent[randomIndex].author
                });
            } catch (err) {
                console.log(err);
            }
        }

        loadPhrase();
    }, []);

    //Capture View and Share
    const viewRef = useRef();
    async function imageShare() {
        const uri = await captureRef(viewRef, {
            format: 'png',
            quality: 1
        });

        Sharing.shareAsync(uri)
    }

    //Load a new phrase
    async function newLoadPhrase() {
        try {
            const response = await api.get('/phrase');
            const currencyContent = [...response.data]
            const max = currencyContent.length;
            const randomIndex = await getRandomIndex(0, max);

            function getRandomIndex(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            setShowContent({
                content: currencyContent[randomIndex].content,
                author: currencyContent[randomIndex].author
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.dateArea}>
                <Text style={styles.texto}>{currentDate}</Text>
            </View>

            <View ref={viewRef} style={styles.phraseArea}>
                <ImageBackground source={newBackground} style={styles.phraseArea}>
                    <Text style={styles.phrase}>{showContent.content}</Text>
                    <Text style={styles.author}>- {showContent.author} -</Text>
                </ImageBackground>
            </View>

            <View style={styles.backgroundArea}>
                <SwiperBackgrounds changeBackground={newBackground => setNewBackground(newBackground)} />
            </View>

            <TouchableOpacity 
                style={styles.shareArea}
                onPress={imageShare}
            >
                <MaterialIcons name="share" size={30} color="#000" />
            </TouchableOpacity>

            <View style={styles.buttonArea}>
                <TouchableOpacity 
                    style={styles.buttonItem}
                    onPress={newLoadPhrase}
                >
                    <MaterialIcons name="sync" size={30} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonItem}
                onPress={() => {
                    navigation.navigate('NewPhrase')
                }}>
                    <Foundation name="comment-quotes" size={30} color="black" />
                </TouchableOpacity>
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
        marginBottom: 20,
    },

    texto: {
        height: 50,
        width: 200,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: "#6B705C",
    },

    phraseArea: {
        width: 350,
        height: 280,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    phrase: {
        fontSize: 22,
        textAlign: 'center',
        color: '#000',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#FFF',
        textShadowRadius: 1,
    },

    author: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
        marginTop: 25,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#FFF',
        textShadowRadius: 1,
    },

    backgroundArea: {
        marginTop: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#6B705C",
    },

    shareArea: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D3D3D3',
        backgroundColor: '#FFF',
        marginTop: 50,
        borderWidth: 1,
        width: 70,
        height: 50,
    },

    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },

    buttonItem: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D3D3D3',
        backgroundColor: '#FFF',
        borderWidth: 1,
        width: 130,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
    },
});

export default Main;