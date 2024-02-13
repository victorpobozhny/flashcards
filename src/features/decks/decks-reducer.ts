import { Deck } from './decks-api'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS':
      return { ...state, decks: action.payload.decks }
    case 'DECKS/CREATE-DECK':
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof createDeckAC>
export const createDeckAC = (deck: Deck) => {
  return {
    type: 'DECKS/CREATE-DECK',
    payload: {
      deck,
    },
  } as const
}
export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET-DECKS',
    payload: {
      decks,
    },
  } as const
}
