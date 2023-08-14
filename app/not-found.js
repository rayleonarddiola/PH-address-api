'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Notfound = () => {

const router = useRouter();
useEffect(() => {
setTimeout( () =>{
 router.push('/detail');
}, 3000)
}, [])


  return(
    <div>
    <h1>404 Not Found!</h1>
      <h2><Link href="/">Return to Homepage</Link></h2>
    </div>
    )
}
export default Notfound;