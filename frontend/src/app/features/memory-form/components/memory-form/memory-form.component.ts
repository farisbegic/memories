import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MemoryModel} from "../../../../models/memory.model";
import {SimpleMemoryModel} from "../../../../models/simple-memory.model";

@Component({
  selector: 'app-memory-form',
  templateUrl: './memory-form.component.html',
  styleUrls: ['./memory-form.component.css']
})
export class MemoryFormComponent implements OnInit {

  form!: FormGroup;
  @Output() createMemory: EventEmitter<SimpleMemoryModel> = new EventEmitter<SimpleMemoryModel>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.createMemory.emit({
      title: this.form.value.title,
      description: this.form.value.description
    })
  }

}
