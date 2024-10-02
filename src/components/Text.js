import {useSelector} from 'react-redux'

function Text() {
  const text = useSelector((state) => state.app.item)
  return (
    <div className='text-box'>
       {text}
    </div>
  )
}

export default Text