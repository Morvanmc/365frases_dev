import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native';
//import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ImgData } from '../utils/ImgData'


const imageW = 100;
const imageH = 100;

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
                <FlatList
                    data={ImgData}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    renderItem={({ item }) => {
                        return <View style={styles.imgArea}>
                            <Image source={item} style={styles.imgItem} />
                        </View>
                    }}
                />
            </View>
            <View style={styles.btnArea}>
                <Button 
                    style={styles.btnPhrase}
                    onPress={() => {}}
                    title="+ 2"/>
                <Button 
                    style={styles.btnNewPhrase}
                    onPress={() => {}}
                    title="CRIE A SUA FRASE"/>
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    imgArea: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    imgItem: {
        width: imageW,
        height: imageH,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },

    btnArea: {
        flexDirection: 'row',
    },

    btnPhrase: {
        width: 130,
        height: 50,
    },
});

export default Main;