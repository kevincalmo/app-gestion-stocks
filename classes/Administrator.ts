import { DataStore } from "aws-amplify";
import { Administrator } from "../src/models";

export const getAllAdmins = async () => {
    const admins = await DataStore.query(Administrator);
    return admins;

}