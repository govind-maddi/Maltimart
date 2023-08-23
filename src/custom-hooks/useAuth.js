import React, { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

export const useAuth = () => {
    /* console.log("useauth called") */

    const [currentuser,setCurrentUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if(user)
                setCurrentUser(user);
            else
                setCurrentUser(null);
        });
    });

    return(
        {currentuser}
    );
}