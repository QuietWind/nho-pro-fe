import axios from 'axios'

export function Ajax(url, params, method = 'post') {
  const errorFn = err => {
    console.error(err)
    return err
  }

  return axios({
    url,
    data: params,
    method
  })
    .then(res => res, errorFn)
    .catch(errorFn)
}
