import { List, RowComponentProps } from "react-window";
import UserItem from "./UserItem";
import { User } from "../models/User";

interface Props {
  users: User[];
}

function Users({ users }: Props) {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <List
        rowCount={users.length}
        rowHeight={50}
        rowComponent={({ index, style }: RowComponentProps<{}>) => (
          <UserItem user={users[index]} style={style} />
        )}
        rowProps={{}}
      />
    </div>
  );
}

export default Users;
