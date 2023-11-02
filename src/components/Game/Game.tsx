import { cardText } from '../../constants'
import useGame from '../../hooks/useGame'
import Card from '../Card'
import './styles.scss'

const { title, btnText, winMessage } = cardText

const Game = () => {
  const { shuffleCards, cards, handleCardClick, choiceOne, choiceTwo, disabled, winner } = useGame()
  return (
    <div className="game">
      <h1>{title}</h1>
      <button onClick={shuffleCards}>{btnText}</button>
      {
        winner && <p className="result">{winMessage}</p>
      }
      <div className="cardBoard">
        {
          cards.length &&
          cards.map((card:Card)=> (
            <div key={card.id}>
              <Card
                card={card} 
                handleCardClick={handleCardClick} 
                disabled={disabled}
                flipped={card === choiceOne || card === choiceTwo || card.matched}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Game