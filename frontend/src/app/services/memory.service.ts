import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import {MemoryModel} from "../models/memory.model";
import {SimpleMemoryModel} from "../models/simple-memory.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private apiUrl = `${environment.apiUrl}/memories`;
  private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) { }

  public getMemories() {
    return this.httpClient.get<MemoryModel[]>(this.apiUrl);
  }

  public getMemory(id: string) {
    return this.httpClient.get<MemoryModel>(`${this.apiUrl}/${id}`);
  }

  public createMemory(memory: SimpleMemoryModel) {
    return this.httpClient.post<SimpleMemoryModel>(this.apiUrl, memory);
  }

  public deleteMemory(id: number) {
    return this.httpClient.delete<MemoryModel>(`${this.apiUrl}/${id}`);
  }

  public updateMemory(id: number | undefined , memory: SimpleMemoryModel) {
    return this.httpClient.put<MemoryModel>(`${this.apiUrl}/${id}`, memory);
  }
}
