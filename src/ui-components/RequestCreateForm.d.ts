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
export declare type RequestCreateFormInputValues = {
    date?: string;
    quantity?: number;
};
export declare type RequestCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestCreateFormOverridesProps = {
    RequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestCreateFormInputValues) => RequestCreateFormInputValues;
    onSuccess?: (fields: RequestCreateFormInputValues) => void;
    onError?: (fields: RequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestCreateFormInputValues) => RequestCreateFormInputValues;
    onValidate?: RequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestCreateForm(props: RequestCreateFormProps): React.ReactElement;
