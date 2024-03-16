import { YMaps, Map, SearchControl, RoutePanel } from '@pbe/react-yandex-maps';
import './style.css'
import { useState } from 'react';
import Menu from '../../components/Menu';
const YandexMap = () => {
  const [place] = useState("");

  return(
    <>
      <YMaps query={{ apikey: "0fd7a82c-7aaa-48c4-a574-ef4c184cb892" }} >
        <div className='YandexMap'>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width={"100vw"} height={"100vh"} >
            <SearchControl options={{ float: "left" }} instanceRef={(ref:any) => ref && ref.search(place)} />
            <RoutePanel options={{ float: "right" }} />
          </Map>
        </div>
      </YMaps>
      <Menu/>
    </>

  )
}

export default YandexMap