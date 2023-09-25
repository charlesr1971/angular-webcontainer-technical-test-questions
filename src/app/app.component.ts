import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ComponentRef,
  ViewContainerRef,
} from "@angular/core";
import { DemoService } from "./services/demo.service";

import { metaData, componentCategories } from "./core/data/component.meta-data";
import { _RouterLink, MetDataItem } from "./core/models/meta-data";

import { DynamicComponentService } from "./core/services/dynamic-component.service";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @ViewChildren('childComponents', { read: ViewContainerRef }) childComponents: QueryList<ViewContainerRef>;
  componentMetaData: MetDataItem[] = metaData;
  componentRef: ComponentRef<any>;
  componentObjMap: any = {};
  selectorObjMap: any = {};

  user: any = { name: "Charlie" };
  birthday = new Date(1988, 3, 15);

  constructor(
    private demoService: DemoService,
    private componentService: DynamicComponentService
  ) {
    console.log("AppComponent: constructor()");
    this.demoService.demo2Service.name = "root";
    console.log("AppComponent: constructor(): this.demoService.demo2Service.name: ", this.demoService.demo2Service.name);
  }

  ngOnInit(): void {
    this.user = undefined;
    componentCategories.sort();
    this.componentMetaData.map( (item) => {
      item.hasRouterOutlet = item?.hasRouterOutlet || false;
      item.outletName = item?.outletName || '';
      this.componentObjMap[item.componentName] = item.componentName;
      this.selectorObjMap[item.componentName] = item.selector;
    });
    const categoryObj: any = {};
    componentCategories.map( (category) => {
      categoryObj[category] = [];
    });
    let temp: any = [];
    componentCategories.map( (category) => {
      categoryObj[category] = this.componentMetaData.filter( (item) => {
        return item.category === category;
      });
      this.sortByFlag(categoryObj[category], 'addCategoryHeader');
      temp = [...temp, ...categoryObj[category]];
    });
    this.componentMetaData = temp;
    console.log("AppComponent: ngOnInit(): this.componentMetaData: ", this.componentMetaData);
  }

  sortByFlag(arr: any, flag = '', type = 'boolean') {
    arr.sort(function (a: any, b: any) {
      if(type === 'boolean'){
        // true values first
        return (a[flag] === b[flag]) ? 0 : a ? -1 : 1;
        // false values first
        // return (a === b)? 0 : a ? 1 : -1;
      }
      else{
        const nameA = a.flag.toUpperCase(); // ignore upper and lowercase
        const nameB = b.flag.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    });
 };

  createComponent() {
    setTimeout( () => {
      this.childComponents.map( (container: any) => {
        // console.log("AppComponent: createComponent(): container._lContainer[0].id: ", container._lContainer[0].id);
        const componentName = this.componentObjMap[container._lContainer[0].id];
        const viewContainerRef: ViewContainerRef = container;
        const selector = this.selectorObjMap[componentName];
        this.componentService
        .getComponentBySelector(selector, () =>
          import("./child.module").then(m => m.ChildModule)
        )
        .then(componentRef => {
          // console.log("AppComponent: ngAfterViewInit(): componentRef.hostView: ", componentRef.hostView);
          viewContainerRef.insert(componentRef.hostView);
        });
      });
    });
  }

  ngAfterViewInit(): void {
    this.createComponent();
  }
}