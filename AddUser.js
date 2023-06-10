import React, { useState } from 'react';
import { addUser } from '../../service/api';
import { useRouter } from 'next/router'

function UserForm() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        var userObj = {
            "id": id,
            "name": name,
            "username": username,
            "email": email,
            "phone": phone
        }
        addUser(userObj);

        setId('');
        setName('');
        setUserName('');
        setEmail('');
        setPhone('');

        router.push('/user');
    };

    return (
        <>
            <h2>Add New User</h2>
            <br/><br/>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id" className="mb-2 italic">Id</label>
                        <br />
                        <input
                            type="number"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="id"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="mb-2 italic">Name</label>
                        <br />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username" className="mb-2 italic">UserName</label>
                        <br />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="mb-2 italic">Email</label>
                        <br />
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="mb-2 italic">phone</label>
                        <br />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="phone"
                        />
                    </div>

                    <br />
                    <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default UserForm;