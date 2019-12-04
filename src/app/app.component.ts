import { Component , Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `Angular
  <select [(ngModel)]=model (change)="chnageProduct($event.currentTarget.value)" >
  <option *ngFor="let obj of objects" [value]="obj"
   [selected]="model.name === obj.name"
   >{{ obj.name }}</option>
</select>
  <p>
  {{model.name}}
  </p>`

})
export class AppComponent {
  result: any = {};
  
  constructor(){
  }
  
  model =  {name : "1"}
  
  
  objects = [{name : "1"},{name: "2"}]
  
  chnageProduct(val){
     //this.model = val;
     console.log(val)
     console.log(val.name)
  }
}

