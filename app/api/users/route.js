
import { NextResponse } from 'next/server'
 //import users from './data.json';
 import users from '../../json/data.json';
export async function GET() {

 
  return NextResponse.json(users)
}
