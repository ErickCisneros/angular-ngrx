import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import { loadCharacters, loadedCharacters } from '../state/actions/character.actions';
import { AppState } from '../state/app.state';
import { selectListCharacters, selectListCharactersLoading } from '../state/selectors/character.selectors';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()
  characters$: Observable<any> = new Observable()

  constructor(private store: Store<AppState>, private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectListCharactersLoading)

    this.store.dispatch(loadCharacters())

    // this.characterService.getCharacters().subscribe((res: Character[]) => {
    //   this.store.dispatch(loadedCharacters({ item: res }))
    // })

    this.characters$ = this.store.select(selectListCharacters)
  }

}
