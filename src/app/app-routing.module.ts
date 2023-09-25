import { NgModule } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { Example17aComponent } from "./example17/example17a.component";
import { Example17bComponent } from "./example17/example17b.component";
// import { Example47Component } from "./example47/example47.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full",
  },
  {
    path: "admin",
    component: Example17aComponent,
  },
  {
    path: "users",
    component: Example17bComponent,
    /* children: [
      { path: "", component: Example17bComponent },
      {
        path: "details",
        component: Example47Component,
        // outlet: "usersDetails",
      },
    ], */
  },
  /* {
    path: "details",
    component: Example47Component,
    // outlet: "usersDetails",
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class AppRoutingModule {}
