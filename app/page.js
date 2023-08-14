"use client";
import {useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'


export async function getProvinces() {
  const res = await fetch('https://ph-address-api.vercel.app/api/address',{ next: { revalidate: 5 } })
 
 const provinces = await res.json()
 
 return provinces
}

export default function Home() {
 const [data, setdata] = useState("");
  const [selected, setSelect] = useState("");
    const [selected2, setSelect2] = useState("");


  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('https://ph-address-api.vercel.app/api/address',{ next: { revalidate: 5 } });
      const result = await res.json();
      setdata(result);
    
    };

    fetchCourses();
 
  }, []);

   const changeSelectOptionHandler = (event) =>{ setSelect(event.target.value); }
   const changeSelectOptionHandler2 = (event) =>{ setSelect2(event.target.value); }
   

let type = null;
let type2 = null;
let municipalities = null;
let barangays = null;
const city =selected;
const barangay =selected2;

 if (city === selected){
  type = city;
 }
 if (barangay === selected2){
  type2 = barangay;
 }

 if (type) {

  municipalities =  data.municipalities?.filter(a=>a.fid===type).sort((a,b)=>a.name.localeCompare(b.name)).map((el)=>
            {
              return <option key = {el.id} value={el.name}>{el.name}</option>
            })

  console.log(selected);
 }

 if (type2) {

  barangays =  data.barangays?.filter(a=>a.fid===selected2).sort((a,b)=>a.name.localeCompare(b.name)).map((el)=>
            {
              return <option key = {el.id} value={el.name}>{el.name}</option>
            })
  //console.log(barangays);
  console.log(selected2);
 }
  return (
      <>
      <div>
          <label>Province:</label>
          <select onChange = {changeSelectOptionHandler}>
          <option>--Select Province--</option>
          {data.provinces?.sort((a,b)=>a.name.localeCompare(b.name)).map((el)=>
            {

              return <option key = {el.id} value={el.name}>{el.name}</option>
            })}
          </select>
      </div>
      <div>
          <label>Municipality:</label>
        
        <select onChange = {changeSelectOptionHandler2}>
           <option>--Select Municipality--</option>
        {municipalities}

        </select>
      </div>

       <div>
          <label>Barangay:</label>
        
        <select>
         <option>--Select Barangay--</option>
        {barangays}


        </select>
      </div>
      </>
    );

    



}
