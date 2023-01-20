import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SizeStock } from '../types/productInterface'

const ProductForm = () => {
    const [category, setCategory] = useState<string>()
    const [productWithSizeTable, setproductWithSizeTable] = useState<SizeStock[]>([{ size: '', quantity: 0 }])


    /* Function */
    const addSize = () => {
        const sizeTable = [...productWithSizeTable];
        sizeTable.push({ size: '', quantity: 0 });
        setproductWithSizeTable(sizeTable);
    }

    const handleChangeSizeNamee = (index: number, size: string) => {
        const sizeTable = [...productWithSizeTable];
        sizeTable[index].size = size
        setproductWithSizeTable(sizeTable);
    }
    const handleChangeSizeQuantity = (index: number, quantity: number) => {
        const sizeTable = [...productWithSizeTable];
        sizeTable[index].quantity = quantity
        setproductWithSizeTable(sizeTable);
    }

    console.log(productWithSizeTable);


    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Entrer le nom du produit"
            />
            <TextInput
                style={styles.input}
                placeholder="Entrer le prix d'achat"
                keyboardType='numeric'
            />
            {/* Choix des catégories */}
            <Picker
                selectedValue={category}
                onValueChange={(value) => { setCategory(value); console.log(value) }}
                style={{ height: 70, width: 300, borderWidth: 2 }}
            >
                <Picker.Item label="- Sélectionner une catégorie de produit -" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="Vetement" value="vetement" />
                <Picker.Item label="TypeScript" value="ts" />
            </Picker>
            {category === 'vetement' &&
                productWithSizeTable.map((size, index) => (
                    <View style={styles.container} key={index}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TextInput
                                style={styles.input}
                                placeholder='Entrer la taille ex: T 2'
                                value={productWithSizeTable[index].size}
                                onChange={(e)=>console.log(e)
                                }
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Entrer la quantité'
                                keyboardType='number-pad'
                                value={productWithSizeTable[index].quantity.toString()}
                            />
                            <Button color='red' title='Supp' />
                        </View>

                    </View>))}
            <Button
                onPress={() => addSize()}
                title='Ajouter une taille' />
            <Button title='Envoyer' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        borderWidth: 1,
        margin: 10,
        padding: 5,
        width: 'auto',
        borderRadius: 7
    }
})

export default ProductForm