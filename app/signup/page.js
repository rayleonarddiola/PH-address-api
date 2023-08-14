
import Link from 'next/link'


export async function getUsers() {
  const res = await fetch('http://localhost:3000/api/address',{ next: { revalidate: 5 } })
 
 const countries = await res.json()
 
 return countries
}
 
export default async function SignUp() {
  const data = await getUsers();
  

  const changeSelectOptionHandler = (event) =>{
    setSelected(event.target.value);
  }
 
console.log(data);
  return (
      <>
      <div>
      		<label>Province:</label>
      		<select onChange = {null}>
      		{data.provinces.sort((a,b)=>a.name.localeCompare(b.name)).map((province)=>
      			{
      				return <option key = {province.id} value={province.name}>{province.name}</option>
      			})}
      		</select>
      </div>
            <div>
      		<label>Municipality:</label>
      		<select>
      		{data.municipalities.sort((a,b)=>a.name.localeCompare(b.name)).map((city)=>
      			{
      				return <option key = {city.id} value={city.name}>{city.name}</option>
      			})}
      		</select>
      </div>
      </>
  	);
  
}

