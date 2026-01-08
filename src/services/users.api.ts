import { User } from "../models/user";

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: User[] = await response.json();
  console.log('users', data)
  return data;
}