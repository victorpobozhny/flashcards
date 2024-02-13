import s from './AddNewPostForm.module.css'
import { useForm } from 'react-hook-form'
import { useFetchDecks } from '../DecksList/useFetchDecks'
import { addNewDeckTC } from '../decks-thunks'

type FormValues = {
  name: string
}

export const AddNewDeckForm = () => {

  const dispatch = useFetchDecks().dispatch
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    dispatch(addNewDeckTC(data.name))
      .then(()=>{reset()})
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Deck name
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be longer than or equal to 3 characters',
            },
          })}
          autoComplete='off'
        />
        <p className={s.errorMessage}>{errors.name && errors.name.message}</p>
      </label>
      <button type='submit'>Add new deck</button>
    </form>
  )
}
