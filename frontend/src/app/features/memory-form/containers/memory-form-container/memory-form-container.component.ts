import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../../../../services/memory.service";
import {SimpleMemoryModel} from "../../../../models/simple-memory.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-memory-form-container',
  templateUrl: './memory-form-container.component.html'
})
export class MemoryFormContainerComponent implements OnInit {

  constructor(private memoryService: MemoryService, private router: Router) { }

  ngOnInit(): void {
  }

  public createMemory(memory: SimpleMemoryModel): void {
    this.memoryService.createMemory(memory).subscribe(data => {
      this.router.navigate(['/memories']);
    })
  }
}


