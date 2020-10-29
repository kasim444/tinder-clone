import {useState} from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css';

export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Tony Stark',
      imgUrl: 'https://dailysuperheroes.com/wp-content/uploads/2020/02/tony-stark.jpg'
    },
    {
      name: 'Steve Rogers',
      imgUrl: 'https://22dakika.org/wp-content/uploads/2018/09/chris-evans-wannart-1-900x580.jpg'
    },
    {
      name: `t'challa`,
      imgUrl: 'https://pbs.twimg.com/profile_images/969383178279538688/io6WpxVE_400x400.jpg'
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log({direction, nameToDelete});
  };


  const outOfFrame = (name) => {
    console.log(`${name} left screen! `);
  };

  return (
    <section className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {
          people.map(person => (
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
