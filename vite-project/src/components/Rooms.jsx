import React, { useContext } from 'react'

// context 
import { RoomContext } from '../context/RoomContext'

//components
import Room from '../components/Room';


const Rooms = () => {
  const { rooms } = useContext(RoomContext)
  return (
    <section className='py-24'>
      <div className='container mx-auto lg: px-0'>
        {/* grid */}
        <div>
          {rooms.map((room) => {
            console.log(room);
            return <Room room={room} key={room.id}/>;
          })}
        </div>
      </div>
    </section>
  )
}

export default Rooms