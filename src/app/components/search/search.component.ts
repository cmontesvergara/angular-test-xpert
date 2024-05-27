import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchWord = new EventEmitter<string>();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      search: ['', []],
    });
    this.form.controls['search'].valueChanges.subscribe((value)=>{
      this.sendWord(value);
    })
  }
  sendWord(value:string){
    this.searchWord.emit(value)
  }

}
