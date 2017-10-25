import { extendObservable } from 'mobx'
import { getPhotos } from './api/Unsplash'

class Store {
  constructor () {
    extendObservable(this, {
      images: [],
      currentImageIndex: 0
    })
  }
  
  async loadPhotos () {
    const photos = await getPhotos()
    console.log(photos)
  }

  next () {
    console.log(this)
    this.currentImageIndex++
  }

  previous () {
    this.currentImageIndex--
  }
}

export default Store
