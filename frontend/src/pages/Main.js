import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.dateArea}>
                <Text style={styles.texto}>AGOSTO 25</Text>
            </View>
            
            <View style={styles.phraseArea}>
                <Text style={styles.phrase}>“ Seu beijo de despidida foi como um cigarro que fumei pela metade. 
                    Meio que me matou ”</Text>
                <Text style={styles.author}>- Morvan Marques -</Text>
            </View>
            
            <View style={styles.backgroundArea}>
                <MaterialIcons name="navigate-before" size={40} color="#000" />
                <Image source={require('../img/backgrounds/noBG.png')}
                    style={styles.bgItem} />
                <Image source={require('../img/backgrounds/bgOne.png')} 
                    style={styles.bgItem} />
                <Image source={require('../img/backgrounds/bgTwo.png')}
                    style={styles.bgItem} />
                <MaterialIcons name="navigate-next" size={40} color="#000" />
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
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    bgItem: {
        width: 70,
        height: 70,
        borderColor: '#000',
        borderWidth: 1,
    }
});

export default Main;