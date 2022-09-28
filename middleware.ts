import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import axios from 'axios'

const FINGERPRINT_COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const response = NextResponse.next()
  // const getData = await fetch(`http://localhost:2611/auth/sales`,{
  //     method:"GET"
  //   })
  // const result = await getData.json()
  // if (result){
  //     response.cookies.set('yplrm', '1209389018391787',{
  //         httpOnly:true,
  //         maxAge: FINGERPRINT_COOKIE_MAX_AGE,
  //         secure: true
  //     })
  // }
  // const token = response.cookies.get('yplrm');
  // if (!token) return NextResponse.redirect(new URL('/login', request.url))
  // return response
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/about'],
};
