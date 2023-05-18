import React, { useState } from "react";

export default function App() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [inputValues, setInputValues] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(inputValues)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fullname = inputValues.fname+" "+inputValues.lname;
    setFullname(fullname);

    const email = inputValues.email;
    setEmail(email);
  }

  return (
    <div>
      <div className="react-form">
        <div className="title">
          <h1>Hello {fullname}</h1>
          <h3>{email}</h3>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="input-container">
            <input placeholder="input Firstname.." className="input-form" type="text" name="fname" onChange={handleChange} required />
          </div>
          <div className="input-container">
            <input placeholder="input Lastname.." className="input-form" type="text" name="lname" onChange={handleChange} required />
          </div>
          <div className="input-container">
            <input placeholder="input Email.." className="input-form" type="email" name="email" onChange={handleChange} required />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
