import {Component, Input, OnInit} from '@angular/core';
import {MemoryModel} from "../../../../models/memory.model";

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {
  @Input() data: MemoryModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
