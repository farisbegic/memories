import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MemoryModel} from "../../../../models/memory.model";
import {MemoryService} from "../../../../services/memory.service";

@Component({
  selector: 'app-memories-container',
  templateUrl: './memories-container.component.html'
})
export class MemoriesContainerComponent implements OnInit {

  data: MemoryModel[] = [];

  constructor(private activatedRoute: ActivatedRoute, private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.data = data['memories'];
    })
  }

  deleteMemory(id: number): void {
    this.memoryService.deleteMemory(id).subscribe(data => {
      this.data.map(memory => {
        if (memory.id == data.id) {
          this.data.splice(this.data.indexOf(memory), 1);
        }
      })
    })
  }

}
