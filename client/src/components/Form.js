import React, { useEffect, useState } from 'react'
import { CREATE_USER_MUTATION } from '../Graphql/Mutations';
import { useMutation } from '@apollo/client';

const Form = () => {

    const [ form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        // console.log(form);
    }, [form]);

    const [ createUser, { error } ] = useMutation(CREATE_USER_MUTATION);

    const adduser = (e) => {
        e.preventDefault();
        createUser({
            variables: {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                password: form.password
            }
        });

        if(error) {
            console.log(error);
        }
    }

    return (
        <div>
            
            <form onSubmit={adduser} >
                <input type="text"
                    value={form.firstName} 
                    placeholder="First Name:" 
                    onChange={e => setForm({...form, firstName: e.target.value})} 
                />

                <input type="text" 
                    value={form.lastName} 
                    placeholder="Last Name:"
                    onChange={e => setForm({...form, lastName: e.target.value})} 
                />

                <input type="text" 
                    value={form.email} 
                    placeholder="Email:" 
                    onChange={e => setForm({...form, email: e.target.value})} 
                />

                <input type="text" 
                    value={form.password} 
                    placeholder="Password:" 
                    onChange={e => setForm({...form, password: e.target.value})} 
                />

                <button type="submit" > Add User </button>
            </form>

        </div>
    )
}

export default Form;
