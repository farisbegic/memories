import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MemoryModel} from "../models/memory.model";
import {MemoryService} from "../services/memory.service";

@Injectable({
  providedIn: 'root'
})
export class MemoriesResolver implements Resolve<MemoryModel[]> {

  constructor(private memoryService: MemoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MemoryModel[]> {
    console.log(this.memoryService.getMemories());
    return this.memoryService.getMemories();
  }
}
