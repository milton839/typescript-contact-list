import React from "react";

interface IProps {
  name: string;
  email?: string;
  contactRemove: (email: string) => void;
}

const Contact = ({ name, email = "N/A", contactRemove }: IProps) => {
  // const { name, email } = props;
  return (
    <div
      style={{
        backgroundColor: "#ddd",
        width: "500px",
        margin: "0 auto",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <button onClick={() => contactRemove(email)} className="btn btn-danger">
        Remove
      </button>
    </div>
  );
};

export default Contact;
