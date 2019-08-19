import axios from 'axios'

const logRequests = process.env.NODE_ENV === 'development'

let apiURL = `http://localhost:1337`

if (process.env.NODE_ENV === 'production') {
  apiURL = 'http://api.psihoprofmarina.ro'
}


const api = axios.create({
  baseURL: apiURL,
})


// api.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
// api.defaults.xsrfCookieName = 'csrftoken'

const getCookie = (name) => {
  const cookie = {}
  document.cookie.split(';').forEach((el) => {
    const [k, v] = el.split('=')
    cookie[k.trim()] = v
  })
  return cookie[name]
}

// const checkAuth = () => {
//   if (!api.defaults.headers.authorization && getCookie('authToken')) {
//     api.defaults.headers.authorization = `token ${getCookie('authToken')}`
//   }
// }

const fetch = (path, config = null) => {
  logRequests && console.log(`fetching ${path}...`)
//   checkAuth()
  return api.get(path, config)
}

const post = (path, data) => {
  logRequests && console.log(`posting ${path} with data ${data}...`)
//   checkAuth()
  return api.post(path, data)
}

const update = (path, data) => {
  logRequests && console.log(`patching ${path} with data ${data}...`)
//   checkAuth()
  return api.put(path, data)
}

const remove = (path) => {
  logRequests && console.log(`removig ${path} ...`)
//   checkAuth()
  return api.delete(path)
}

const getArticles = () => fetch('articles/')

const getSiteTitle = () => fetch('sitetitles/')

const getCurrentArticle = (id) => fetch(`articles/${id}`)

const getHeaderImage = () => fetch('headerimages/')

const createAppointment = (appointment) => post('/appointments', appointment)

export {
  getArticles,
  getSiteTitle,
  getCurrentArticle,
  apiURL,
  getHeaderImage,
  createAppointment
}