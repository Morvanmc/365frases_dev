import React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { ImgData } from '../utils/Datas'

function SwiperBackgrounds(props) {

    return (
        <FlatList
            data={ImgData}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            renderItem={({ item }) => {
                return (
                <TouchableOpacity style={styles.imgArea}
                    onPress={() => props.changeBackground(item)}
                >
                    <Image source={ item } style={styles.imgItem} />
                </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = new StyleSheet.create({
    imgArea: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },

    imgItem: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default SwiperBackgrounds;