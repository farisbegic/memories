import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MemoryService} from "../services/memory.service";
import {MemoryModel} from "../models/memory.model";

@Injectable({
  providedIn: 'root'
})
export class MemoryResolver implements Resolve<MemoryModel> {

  constructor(private memoryService: MemoryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MemoryModel> {
    const id = route.paramMap.get('id')!;
    return this.memoryService.getMemory(id);
  }
}
