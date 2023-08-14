//import data from '../json/data.json';

import Link from 'next/link'

export async function getUsers() {
  const res = await fetch('http://localhost:3000/api/users',{ next: { revalidate: 5 } })
  const users = await res.json()
 
 return users
}
 
export default async function Index() {
  const data = await getUsers();


console.log(data);
  return data.users.map((user) => 
    
    <Link href={'detail/'+ user.id} key = {user.id}>
      <h2> {user.name} </h2>
  </Link>
    )
  
}