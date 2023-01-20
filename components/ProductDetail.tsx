import React from 'react'
import { Text } from 'react-native'
import { ProductInterface } from '../types/productInterface'
import formatDate from '../utils/formatDate'

const ProductDetail = ({ product }: { product: ProductInterface|undefined }) => {
    return (
        <>
            <Text>Nom du produit : {product?.name}</Text>
            <Text>Categorie: {product?.details.category}</Text>
            <Text>Prix d'achat: {product?.price}</Text>
            <Text>Date de dernière mise à jour:{formatDate(product?.updatedAt)}</Text>
        </>
    )
}

export default ProductDetail