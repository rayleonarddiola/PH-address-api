
import { NextResponse } from 'next/server'
 //import users from './data.json';
 import provinces from '../../json/data.json';
export async function GET() {
  return NextResponse.json(provinces)
}
