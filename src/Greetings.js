import React from 'react';
import Guestuser from './Guestuser';
import Usergreet from './Usergreet';


const Greetings = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return(isLoggedIn?<Usergreet name = 'Mohanraj'/>:<Guestuser/>)
}

export default Greetings;