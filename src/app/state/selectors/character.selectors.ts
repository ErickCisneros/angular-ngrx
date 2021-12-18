import { createSelector } from '@ngrx/store';
import { CharacterState } from 'src/app/models/character-state';
import { AppState } from '../app.state';

export const selectCharacterFeature = (state: AppState) => state.characters

export const selectListCharacters = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.characters
)

export const selectListCharactersLoading = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.loading
)