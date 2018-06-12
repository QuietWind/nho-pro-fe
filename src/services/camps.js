import { Ajax } from './ajax'

export function GetCamps() {
  return Ajax('trainer', undefined, 'get')
}
