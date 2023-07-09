import { Pessoa } from './pessoa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private readonly api = `${environment.api}/pessoa`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pessoa[]>(`${this.api}`).pipe(
      take(1),
      tap(console.log)
    );
  }
}
