import './style.css'

interface Props {
  children: React.ReactNode
}

const MenuButton = ({children}: Props) => {
  return (
    <div className='MenuButton'> 
      {children}
    </div>
  )
}

export default MenuButton
