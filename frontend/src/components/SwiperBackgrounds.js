import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { ImgData } from '../utils/ImgData'

function SwiperBackgrounds() {
    return (
        <FlatList
            data={ImgData}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            renderItem={({ item }) => {
                return <View style={styles.imgArea}>
                    <Image source={item} style={styles.imgItem} />
                </View>
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