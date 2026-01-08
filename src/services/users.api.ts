import { User } from "../models/User";

export const fetchUsers = async (searchTerm: string = ""): Promise<User[]> => {
  const res = await fetch("https://dummyjson.com/users?limit=1000");
  const data = await res.json();

  let usersArray: User[] = data.users;

  if (searchTerm) {
    usersArray = usersArray.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return usersArray;
};