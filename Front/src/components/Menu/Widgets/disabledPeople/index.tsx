import './style.css'

const DisabledPeople = () => {
  const click = () => {
    const all: HTMLElement[] = Array.from(document.querySelectorAll('*')!)
    all.forEach(el => {
      el.style.backgroundColor = 'yellow'
      el.style.color = 'black'
      el.style.fontSize = '20px'
      el.style.fontWeight = '90000'
    });
  }
  return (
    <div className='disabledPeople'>
      <span>
        Повысить контрастность
      </span>
      <button onClick={click}>
        Да
      </button>
    </div>
  )
}

export default DisabledPeople
