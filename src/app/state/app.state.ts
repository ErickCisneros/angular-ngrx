import { ActionReducerMap } from "@ngrx/store";
import { CharacterState } from "../models/character-state";
import { characterReducer } from "./reducers/character.reducers";

export interface AppState {
    characters: CharacterState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    characters: characterReducer
}