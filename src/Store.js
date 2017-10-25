import { extendObservable } from 'mobx'
import { getPhotos } from './api/Unsplash'
import { CONFIG } from './constants/Config'


class Store {
  constructor () {
    extendObservable(this, {
      images: [],
      nextPageIndex: 0,
      currentImageOffset: 0,
      photosPerPage: 10,
      autoplayCountdown: CONFIG.AUTOPLAY_DELAY, 
    })
    
    setInterval(() => this.autoplay(), 1000);
  }

  autoplay() {
    if(this.autoplayCountdown === 0) {
      this.checkForLoadMore()
      this.currentImageOffset--
    } else {
      this.autoplayCountdown--
    }
  }
  
  async loadPhotos () {
    const photos = await getPhotos(this.nextPageIndex + 1)
    this.images.push(...photos)
    this.nextPageIndex++
  }

  incrementIndex () {    
    this.currentImageOffset++
    this.resetAutoplay()
  }

  decrementIndex () {    
    this.checkForLoadMore()
    this.currentImageOffset--
    this.resetAutoplay()
  }

  checkForLoadMore() {
    if(this.nextPageIndex*this.photosPerPage + this.currentImageOffset < this.photosPerPage) {
      this.loadPhotos();
    }
  }

  resetAutoplay() {
    this.autoplayCountdown = CONFIG.AUTOPLAY_DELAY;
  }
}

export default Store
