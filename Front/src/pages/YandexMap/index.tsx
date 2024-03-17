import { YMaps, Map, SearchControl, RoutePanel, GeolocationControl } from '@pbe/react-yandex-maps';
import './style.css'
import { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
const YandexMap = () => {
  const [place, setPlace] = useState("");

  // setTimeout(()=>setPlace("Питер"), 4000)

  useEffect(() => {
    setTimeout(()=>{
    const element = document.querySelector('.YandexMap') as HTMLElement;
    console.log(element)
    if(element)
      element.click()
  }, 0)
  }, [])

  return(
    <>
      <YMaps query={{ apikey: "0fd7a82c-7aaa-48c4-a574-ef4c184cb892" }} >
        <div className='YandexMap'>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width={"100vw"} height={"100vh"} >
            <SearchControl options={{ float: "left",  position: { top: 10, left: 40 } , provider: "yandex#search" }}  instanceRef={(ref:any) => ref && ref.search(place)} />
            <RoutePanel options={{ float: "right", position: { top: 150, left: 10 } }} />
            <div onClick={() => console.log("asdasd")}>
              <GeolocationControl  className='GeolocationControl' options={{ float: "left" }}
              ></GeolocationControl>
            </div>
          </Map>
        </div>
      </YMaps>
      <Menu/>
    </>
  )
}

export default YandexMap