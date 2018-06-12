import { Ajax } from './ajax'
/** 
 *
 * @returns
 * {
  "data": {
    "clams": [
      {
        "id": "string",
        "inNum": 0,
        "name": "string",
        "startDate": "string",
        "summary": "string"
      }
    ]
  },
  "message": "string",
  "status": "string"
}
 */
export function GetCamps() {
    return Ajax('/api/trainer', undefined, 'get')
  }