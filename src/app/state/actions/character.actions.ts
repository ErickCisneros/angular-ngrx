import { createAction, props } from '@ngrx/store';
import { Character } from '../../models/character';

export const loadCharacters = createAction(
    '[Characters List] Load Characters',
)

export const loadedCharacters = createAction(
    '[Characters List] Loaded success',
    props<{characters: Character[]}>()
)