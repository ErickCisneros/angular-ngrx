import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Injectable()
export class CharacterEffects {

    loadCharacters$ = createEffect( () => this.actions$.pipe(
        ofType('[Characters List] Load Characters'),
        mergeMap(() => this.characterService.getCharacters().pipe(
            map(character => ({ type: '[Characters List] Loaded success', characters: character})),
            catchError( () => EMPTY)
        ))
    ))

    constructor(
        private actions$: Actions,
        private characterService: CharacterService
    ) {}
}