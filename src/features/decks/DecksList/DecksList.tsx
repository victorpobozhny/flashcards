import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import 'react-loading-skeleton/dist/skeleton.css'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton'

export const DecksList = () => {

  const { decks, isLoading } = useFetchDecks()

  return (
    <>

      <ul className={s.list}>
        {isLoading && decks.length === 0 && <DeckItemSkeleton count={10} style={{ color: 'darkGrey' }} />}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
    </>
  )
}
