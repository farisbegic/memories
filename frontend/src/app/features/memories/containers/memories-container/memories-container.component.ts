import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MemoryModel} from "../../../../models/memory.model";
import {MemoryService} from "../../../../services/memory.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-memories-container',
  templateUrl: './memories-container.component.html'
})
export class MemoriesContainerComponent implements OnInit {

  public data: Subject<MemoryModel[]> = new Subject<MemoryModel[]>();

  constructor(private activatedRoute: ActivatedRoute, private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.reloadItems();
  }

  deleteMemory(id: number): void {
    this.memoryService.deleteMemory(id).subscribe(() => {
      this.reloadItems();
    })
  }

  private reloadItems() {
    this.memoryService.getMemories().subscribe(data => {
      this.data.next(data);
    })
  }

}
