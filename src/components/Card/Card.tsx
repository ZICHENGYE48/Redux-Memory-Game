import cover from '../../assets/cover.png'
import CardImage from './components/CardImage'
import './styles.scss'

interface CardProps {
  card: Card
  handleCardClick: (card:Card) => void
  disabled: boolean
  flipped: boolean
}

const Card = ({
  card,
  handleCardClick,
  disabled,
  flipped
}:CardProps) => {
  const handleClick = ()=>{
    if(!disabled) {
      handleCardClick(card)
    }
  }
  
  return (
    <div className="card">
      <div className={flipped ? 'flipped' :'' }>
        <CardImage className="front" src={card.src} alt="Card Front"/>
        <CardImage onClick={handleClick} className="back" src={cover} alt="Card Front"/>
      </div>
    </div>
  )
}

export default Card