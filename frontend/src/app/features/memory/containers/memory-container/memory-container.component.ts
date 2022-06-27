import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MemoryModel} from "../../../../models/memory.model";

@Component({
  selector: 'app-memory-container',
  templateUrl: './memory-container.component.html'
})
export class MemoryContainerComponent implements OnInit {

  data: MemoryModel | any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.data = data['memory'];
    })
  }

}
