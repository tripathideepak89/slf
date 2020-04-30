import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit {
  public isCollapsed = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''], 
    email: [''],
    country: [''],
    phone: [''],
    description: [''],
  });

  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
