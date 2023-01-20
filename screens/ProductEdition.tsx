import React from 'react'
import { Text, View } from 'react-native'
import ProductForm from '../components/ProductForm';
import { Navigation } from '../types/navigation'

const ProductEdition = ({route}:Navigation) => {
    const status = route.params.status;
    
    return (
        <View>
            <Text>Hello Product edition - {status}</Text>

            <ProductForm />
        </View>
    )
}

export default ProductEdition