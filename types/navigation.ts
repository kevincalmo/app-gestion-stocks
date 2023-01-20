import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type DetailParams = {
    route: {
        params: {
            id?: string;
            status?:string;
        }
    }
}

export type Navigation = NativeStackHeaderProps & DetailParams;