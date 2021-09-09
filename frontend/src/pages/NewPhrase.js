import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


function NewPhrase({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
                    keybo
                />
            </View>

            <View>
                <Text style={styles.titleAuthor}>Autor:</Text>
                <TextInput
                    style={styles.inputAuthor}
                    autoCorrect
                    maxLength={20}
                />
            </View>

            <View style={styles.radioBtnArea}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{ marginRight: 5 }}>Concordo com os</Text>
                <TouchableOpacity>
                    <Text style={styles.highlight}>TERMOS DE USO</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonArea}>
                <TouchableOpacity 
                    style={styles.buttonItemSave}
                    onPress={() => {}}
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
        </View>
    )
};

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFAF8',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleArea: {
        flexDirection: 'row',
        marginBottom: 20,
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

    inputPhrase: {
        width: 350,
        height: 250,
        backgroundColor: '#FFF',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        fontSize: 22,
    },

    titleAuthor: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginBottom: 10,
    },

    inputAuthor: {
        width: 350,
        height: 50,
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