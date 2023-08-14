// Get Id
import { NextResponse } from 'next/server'
import data from '../../../json/data.json';


export async function GET(request,{params}) {
  const id = params.id;
  const user = data.users.find(user=>user.id==id);

  return NextResponse.json({user})
}