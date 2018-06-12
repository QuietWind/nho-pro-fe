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
  return Ajax('/api/user/register', params)
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
  return Ajax('/api/user/login', params)
}
