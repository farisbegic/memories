import {Component, Input, OnInit} from '@angular/core';
import {MemoryModel} from "../../../../models/memory.model";

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  @Input() data: MemoryModel | any;

  constructor() { }

  ngOnInit(): void {
  }

}
