import { Dispatch } from 'redux'
import { setAppError } from '../../app/app-reducer'
import axios from 'axios'


type ErrorType = {
  'errorMessages': [
    {
      'field': string,
      'message': string
    }
  ]
}

export const handleError = (dispatch: Dispatch, e) => {
  let errorMessage: string
  if (axios.isAxiosError<ErrorType>(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = e.message
  }
  dispatch(setAppError(errorMessage))
}