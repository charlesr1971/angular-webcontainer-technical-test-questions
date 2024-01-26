import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ComponentRef,
  ViewContainerRef,
  ElementRef,
  Inject,
} from "@angular/core";
import { DemoService } from "./services/demo.service";

import { metaData, componentCategories } from "./core/data/component.meta-data";
import { _RouterLink, MetDataItem } from "./core/models/meta-data";

import { DynamicComponentService } from "./core/services/dynamic-component.service";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  debug = false;

  @ViewChildren('childComponents', { read: ViewContainerRef }) childComponents: QueryList<ViewContainerRef>;

  componentMetaData: MetDataItem[] = metaData;
  componentRef: ComponentRef<any>;
  componentObjMap: any = {};
  selectorObjMap: any = {};

  user: any = { name: "Charlie" };
  birthday = new Date(1988, 3, 15);

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private documentBody: Document,
    private demoService: DemoService,
    private componentService: DynamicComponentService
  ) {
    console.log("AppComponent: constructor()");
    this.demoService.demo2Service.name = "root";
    console.log("AppComponent: constructor(): this.demoService.demo2Service.name: ", this.demoService.demo2Service.name);
  }

  ngOnInit(): void {
    this.user = undefined;
    if(this.debug){
      console.log("AppComponent: ngOnInit(): this.componentMetaData 1: ", this.componentMetaData);
    }
    componentCategories.sort();
    if(this.debug){
      console.log("AppComponent: ngOnInit(): componentCategories: ", componentCategories);
    }
    this.componentMetaData.map( (item) => {
      item.hasRouterOutlet = item?.hasRouterOutlet || false;
      item.outletName = item?.outletName || '';
      item.isOpen = false;
      this.componentObjMap[item.componentName] = item.componentName;
      this.selectorObjMap[item.componentName] = item.selector;
    });
    const categoryObj: any = {};
    componentCategories.map( (category) => {
      categoryObj[category] = [];
    });
    if(this.debug){
      console.log("AppComponent: ngOnInit(): categoryObj 1: ", categoryObj);
    }
    let temp: any = [];
    componentCategories.map( (category) => {
      let categoryOrdinal = 1;
      for(let key in categoryObj) {
        if(categoryObj[key].length > 0){
          ++categoryOrdinal;
        }
      }
      categoryObj[category] = this.componentMetaData.filter( (item) => {
        return item.category === category;
      });
      this.sortByFlag(categoryObj[category], 'addCategoryHeader');
      categoryObj[category].map( (item: any) => {
        item.categoryClass = 'category-' + categoryOrdinal;
      });
      temp = [...temp, ...categoryObj[category]];
    });
    if(this.debug){
      console.log("AppComponent: ngOnInit(): categoryObj 2: ", categoryObj);
    }
    this.componentMetaData = temp;
    console.log("AppComponent: ngOnInit(): this.componentMetaData 2: ", this.componentMetaData);
  }

  sortByFlag(arr: any = [], flag: string = '', type: string = 'boolean', method: string = 'desc'): void {
    arr.sort(function (a:any, b:any) {
      if(type === 'boolean'){
        if(method === 'desc'){
          // true values first
          // return (a[flag] === b[flag]) ? 0 : a ? -1 : 1;
          return Number(b[flag]) - Number(a[flag]);
        }
        else{
        // false values first
        // return (a[flag] === b[flag]) ? 0 : a ? 1 : -1;
        return Number(a[flag]) - Number(b[flag]);
        }
      }
      else if (type === 'number') {
        if(method === 'desc'){
          return (parseFloat(a[flag]) < parseFloat(b[flag])) ? 1 : (parseFloat(a[flag]) > parseFloat(b[flag])) ? -1 : 0;
        }
        else{
          return (parseFloat(a[flag]) > parseFloat(b[flag])) ? 1 : (parseFloat(a[flag]) < parseFloat(b[flag])) ? -1 : 0;
        }
      }
      else if (type === 'date') {
        const _a: number = new Date(a[flag]).getTime();
        const _b: number = new Date(b[flag]).getTime();
        if(method === 'desc'){
          return (_a < _b) ? 1 : (_a > _b) ? -1 : 0;
        }
        else{
          return (_a > _b) ? 1 : (_a < _b) ? -1 : 0;
        }
      }
      else{
        const nameA: any = a.flag.toUpperCase(); // ignore upper and lowercase
        const nameB: any = b.flag.toUpperCase(); // ignore upper and lowercase
        if(method === 'desc'){
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        }
        else{
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        }
      }
    });
  };

  createComponent() {
    setTimeout( () => {
      this.childComponents.map( (container: any) => {
        // const componentName = this.componentObjMap[container._lContainer[0].id];
        const componentName = this.componentObjMap[container.element.nativeElement.id];
        const viewContainerRef: ViewContainerRef = container;
        const selector = this.selectorObjMap[componentName];
        this.componentService
        .getComponentBySelector(selector, () =>
          import("./child.module").then(m => m.ChildModule)
        )
        .then(componentRef => {
          viewContainerRef.insert(componentRef.hostView);
        });
      });
    });
  }

  toggleCategory(item: any) {
    const categoryClass = item.categoryClass;
    if(this.debug){
      console.log("AppComponent: toggleCategory(): categoryClass: ", categoryClass);
    }
    const elements = Array.prototype.slice.call(this.documentBody.querySelectorAll('.' + categoryClass));
    if(this.debug){
      console.log("AppComponent: toggleCategory(): elements: ", elements);
    }
    elements.map( (element) => {
      const pt = element.parentElement;
      if(pt){
        if(pt.classList.contains('show')){
          pt.classList.add('hide');
          pt.classList.remove('show');
          pt.classList.remove('open');
        }
        else{
          pt.classList.add('show');
          pt.classList.remove('hide');
        }
      }
    });
    this.componentMetaData.map( (item) => {
      if(item.categoryClass === categoryClass){
        item.isOpen = false;
      }
    });
    if(this.debug){
      console.log("AppComponent: toggleCategory(): this.componentMetaData: ", this.componentMetaData);
    }
  }

  itemSelected(componentItem: any): void {
    if(this.debug){
      console.log("AppComponent: itemSelected(): componentItem: ", componentItem);
    }
    this.componentMetaData.map( (item) => {
      if(item.componentName.toLocaleLowerCase() === componentItem.componentName.toLocaleLowerCase()){
        item.isOpen = componentItem.isOpen;
        if(this.debug){
          console.log("AppComponent: itemSelected(): item: ", item);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.createComponent();
  }
}