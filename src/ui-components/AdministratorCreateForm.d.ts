/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdministratorCreateFormInputValues = {
    username?: string;
    Enterprise?: string;
    user_auth_id?: string;
};
export declare type AdministratorCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    Enterprise?: ValidationFunction<string>;
    user_auth_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdministratorCreateFormOverridesProps = {
    AdministratorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    Enterprise?: PrimitiveOverrideProps<TextFieldProps>;
    user_auth_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdministratorCreateFormProps = React.PropsWithChildren<{
    overrides?: AdministratorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdministratorCreateFormInputValues) => AdministratorCreateFormInputValues;
    onSuccess?: (fields: AdministratorCreateFormInputValues) => void;
    onError?: (fields: AdministratorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdministratorCreateFormInputValues) => AdministratorCreateFormInputValues;
    onValidate?: AdministratorCreateFormValidationValues;
} & React.CSSProperties>;
export default function AdministratorCreateForm(props: AdministratorCreateFormProps): React.ReactElement;
