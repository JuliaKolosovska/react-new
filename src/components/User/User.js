import React from 'react';
import scc from ' './
const User = (user) => {
    const {id, name, surname, email, adress, phone, website, company}= user;
    return (
        <div>
            <div>id:{id}</div>surname
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>email:{email}</div>
            <div>adress:{adress}</div>
            <div>phone:{phone}</div>
            <div>website:{website}</div>
            <div>company:{company}</div>
        </div>
    );
};

export default User;