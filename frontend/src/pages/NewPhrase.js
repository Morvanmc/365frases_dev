import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { AdMobInterstitial } from "expo-ads-admob";
import AppLoading from 'expo-app-loading';
import { useFonts, BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { Truculenta_400Regular, Truculenta_500Medium } from '@expo-google-fonts/truculenta';

import api from '../services/api';
import BannerAd from './BannerAd';


function NewPhrase({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [newPhrase, setNewPhrase] = useState('');
    const [newAuthor, setNewAuthor] = useState('');

    let [fontsLoaded] = useFonts({
        BerkshireSwash_400Regular,
        Truculenta_400Regular,
        Truculenta_500Medium
    });

    // INTERSTITIAL AD
    const interstitialAdID = "ca-app-pub-2482722286056863/6270257353";
    async function showInterstitial() {
        AdMobInterstitial.setAdUnitID(interstitialAdID);
        AdMobInterstitial.requestAdAsync().then(() => {
            AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
        });
    }

    async function saveNewPhrase() {
        try {
            if (newPhrase !== '' && newAuthor !== '' && toggleCheckBox) {
                await api.post('/phrase', {
                    content: newPhrase,
                    author: newAuthor,
                    agreeTerms: toggleCheckBox,
                })
                setNewPhrase('');
                setNewAuthor('');
                setToggleCheckBox(false);

                alert('Agradecemos a sua colaboração!');
                await showInterstitial();
            } else alert('Para cadastrar uma frase é necessário preencher todos os campos e aceitar os termos!')
        } catch (err) {
            console.error(err);
        }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Qual sua frase?</Text>
                </View>

                <View>
                    <TextInput
                        style={styles.inputPhrase}
                        multiline={true}
                        numberOfLines={4}
                        autoCorrect
                        placeholderTextColor='#D3D3D3'
                        placeholder='Digite sua frase...'
                        maxLength={250}
                        value={newPhrase}
                        onChangeText={setNewPhrase}
                    />
                </View>

                <View>
                    <Text style={styles.titleAuthor}>Autor:</Text>
                    <TextInput
                        style={styles.inputAuthor}
                        autoCorrect
                        maxLength={20}
                        value={newAuthor}
                        onChangeText={setNewAuthor}
                    />
                </View>

                <View style={styles.radioBtnArea}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={{ marginRight: 5 }}>Concordo com os</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('TermsOfUse')
                        }}>
                        <Text style={styles.highlight}>TERMOS DE USO</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.buttonItemSave}
                        onPress={saveNewPhrase}
                    >
                        <Text style={styles.btnText}>SALVAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonItemCancel}
                        onPress={() => {
                            navigation.navigate('Home')
                        }}>
                        <Text style={styles.btnText}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
                <BannerAd />
            </View>
        )
    }

};

const styles = new StyleSheet.create({
    container: {
        flex: 1,
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
        fontSize: 28,
        paddingVertical: 6,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#000',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: "#6B705C",
    },

    inputPhrase: {
        width: 350,
        height: 250,
        fontFamily: 'Truculenta_400Regular',
        backgroundColor: '#FFF',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        fontSize: 22,
    },

    titleAuthor: {
        fontSize: 22,
        fontFamily: 'Truculenta_500Medium',
        color: '#000',
        marginTop: 20,
        marginBottom: 10,
    },

    inputAuthor: {
        width: 350,
        height: 50,
        fontFamily: 'Truculenta_400Regular',
        backgroundColor: '#FFF',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        fontSize: 22,
    },

    radioBtnArea: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    radioBtn: {
        width: 25,
        height: 25,
        marginRight: 10,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 100
    },

    highlight: {
        fontWeight: 'bold',
        fontSize: 16,
        borderBottomWidth: 1,
    },

    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },

    buttonItemSave: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D3D3D3',
        backgroundColor: '#4285F4',
        borderWidth: 1,
        width: 130,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
    },

    buttonItemCancel: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D3D3D3',
        backgroundColor: '#EA4335',
        borderWidth: 1,
        width: 130,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
    },

    btnText: {
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default NewPhrase;