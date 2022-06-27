import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ToolbarComponent} from "./features/toolbar/toolbar.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MemoriesComponent} from './features/memories/components/memories/memories.component';
import {MemoriesContainerComponent} from './features/memories/containers/memories-container/memories-container.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './features/home/home.component';
import {MainComponent} from './features/main/main.component';
import {MemoryService} from "./services/memory.service";
import {MemoriesResolver} from "./resolvers/memories.resolver";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MemoryComponent} from "./features/memory/components/memory/memory.component";
import {MemoryContainerComponent} from './features/memory/containers/memory-container/memory-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MemoriesComponent,
    MemoriesContainerComponent,
    HomeComponent,
    MainComponent,
    MemoryComponent,
    MemoryContainerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    MemoryService,
    MemoriesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
