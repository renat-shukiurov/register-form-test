import React from 'react';
import {useSelector} from "react-redux";
import {TableWrapper} from "./Table.style";

const Table = () => {
    const {users} = useSelector((state) => state.user);

    const omit = (key, obj) => {
        const { [key]: omitted, ...rest } = obj;
        return rest;
    }
    return (
        users.length > 0 &&
        <TableWrapper>
            <thead>
                <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>Sex</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user, i) => <tr key={user.name+i+user.email}>
                    {Object.keys(omit('policy', user)).map((key, i) =><td key={key + i}>{user[key]}</td>)}
                </tr>)
            }
            </tbody>
        </TableWrapper>
    );
};

export default Table;