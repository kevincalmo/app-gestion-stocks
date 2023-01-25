/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Administrator } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AdministratorUpdateForm(props) {
  const {
    id: idProp,
    administrator,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    Enterprise: "",
    user_auth_id: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [Enterprise, setEnterprise] = React.useState(initialValues.Enterprise);
  const [user_auth_id, setUser_auth_id] = React.useState(
    initialValues.user_auth_id
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = administratorRecord
      ? { ...initialValues, ...administratorRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setEnterprise(cleanValues.Enterprise);
    setUser_auth_id(cleanValues.user_auth_id);
    setErrors({});
  };
  const [administratorRecord, setAdministratorRecord] =
    React.useState(administrator);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Administrator, idProp)
        : administrator;
      setAdministratorRecord(record);
    };
    queryData();
  }, [idProp, administrator]);
  React.useEffect(resetStateValues, [administratorRecord]);
  const validations = {
    username: [],
    Enterprise: [],
    user_auth_id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          Enterprise,
          user_auth_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Administrator.copyOf(administratorRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AdministratorUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              Enterprise,
              user_auth_id,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Enterprise"
        isRequired={false}
        isReadOnly={false}
        value={Enterprise}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              Enterprise: value,
              user_auth_id,
            };
            const result = onChange(modelFields);
            value = result?.Enterprise ?? value;
          }
          if (errors.Enterprise?.hasError) {
            runValidationTasks("Enterprise", value);
          }
          setEnterprise(value);
        }}
        onBlur={() => runValidationTasks("Enterprise", Enterprise)}
        errorMessage={errors.Enterprise?.errorMessage}
        hasError={errors.Enterprise?.hasError}
        {...getOverrideProps(overrides, "Enterprise")}
      ></TextField>
      <TextField
        label="User auth id"
        isRequired={false}
        isReadOnly={false}
        value={user_auth_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              Enterprise,
              user_auth_id: value,
            };
            const result = onChange(modelFields);
            value = result?.user_auth_id ?? value;
          }
          if (errors.user_auth_id?.hasError) {
            runValidationTasks("user_auth_id", value);
          }
          setUser_auth_id(value);
        }}
        onBlur={() => runValidationTasks("user_auth_id", user_auth_id)}
        errorMessage={errors.user_auth_id?.errorMessage}
        hasError={errors.user_auth_id?.hasError}
        {...getOverrideProps(overrides, "user_auth_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || administrator)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || administrator) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
