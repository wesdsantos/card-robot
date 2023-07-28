import React from "react";

export const Boots = ({ user }) => {
  return (
    <div className="robo">
      <div className="cartao">
        <div>
          <img
            src={`https://robohash.org/${user.id}`}
            alt="user-pic"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
        <p>{user.phone}</p>
      </div>
    </div>
  );
};
export default Boots