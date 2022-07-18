import React from 'react';
import ErrorField from "./ErrorField";
import {Field} from "./Ui.style";
import {useFormContext} from "react-hook-form";

const Select = ({title, name, params, options, ...rest}) => {

    const { register, formState: { errors } } = useFormContext();


    return (
        <Field>
            {title && <p>{title}</p>}
            <select
                {...register(name, params)}
                {...rest}
            >
                {options.map(item => (
                    <option key={item.key} value={item.key}>
                        {item.value}
                    </option>
                ))}
            </select>
            <ErrorField text={errors[name]?.message}/>
        </Field>

    );
};

export default Select;