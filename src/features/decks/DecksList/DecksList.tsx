import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDecks } from './useFetchDecks'

export const DecksList = () => {
  const { decks } = useFetchDecks()

  return (<ul className={s.list}>
    {decks.map(el => {
      return <DeckItem key={el.id} deck={el} />
    })}
  </ul>)
}
