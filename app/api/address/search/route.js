// Get Id
import { NextResponse } from 'next/server'
import data from '../../../json/data.json';


export async function GET(request) {

  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const filteredCourses = data.municipalities.filter((course) => {
    return course.name.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}
