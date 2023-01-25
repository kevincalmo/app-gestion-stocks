/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Request } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestUpdateFormInputValues = {
    date?: string;
    quantity?: number;
};
export declare type RequestUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestUpdateFormOverridesProps = {
    RequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    request?: Request;
    onSubmit?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onSuccess?: (fields: RequestUpdateFormInputValues) => void;
    onError?: (fields: RequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onValidate?: RequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestUpdateForm(props: RequestUpdateFormProps): React.ReactElement;
