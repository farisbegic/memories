import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MemoryModel} from "../../../../models/memory.model";

@Component({
  selector: 'app-memories-container',
  templateUrl: './memories-container.component.html'
})
export class MemoriesContainerComponent implements OnInit {

  data: MemoryModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.data = data['memories'];
    })
  }

}
