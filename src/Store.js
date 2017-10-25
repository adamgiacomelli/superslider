import { extendObservable } from 'mobx'
import { getPhotos } from './api/Unsplash'

class Store {
  constructor () {
    extendObservable(this, {
      images: [],
      nextPageIndex: 0,
      currentImageOffset: 0,
      photosPerPage: 10
    })
  }
  
  async loadPhotos () {
    const photos = await getPhotos(this.nextPageIndex + 1)
    console.log(photos)
    this.images.push(...photos)
    this.nextPageIndex++
  }

  incrementIndex () {    
    this.currentImageOffset++
  }

  decrementIndex () {    
    if(this.nextPageIndex*this.photosPerPage + this.currentImageOffset < this.photosPerPage) {
      this.loadPhotos();
    }
    this.currentImageOffset--
  }
}

export default Store
