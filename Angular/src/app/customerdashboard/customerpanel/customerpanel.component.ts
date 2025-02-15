import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { category } from 'src/app/category';
import { productbycategory } from 'src/app/productbycategory';
import { DomElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-customerpanel',
  templateUrl: './customerpanel.component.html',
  styleUrls: ['./customerpanel.component.css']
})
export class CustomerpanelComponent {

catObj?:category[]=[]
catid?:number
cart?:any[]=[]

prdtbycat?:productbycategory[]=[]

constructor(private serv:MyserviceService)
{
   this.serv.getallcategory().subscribe(res=>this.catObj=res,err=>console.log(err))
}

showValue(){console.log(this.catid)

  this.serv.getallproductbycategory(this.catid).subscribe(res=>
  this.prdtbycat=res,err=>console.log(err) )
}



addtolocalstorage(a?:any)
{
  console.log(a);
  localStorage.setItem(a.prnm,JSON.stringify(a));
  this.serv.totalcartcost += a.price;
}


showcart()
{
  for (var i = 0; i < localStorage.length; ++i) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    //console.log(key + ': ' + value);
    this.cart.push(JSON.parse(value));
}

//console.log(this.cart)

}

deletecart(a?:any)
{

  let index = this.cart.indexOf(a);

  this.cart.splice(index, 1);
  //first delete existing list
  localStorage.removeItem(a.prnm);
}

}
