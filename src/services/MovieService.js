import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://jsonmock.hackerrank.com/api/movies',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  }
})

export default {
  getMovies(){
    return apiClient.get('/')
  },
  searchTitle(name , page){
    return apiClient.get(`/search/?Title=${name}&page=${page}`)
  },
  getPaginated(page){
    return apiClient.get(`/?page=${page}`)
  }
}
