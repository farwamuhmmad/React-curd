
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CurdHome() {
  const users = useSelector((state) => state.user);
  console.log(users)
  return (
    <div className='container'>
      <Link to="/create" className="btn btn-primary">Create</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className='btn btn-sm btn-primary'>Edit</button>
                <button className='btn btn-sm btn-danger ms-2'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurdHome;
