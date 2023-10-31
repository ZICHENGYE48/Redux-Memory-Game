import { cardImages } from "../constants";

import { useCallback, useEffect, useState } from "react";

export default function useGame () {
  const [cards, setCards] = useState<Card[]>([])
  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [winner, setWinner] = useState<boolean>(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
  }

  const handleCardClick = useCallback(
    (card:Card)=> {
      choiceOne ? setChoiceTwo((card)) : setChoiceOne(card)
    },[choiceOne]
  )

  const resetTurn = useCallback(()=> {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  },[])

  useEffect(()=> {
    if(choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src) {
        setCards((prevCards)=> 
          prevCards.map((card)=> card.src === choiceOne.src ? {...card,matched: true } : card)
        )
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  },[choiceOne, choiceTwo])

  useEffect(() =>{
    shuffleCards()
  }, [])

  useEffect(() =>{
    if(cards.every(({matched})=> matched === true)) setWinner(true)
    else setWinner(false)
  }, [cards])

  return {
    shuffleCards,
    cards,
    handleCardClick,
    choiceOne,
    choiceTwo,
    disabled,
    winner
  }
}