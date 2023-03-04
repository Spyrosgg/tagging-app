import { Fireworks } from '@fireworks-js/react'
import { YouWon } from './Notification'

export default function FireworksComp({time, currentID}) {
  return (
    <div>
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: '#2e3440',
            opacity: 0.8
          }}
        />
        <YouWon time={time} currentID={currentID}/>
    </div>
  )
}
