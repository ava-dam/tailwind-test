import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatButtonModule, 
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    pan: new FormControl('')
  })
  placeholderText: string = 'Enter your full name as per your PAN Card';
  submitted: boolean = false;
  placeholderTextVisible: boolean = true;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        fullName: ['', Validators.required],
        pan: ['']
      }
    );
  }

  onContinue() {
    try {
      this.submitted = true;
      if(this.form.valid) {
        console.log('form is valid');
      } else {
        console.log('form invalid')
      }
    } catch(err) {
      console.log(err);
    }
  }

  setPlaceholder(flag: boolean) {
    try {
      this.placeholderTextVisible = flag;
    } catch(err) {
      console.log(err);
    }
  }

  clearSubmitted(flag: boolean = false) {
    try {
      this.submitted = flag;
    } catch(err) {

    }
  }
}
