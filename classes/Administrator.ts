import { DataStore } from "aws-amplify";
import { Administrator } from "../src/models";

export const getAllAdmins = async () => {
    const admins = await DataStore.query(Administrator);
    return admins;

}

export async function getAll(model: any) {
    return await DataStore.query(model);
}

export async function getOne(model: any, id: any) {
    const products = await DataStore.query(model);
    const product = products.filter(product => product.id === id);
    return product;
}