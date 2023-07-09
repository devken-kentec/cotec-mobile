import { PessoaService } from './shared/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  pessoaForm = this.fb.group({
    id:[''],
    nome: ['',[ Validators.required]],
    profissao: [''],
  });

  constructor(private fb: FormBuilder, private pessoaService: PessoaService) { }

  ngOnInit() {

  }

  salvar(){
    if(this.pessoaForm.valid){
      this.pessoaService.save(this.pessoaForm.value).subscribe((res: any)=>{
        console.log('Gravado com Sucess!');
      });
    }
  }

}
