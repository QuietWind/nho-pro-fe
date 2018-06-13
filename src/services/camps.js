import { Ajax } from './ajax'

export function GetCamps() {
  return Ajax('trainer', undefined, 'get')
}

export function GetCampDetail(trainerClamId) {
  return Ajax('trainer/' + trainerClamId, undefined, 'get')
}
