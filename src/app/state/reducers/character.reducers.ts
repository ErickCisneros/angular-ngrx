import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/models/character';
import { CharacterState } from 'src/app/models/character-state';
import { loadCharacters, loadedCharacters } from '../actions/character.actions';

export const initialState: CharacterState = { loading: false, characters: [] }

export const characterReducer = createReducer(
    initialState,
    on(loadCharacters, (state) => {
        return { ...state, loading: true}
    }),
    on(loadedCharacters, (state, { characters }) => {
        return { ...state, loading: false, characters }
    })
)