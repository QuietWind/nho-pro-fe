import { Ajax } from './ajax'

export function GetCamps() {
  return Ajax('trainer', undefined, 'get')
}

export function GetCampDetail(params) {
  return Ajax('trainer', params, 'get')
}
