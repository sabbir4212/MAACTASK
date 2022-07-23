import React, { useEffect, useState } from 'react';

const useUser = (user) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        setUsers(user)
        console.log(user)
    },[user])
    return [users]
};

export default useUser;