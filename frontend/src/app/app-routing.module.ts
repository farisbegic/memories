import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MemoriesContainerComponent} from "./features/memories/containers/memories-container/memories-container.component";
import {HomeComponent} from "./features/home/home.component";
import {MainComponent} from "./features/main/main.component";
import {MemoriesResolver} from "./resolvers/memories.resolver";
import {MemoryContainerComponent} from "./features/memory/containers/memory-container/memory-container.component";
import {MemoryResolver} from "./resolvers/memory.resolver";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "memories",
        children: [
          {
            path: "",
            component: MemoriesContainerComponent,
            resolve: {
              "memories": MemoriesResolver
            }
          },
          {
            path: ":id",
            component: MemoryContainerComponent,
            resolve: {
              "memory": MemoryResolver
            }
          }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
