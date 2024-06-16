'use client';

import { useState, useEffect } from 'react';
import { getUsers, addUser, deleteUser } from './actions/userActions';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers();
      setUsers(users);
    }
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const newUser = await addUser(name, email);
      setUsers([...users, newUser]);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
