import { API } from '../constants/Api'

export const getPhotos = async (page) => {
  const data = await window.fetch(`${API.URL}photos?client_id=${API.CLIENT_ID}&page=${page}`)
  return data.json()
}
