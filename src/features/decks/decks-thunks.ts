import { AppDispatch } from '../../app/store'
import { decksAPI } from './decks-api'
import { createDeckAC, setDecksAC } from './decks-reducer'

export const fetchDesksTC = () => (dispatch: AppDispatch) => {
  decksAPI.fetchDecks()
    .then(res => dispatch(setDecksAC(res.data.items)))
}

export const addNewDeckTC = (name: string) => async (dispatch: AppDispatch) => {
  return decksAPI.addDeck({name})
    .then(res => dispatch(createDeckAC(res.data)))
}