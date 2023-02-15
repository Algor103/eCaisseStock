import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientService } from '../../service/client.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../model/client';
import {  FormControl, ReactiveFormsModule }
from '@angular/forms';

/*
Dans ce code, nous utilisons un formulaire FormGroup qui permet de contrôler les données entrées dans le formulaire. Nous utilisons également le FormBuilder de Angular pour construire notre formulaire et les validateurs de formulaire pour vérifier les entrées de l'utilisateur.

Nous avons également défini la méthode onSubmit qui appelle la méthode createClient du service CrudApiService pour ajouter un nouveau client en utilisant les valeurs du formulaire.


*/
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  submitted = false;
  

  constructor(public crudApi: ClientService, public fb: FormBuilder, public toastr: ToastrService) { }

  ngOnInit() {
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()};


  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      libelle: ['', [Validators.required, Validators.minLength(2)]],
      adresse: ['', [Validators.required, Validators.minLength(5)]],
      tel: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      fax: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      login: ['', [Validators.required, Validators.minLength(5)]],
      pwd: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  // on efface le formulaire
  ResetForm() {
    this.crudApi.dataForm.reset();
  }
  onSubmit() {
    if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    }
    else {
      this.updateData();
    }
  }

  addData() {
    this.crudApi.createData(this.crudApi.dataForm.value).subscribe(data => {
      this.toastr.success(' Validation faite avec success');
      this.ResetForm();
    });
  }

  updateData() {
    this.crudApi.updateData(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).subscribe(data => {
      this.toastr.success('Modification faite avec success');
      this.ResetForm();
    });
  }

}
