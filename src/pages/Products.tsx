
import { DataStore } from 'aws-amplify';
import React from 'react'
import { useQuery } from 'react-query';
import Layout from '../components/Layout/Layout'
import ProductsPage from '../components/Pages/ProductsPage'
import { Product } from '../models';

interface ProductData {
    name: string;
}

const Products = () => {
    const { isLoading, isError, data, error, status } = useQuery('products', async () => {
        return await DataStore.query(Product);
    })

    if (status === 'loading') {
        return <span>Loading...</span>
    }

    /* if (status === 'error') {
        return <span>Error: {error.message}</span>
    } */
    return (
        <>
            {data && <Layout>
                <ProductsPage products={data} />
            </Layout>}
        </>

    )
}

export default Products