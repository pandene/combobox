import { Component , Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `Angular
  <select [(ngModel)]=model (change)="chnageProduct($event)" >
  <option *ngFor="let obj of objects" [ngValue]="obj"
   
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
  

  
  
  objects = [{name : "1"},{name: "2"}]
  model = this.objects[1];// {name : "1"}
  
  chnageProduct(val){
    // this.model = this.objects.find(x=>x.name==val);
     console.log(val)
     console.log(val.name)
     console.log(this.model);

  }
}

