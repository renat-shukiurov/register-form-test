import React from 'react';
import {AddressWrapper, Autocomplete, AutocompleteItem} from "./Ui.style";
import Input from "./Input";
import {debounce} from "../../utils";
import {clearAddress, getAddress} from "../../redux/actions/AddressActions";
import {useDispatch, useSelector} from "react-redux";
import {useFormContext} from "react-hook-form";
import {useLocation} from "../hooks/useLocation";

const Address = () => {
    const location = useLocation();

    const { setValue } = useFormContext();
    const {data, loading} = useSelector(state => state.address);
    const dispatch = useDispatch();


    const handleAddressChange = e => {
        const value = e.target.value;

        if (value.length) {
            const params = {q: value, at: `${location.latitude},${location.longitude}`};
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
                placeholder="New York"
                params={{
                    required: "The field is required",
                    onChange: debounce(handleAddressChange, 1000)
                    }
                }
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