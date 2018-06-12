import { Ajax } from './ajax'

export function Register(params) {
  return Ajax('/api/register', params)
}

export function Login(params) {
  return Ajax('/api/login', params)
}
