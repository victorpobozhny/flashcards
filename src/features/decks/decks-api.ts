import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponseType, AxiosResponse<FetchDecksResponseType>>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<Deck, AxiosResponse<Deck>>('/v1/decks', params)
  }
}

type AddDeckParams = {
  name: string
}

type Author = {
  id: string
  name: string
}
export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: Date
  updated: Date
  cardsCount: number
}
type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
type FetchDecksResponseType = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}