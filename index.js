import React, { useState } from 'react';
import { Table, Button } from '@nextui-org/react';
import { deleteUser } from '../../service/api';
import Link from 'next/link';

function AllUsers({ users }) {

    const [user, setUser] = useState(users);

    const deleteData = async (id) => {
        await deleteUser(id);
        window.location.reload(false);
    }

    return (
        <>
            <div className='container'>
                <Link href="/user/AddUser" className="btn btn-success">New User</Link>
                <br />
                <Table className="table table-striped table-responsive">
                    <Table.Header>
                        <Table.Column>ID</Table.Column>
                        <Table.Column>Name</Table.Column>
                        <Table.Column>UserName</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Phone</Table.Column>
                        <Table.Column></Table.Column>
                    </Table.Header>
                    <Table.Body items={user} >
                        {user.map((item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell className="overflow-auto">
                                    {item.id}
                                </Table.Cell>
                                <Table.Cell className="overflow-auto">
                                    {item.name}
                                </Table.Cell>
                                <Table.Cell className="overflow-auto">
                                    {item.username}
                                </Table.Cell>
                                <Table.Cell className="overflow-auto">
                                    {item.email}
                                </Table.Cell>
                                <Table.Cell className="overflow-auto">
                                    {item.phone}
                                </Table.Cell>
                                <Table.Cell className="overflow-auto">
                                    <Button className="btn btn-danger" onClick={() => deleteData(item.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default AllUsers;

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/user');

    const data = await response.json();

    return {
        props: {
            users: data
        },
        revalidate: 30
    }
}