import React from 'react';
import ErrorField from "./ErrorField";
import {Field} from "./Ui.style";
import {useFormContext} from "react-hook-form";

const Input = ({title, name, params, content, ...rest}) => {

    const { register, formState: { errors } } = useFormContext();

    console.log(errors);
    return (
        <Field>
            <label>{title && <p>{title}</p>}
            <input
                className={`form-item ${errors[name] ? 'invalid' : ''}`}
                {...register(name, params)}
                {...rest}
            />
                {content && <span>{content}</span>}
            <ErrorField text={errors[name]?.message}/>
            </label>
        </Field>
    );
};

export default Input;