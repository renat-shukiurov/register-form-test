import React from 'react';
import {useSelector} from "react-redux";

const Table = () => {
    const {users} = useSelector((state) => state.user);

    return (
        <div>
            {users.length
                ?
                users.map((user, i) => <p key={user.name+i+user.email}>{user.address}</p>)
                :
                ''}
        </div>
    );
};

export default Table;