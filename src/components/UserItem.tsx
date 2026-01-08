import React from "react";
import { User } from "../models/User";

interface Props {
  user: User;
  style?: React.CSSProperties;
}

function UserItem({ user, style }: Props) {
  return (
    <div
      style={{
        ...style,
        padding: "10px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{user.firstName + " " + user.lastName}</span>
      <span>{user.email}</span>
    </div>
  );
}

export default React.memo(UserItem);
