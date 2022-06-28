import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../../../../services/memory.service";
import {SimpleMemoryModel} from "../../../../models/simple-memory.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MemoryModel} from "../../../../models/memory.model";

@Component({
  selector: 'app-memory-form-container',
  templateUrl: './memory-form-container.component.html'
})
export class MemoryFormContainerComponent implements OnInit {

  memory: MemoryModel | undefined;
  private isEditing: boolean = false;

  constructor(private memoryService: MemoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[0].path === 'edit';

    if (this.isEditing) {
      this.activatedRoute.data.subscribe(data => {
        this.memory = data['memory'];
      })
    }
  }

  public createMemory(memory: SimpleMemoryModel): void {
    if (this.isEditing) {
      this.memoryService.updateMemory(this.memory?.id, memory).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
    else {
      this.memoryService.createMemory(memory).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }
}


