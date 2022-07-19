import React from 'react';
import {useForm, FormProvider} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/actions/UserActions";
import {FormHeader, WrapperForm} from "./Form.style";
import Address from "../ui/Address";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Select from "../ui/Select";

const Form = () => {
    const methods = useForm();

    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch(addUser(data));
        methods.reset();
    };

    return (
        <FormProvider {...methods}>
            <WrapperForm onSubmit={methods.handleSubmit(onSubmit)}>

                <FormHeader>
                    <h1>Register Form</h1>
                </FormHeader>

                <Input
                    title="Name"
                    name="name"
                    type="text"
                    placeholder="Bart"
                    params={{required: "The field is required"}}
                />

                <Input
                    title="Surname"
                    name="surname"
                    type="text"
                    placeholder="Simson"
                    params={{required: "The field is required"}}
                />

                <Input
                    title="Phone number"
                    name="phone"
                    type="text"
                    placeholder="12025550157"
                    params={{
                        required: "The field is required",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Only numbers'
                        },
                        onChange: (e) => {methods.setValue('phone', e.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1'))},
                        maxLength : {
                            value: 15,
                            message: 'Maximum length 15 digits'
                        },
                    }}
                />

                <Input
                    title="Email"
                    name="email"
                    type="text"
                    placeholder="example@gmail.com"
                    params={{
                        required: "The field is required",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid email'
                        },
                    }}
                />

                <Select
                    title="Sex"
                    name="sex"
                    options={[{key: "male", value: "Male"}, {key: "female", value: "Female"}]}
                    params={{required: "The field is required"}}
                />

                <Address />

                <Input
                    content="I Agree to Privacy Policy"
                    name="policy"
                    type="checkbox"
                    params={{required: "The field is required"}}

                />

                <Button/>
            </WrapperForm>

        </FormProvider>
    );
};

export default Form;