import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatus } from '../../app/app-reducer'
import axios from 'axios'


type ErrorType = {
  'errorMessages': [
    {
      'field': string,
      'message': string
    }
  ]
}

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    dispatch(setAppStatus('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.addDeck(name)
    dispatch(addDeckAC(res.data))
  } catch (e) {
    if (axios.isAxiosError<ErrorType>(e)) {
      if (!!e.response) {
        console.log('error1: ', e.response.data.errorMessages[0].message)
      }
    }
  }
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (e) {
    let errorMessage: string

    if (axios.isAxiosError<ErrorType>(e)) {
      errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
    } else {
      errorMessage = e.message
    }
    console.log(errorMessage)
  }
}
