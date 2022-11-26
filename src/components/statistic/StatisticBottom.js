import React from 'react'
import { Image } from 'react-bootstrap'
import KursDiagram from '../../assets/svg/kursDiagram.svg'
import Map from '../../assets/svg/map.svg'

export default function StatisticBottom() {
  return (
      <div className='statistic-bottom-row'>
          <div className='statistic-bottom-col'>
              <Image src={Map} alt="map-diagram"/>
          </div>
          <div>
              <h3>Статистика</h3>
              <p>Куплено курсів:</p>
              <Image src={ KursDiagram} alt="kurs-diagram"/>
          </div>
    </div>
  )
}
