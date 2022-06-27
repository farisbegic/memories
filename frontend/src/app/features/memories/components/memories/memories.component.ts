import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MemoryModel} from "../../../../models/memory.model";

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {
  @Input() data: MemoryModel[] = [];
  @Output() deleteMemory: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.deleteMemory.emit(id);
  }
}

