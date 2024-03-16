import './style.css'
import Avatar from '../../components/Avatar';
import LangButton from '../../components/LangButton';

const LangChoise = () => {
  const LangsFlags = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png",
      text: "Русский"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/640px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
      text: "English"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png",
      text: "Chinese"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png",
      text: "Deutsch"
    },
  ]
  return (
    <div className='LangChoise'>
      <Avatar/>
      <div >
        <div className='choiseLang'>
          {LangsFlags.map((lang, index) => <LangButton key={index} text={lang.text} images={lang.image}/>)}
        </div>
      </div>
      <div>
          Выберите язык
          <br />
          Choise a language
        </div>
    </div>
  )
}

export default LangChoise
