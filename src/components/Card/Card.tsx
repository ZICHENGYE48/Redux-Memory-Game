import { useCallback } from 'react'
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
  const handleClick = useCallback(()=>{
    if(!disabled) {
      handleCardClick(card)
    }
  },[handleCardClick,card,disabled])
  
  return (
    <div className="card">
      <div className={flipped ? 'flipped' :'' }>
        <img className="front" src={card.src} alt="Card Front"/>
        <img className="back" onClick={handleClick} src="/images/cover.png" alt="Card Back"/>
      </div>
    </div>
  )
}

export default Card