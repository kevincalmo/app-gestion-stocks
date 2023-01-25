import { Center, Wrap } from '@chakra-ui/react';
import React from 'react'
import Card from '../Card';

interface ProductProps {
    products: any
}

const ProductsPage: React.FunctionComponent<ProductProps> = ({ products }) => {


    return (
        <Center>
            <Wrap>
                {products.map((product: [], index: number) => (
                    <Card product={product} />
                ))}
            </Wrap>
        </Center>
    )
}

export default ProductsPage