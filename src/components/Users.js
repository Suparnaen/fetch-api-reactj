import React from 'react'

const Users = ({ user }) => {
    return (
        <div className="users">
            <h3>Name: {user.name}</h3><hr />
            <h3>User: {user.username}</h3><hr />
            <h3>Email: {user.email}</h3><hr />
        </div>
    )
}

export default Users;
