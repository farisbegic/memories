import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import {MemoryModel} from "../models/memory.model";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private apiUrl = `${environment.apiUrl}/memories`;

  constructor(private httpClient: HttpClient) { }

  public getMemories() {
    return this.httpClient.get<MemoryModel[]>(this.apiUrl);
  }
}
