// Get Id
import { NextResponse } from 'next/server'
import data from '../../../json/data.json';


export async function GET(request,{params}) {
  const id = params.id;
  const city = data.municipalities.find(city=>city.fid==id);
  console.log(city);
  return NextResponse.json({city})
}