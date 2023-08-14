
//import data from '../../json/data.json';
export async function getStaticPaths() {

const res = await fetch('http://localhost:3000/api/users',{ next: { revalidate: 10 } });
  const data = await res.json();
  const paths = data.users.map((user) => 
  	({ params: { id: user.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
export async function getUser (params) {

 const id = params.id;
  const res = await fetch('http://localhost:3000/api/users/'+ id,{ next: { revalidate: 10 } })
  const user = await res.json()
 
  return user
}
 
export default async function Details({ params }) {
  const data = await getUser(params)
 console.log(data);
  return (
  	<>
  	<div>
  	<ul>
  	
  	<li>Name: {data.user.name}</li>
    <li>Username: {data.user.username}</li>
    <li>Email: {data.user.email}</li>
  	
  	</ul>
  	</div>
  	</>)
}