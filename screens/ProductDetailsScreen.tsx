import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { getOne } from '../classes/Administrator'
import ProductDetail from '../components/ProductDetail'
import { Product } from '../src/models'
import { Navigation } from '../types/navigation'
import { ProductInterface } from '../types/productInterface'

const ProductDetails = ({ route }: Navigation) => {
    const [product, setProduct] = useState<ProductInterface>();
    useEffect(() => {
        async function getProduct() {
            const productFetch = await getOne(Product, route.params.id);
            const productMap = productFetch.map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    orderId: product.orderId,
                    price: product.price,
                    updatedAt: product.updatedAt,
                    details: product.details
                }
            })
            setProduct(productMap[0]);
        }
        getProduct();
    }, [])

    return (
        <View>
            <ProductDetail product={product} />
        </View>
    )
}

export default ProductDetails