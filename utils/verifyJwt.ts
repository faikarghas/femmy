// import {verify} from "jsonwebtoken";
import { setCookie } from "../utils/cookie";

import * as jose from 'jose'

export const verifyJwt = async (token:any) => {
    if (token) {
        const secret = new TextEncoder().encode(
            'owl@@7yfshjkfemmy',
          )
          try {
            const { payload, protectedHeader } = await jose.jwtVerify(token, secret)
            return payload
          } catch (error) {
            return false
          }
    } else {
        return false;
    }

}