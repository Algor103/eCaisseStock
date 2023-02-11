import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../model/client';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  constructor(public crudApi: ClientService ,public fb: FormBuilder, public toastr: ToastrService) { }

  ngOnInit() {
    if (this.crudApi.choixmenu == "A")
    this.infoForm();
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        
        libelle: ['', [Validators.required]],
        adresse: ['', [Validators.required]],
        tel: ['', [Validators.required, Validators.minLength(9)]],
        email: ['', [Validators.required, Validators.minLength(10)]],
        fax: ['', [Validators.required, Validators.minLength(9)]],
        login: ['', [Validators.required, Validators.minLength(8)]],
        pwd: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ResetForm() {
    this.crudApi.dataForm.reset();
  }
  onSubmit() {
    
    if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    } else {
      this.updateData()
    }
    
}

  addData() {
    this.crudApi.createData(this.crudApi.dataForm.value).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.ResetForm();
    });
  }
    updateData() {
      this.crudApi.updateData(this.crudApi.dataForm.value.id, this.crudApi.dataForm.value).subscribe( data => {
        this.toastr.success( 'Modification Faite avec Success');
        this.ResetForm();

      });
    }
}
