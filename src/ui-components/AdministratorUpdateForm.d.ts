/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Administrator } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdministratorUpdateFormInputValues = {
    username?: string;
    Enterprise?: string;
    user_auth_id?: string;
};
export declare type AdministratorUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    Enterprise?: ValidationFunction<string>;
    user_auth_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdministratorUpdateFormOverridesProps = {
    AdministratorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    Enterprise?: PrimitiveOverrideProps<TextFieldProps>;
    user_auth_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdministratorUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdministratorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    administrator?: Administrator;
    onSubmit?: (fields: AdministratorUpdateFormInputValues) => AdministratorUpdateFormInputValues;
    onSuccess?: (fields: AdministratorUpdateFormInputValues) => void;
    onError?: (fields: AdministratorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdministratorUpdateFormInputValues) => AdministratorUpdateFormInputValues;
    onValidate?: AdministratorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdministratorUpdateForm(props: AdministratorUpdateFormProps): React.ReactElement;
