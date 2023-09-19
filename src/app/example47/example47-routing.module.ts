import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Example47aComponent } from "./example47a.component";
import { Example47bComponent } from "./example47b.component";

// const routes: Routes = [];

const routes: Routes = [
  {
    path: "",
    redirectTo: "users1/details",
    pathMatch: "full",
  },
  {
    path: "users1",
    // component: Example47aComponent,
    children: [
      { path: "", component: Example47aComponent },
      {
        path: "details",
        component: Example47bComponent,
        // outlet: "usersDetails",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example47RoutingModule {}
