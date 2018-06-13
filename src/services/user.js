import { Ajax } from './ajax'

/**
 *
 * @param {*} params
 *
 * {
  "email": "string",
  "password": "string"
}
 *
 * @returns
 * {
  "data": {
    "email": "string",
    "id": number,
    "password": "string"
  },
  "message": "string",
  "status": "string"
}
 */
export function Register(params) {
  return Ajax('user/register', params)
}

/**
 *
 * @param {*} params
 *
 * {
  "email": "string",
  "password": "string"
}
 *
 * @returns
 * {
  "data": {
    "email": "string",
    "id": number,
    "password": "string"
  },
  "message": "string",
  "status": "string"
}
 */
export function Login(params) {
  return Ajax('user/login', params)
}

/**
 {
  "data": {
    "email": "string",
    "id": 0,
    "password": "string"
  },
  "message": "string",
  "status": "OK"
}
 */
export function Logout() {
  return Ajax('user/logout')
}
