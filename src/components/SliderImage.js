import { createComponent as cc } from 'react-fela'

const SliderImage = cc(({ index, backgroundImage }) => ({
  position: 'absolute',
  left: `${index * 350}px`,
  height: '300px',
  width: '300px',
  float: 'left',
  backgroundSize: 'cover',
  border: '1px solid gray',
  borderRadius: '3px',
  backgroundImage: `url(${backgroundImage})`,
  transition: 'left ease-in .5s'
}))

export default SliderImage
