import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJwt } from "./utils/verifyJwt";

export async function middleware(request: NextRequest) {
  // var accessToken = request.cookies.get('accessToken')?.value
  var refreshToken = request.cookies.get('refreshToken')?.value
  const response = NextResponse.next()

  let verify = await verifyJwt(refreshToken)


  // if (!verify) {
  //   return  NextResponse.redirect('http://localhost:3000')
  // }

  if (verify) {
      // const getData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${2}`,{
      //   method:"GET",
      //   headers:{
      //       'Authorization': 'Bearer ' + refreshToken,
      //   }
      // })

      // const result = await getData.json()

      // if (result.jwt) {
      //   response.cookies.set('role', result.type)
      //   return response
      // } else {
      //   response.cookies.delete('accessToken')
      //   response.cookies.delete('refreshToken')
      //   return response
      // }
    }

}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/tentang-femmy'],
};
