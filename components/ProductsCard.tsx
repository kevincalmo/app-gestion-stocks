import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { ProductInterface } from '../types/productInterface'

const ProductsCard = ({ item }: { item: ProductInterface }) => {
    const image = 'https://picsum.photos/200/300'
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: image }}
            />
            <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>
                    Categorie: {item.details.category}
                </Text>
                <Text>Quantité disponible : 20</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: '5%',
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row'
    },
    content: {
        marginLeft:'5%'
    }
    ,
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ProductsCard