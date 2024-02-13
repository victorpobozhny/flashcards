import { useAppDispatch, useAppSelector } from '../../../app/store'
import { selectDecks } from '../decks-selectors'
import { useEffect } from 'react'
import { fetchDesksTC } from '../decks-thunks'


export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDesksTC())
  }, [dispatch])
  return { dispatch, decks }
}