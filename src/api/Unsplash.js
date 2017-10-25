import { API } from '../constants/Api'

export const getPhotos = async _ => {
  const data = await window.fetch(`${API.URL}photos?client_id=${API.CLIENT_ID}`)
  return data.json()
}
