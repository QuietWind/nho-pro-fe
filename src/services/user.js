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
    "id": 0,
    "password": "string"
  },
  "message": "string",
  "status": "string"
}
 */
export function Register(params) {
  return Ajax('/api/register', params)
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
    "id": 0,
    "password": "string"
  },
  "message": "string",
  "status": "string"
}
 */
export function Login(params) {
  return Ajax('/api/login', params)
}
