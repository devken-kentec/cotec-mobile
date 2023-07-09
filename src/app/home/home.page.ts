import { Pessoa } from './shared/pessoa';
import { HomeServiceService } from './shared/home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.listarPessoa();
  }

  listarPessoa(){
    this.homeService.listar().subscribe(
      res => this.pessoas = res
    );
  }
}
