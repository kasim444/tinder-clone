import TinderCard from 'react-tinder-card'
import './TinderCards.css';
import {useGetUsers} from '../../hooks';
import errorImage from '../../assets/images/error.svg';
import {TinderCardLoader} from '../../components';


export default function TinderCards() {
  const { user, error, isLoading } = useGetUsers();

  const swiped = (direction, nameToDelete) => {
    console.log({direction, nameToDelete});
  };


  const outOfFrame = (name) => {
    console.log(`${name} left screen! `);
  };

  if(error) {
    return (
    <div className='error'>
     <img src={errorImage} alt='Error' />
     </div>
    )
  }


  if(isLoading) {
    return (
        <TinderCardLoader />
    )
  }

  return (
    <section className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {
          user.map(person => (
            <TinderCard
              key={person.name}
              className='swipe'
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div className='card' style={{backgroundImage: `url(${person.imgUrl})`}}>
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
            ))
        }

      </div>
    </section>
  )
}
