import React from 'react';
import {AddressWrapper, Autocomplete, AutocompleteItem} from "./Ui.style";
import Input from "./Input";
import {debounce} from "../../utils";
import {clearAddress, getAddress} from "../../redux/actions/AddressActions";
import {useDispatch, useSelector} from "react-redux";
import {useFormContext} from "react-hook-form";

const Address = () => {
    const { setValue } = useFormContext();

    const {data, loading} = useSelector(state => state.address);
    const dispatch = useDispatch();

    const handleAddressChange = e => {
        const value = e.target.value;

        if (value.length) {
            const params = {q: value, at: '50.330479,30.290205'};
            dispatch(getAddress(params));
        }
        else{
            dispatch(clearAddress());
        }
    }

    const selectAddress = (address) => {
        setValue('address', address);
        dispatch(clearAddress());
    }

    return (
        <AddressWrapper>
            <Input
                title="Address"
                name="address"
                type="text"
                params={{required: "The field is required"}}
                onChange={debounce(handleAddressChange, 2000)}
            />

            {data.length
            ?
                <Autocomplete>
                    {loading ? <div>Loading</div> : ''}
                    {data.map((item) => <AutocompleteItem onClick={() => selectAddress(item.title)} key={item.id}>{item.title}</AutocompleteItem>)}
                </Autocomplete>
            : ''}

        </AddressWrapper>
    );
};

export default Address;