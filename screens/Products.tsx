import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { getAll } from '../classes/Administrator';
import ProductsCard from '../components/ProductsCard';
import { Product } from '../src/models';
import { ProductInterface } from '../types/productInterface';

const Products = ({ navigation }: NativeStackHeaderProps) => {
    const [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        async function getProduct() {
            const productsFetch = await getAll(Product)
            const productsMap = productsFetch.map((product, index) => {
                return {
                    id: product.id,
                    name: product.name,
                    orderId: product.orderId,
                    price: product.price,
                    updatedAt: product.updatedAt,
                    details: product.details
                }
            })
            console.log(productsMap);
            setProducts(productsMap)
        }
        getProduct();
    }, [])
    console.log(products);

    if (products.length === 0) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <ActivityIndicator size="large" />
            </View>
        )
    } else {
        return (
            <View>
                <FlatList
                    data={products as Array<ProductInterface>}
                    keyExtractor={product => product.id}
                    renderItem={
                        ({ item }) => (
                            <Pressable onPress={() => {
                                navigation.navigate('product-detail', { id: item.id })
                            }}>
                                <ProductsCard item={item} />
                            </Pressable>

                        )
                    }
                />
                <View style={{
                    width: 40,
                    borderRadius: 60,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                }}>
                    <Button
                        title='+'
                        onPress={() => navigation.navigate('product-edition', { status: 'new-product' })}
                    />
                </View>

            </View>
        )
    }
}

export default Products