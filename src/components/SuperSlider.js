import React, { Component } from 'react'
import { createComponent as cc } from 'react-fela'
import { observer } from 'mobx-react'

const NavigationButton = cc(
  _ => ({
    color: 'white',
    border: '3px solid white',
    borderRadius: '12px',
    textAlign: 'center',
    padding: '10px 30px',
    fontSize: '26px',
    fontWeight: '900',
    outline: 'none',
    cursor: 'pointer',
    background:
      'linear-gradient(to bottom, rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(43,43,43,1) 76%,rgba(17,17,17,1) 90%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%)',
    ':hover': {
      border: '3px solid gray'
    }
  }),
  'button',
  ['onClick']
)

const ContentWrapper = cc(
  _ => ({
    textAlign: 'center',    
  })
)

const SliderWrapper = cc(
  _ => ({
    padding: '50px 0',
    height: '200px',    
  })
)

const Image = cc(
  ({index}) => ({
    position: 'absolute',
    left: `${index*250}px`,
    height: '200px',
    width: '200px',
    float: 'left',
    transition: 'left .3s'
  }),
  'img',
  ['src']
)

class SuperSlider extends Component {
  constructor(props) {
    super(props);
    const { store } = this.props
    store.loadPhotos()
  }

  render () {
    const { store } = this.props

    return (
      <ContentWrapper>
        <NavigationButton onClick={() => store.incrementIndex()}>
          {' '}
          Previous{' '}
        </NavigationButton>
        <SliderWrapper>
        {
          store.images.map((image, index) => {
            return (<Image key={index} index={index + store.currentImageOffset} src={image.urls.regular}/>)
          })
        }
        </SliderWrapper>
        {store.nextPageIndex}
        <NavigationButton onClick={() => store.decrementIndex()}>
          {' '}
          Next{' '}
        </NavigationButton>
      </ContentWrapper>
    )
  }
}

export default observer(SuperSlider)
