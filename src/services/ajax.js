import axios from 'axios'

export function Ajax(url, params, method = 'post') {
  const apiVersion = 'v1'
  const errorFn = err => {
    console.error(err)
    return err
  }

  if (!/^(https?|\/)/i.test(url)) {
    url = `/${apiVersion}/${url}`
  }

  return axios({
    url,
    data: params,
    method
  })
    .then(res => res, errorFn)
    .catch(errorFn)
}
