import { Character } from "./character";

export interface CharacterState {
    loading: boolean
    characters: ReadonlyArray<Character>
}
