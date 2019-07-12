import originJSONP from 'jsonp'

export default function musicJssonp (url, data, opts) {
  // eslint-disable-next-line promise/param-names
  url += (url.indexOf('?') < 0 ? '?' : '$') + formateParam(data)

  // eslint-disable-next-line promise/param-names
  return new Promise((res, rej) => {
    originJSONP(url, opts, (err, data) => {
      if (!err) {
        res(data)
      } else {
        rej(err)
      }
    })
  })
}

function formateParam (data) {
  let queryStr = ''
  if (data !== undefined) {
    for (var k in data) {
      let value = data[k]
      queryStr += `&${k}=${encodeURIComponent(value)}`
    }
    console.log(queryStr)
    return queryStr ? queryStr.substring(1) : ''
    console.log(queryStr)
  }
}
