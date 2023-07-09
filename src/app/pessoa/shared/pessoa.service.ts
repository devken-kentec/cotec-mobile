
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly api = `${environment.api}/pessoa`;

  constructor(private http: HttpClient) { }

  save(pessoa: Pessoa){
    return this.http.post(`${this.api}`, pessoa).pipe(
      take(1)
    );
  }
}
