import { extendObservable } from 'mobx'

class Store {
  constructor () {
    extendObservable(this, {
      images: []
    })
  }
}

export default Store
