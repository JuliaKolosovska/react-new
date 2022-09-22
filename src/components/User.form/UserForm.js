import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";
import users from "../Users/Users";

const UserForm = ({setUsers}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        defaultValues: {
            name: 'name',
            surname: 'surname',
            email: 'email',
            phone: 'phone',
            website: 'website'
        }
    });
    const submit= (obj)=> {
        userService.createUser(obj).then(({data})=>setUsers(users=>[...users, data]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {require:{value: true}})}/>
                <input type="text" {...register('surname', {require:{value: true}})}/>
                <input type="text" {...register('email', {require:{value: true}})}/>
                <input type="text" {...register('phone', {require:{value: true}})}/>
                <input type="text" {...register('website', {require:{value: true}})}/>

                <button>Save</button>
            </form>
        </div>
    );
};

export default UserForm;