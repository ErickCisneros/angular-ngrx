import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, pluck } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly URL_CHARACTER = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<any>(this.URL_CHARACTER).pipe(
      pluck('results'),
      delay(3000)
    )
  }
}
