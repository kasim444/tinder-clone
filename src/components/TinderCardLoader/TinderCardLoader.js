import Skeleton from 'react-loading-skeleton';
import './style.css'
export default function TinderCardLoader() {
  return (
    <div className='loader'>
      <Skeleton width={600} height={500}/>
    </div>
  )
}
