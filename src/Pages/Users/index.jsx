import React, { useEffect, useState } from 'react';
import { getUsers } from '../../API'; // Adjust the import path accordingly

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
      console.log("Robin"+users)
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
