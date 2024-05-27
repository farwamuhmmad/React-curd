import React, { useState } from "react";
import { addUser } from "../UserReducer"; // Adjust the path if necessary
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1]?.id + 1 || 1, name, email }));
    navigate('/');
  };

  return (
    <div className="flex d w-100 vh-100 justify-content-center align-items-center">
      <div className="p-5 text-white border w-50 bg-secondary">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3>Add New User</h3>
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
