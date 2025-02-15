import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from './category';
import { product } from './product';
import { productbycategory } from './productbycategory';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public totalcartcost?:number=0;

  constructor(private http : HttpClient) { }

  getallcategory():Observable<category[]>
  {
    return this.http.get<category[]>(`http://localhost:9091/api/allcat`)
  }


  getcatbyid():Observable<category>
  {
    return this.http.get<category>(`http://localhost:9091/api/catbyid/1`);
  }


  addCategory(c : category):Observable<category>
  {
    return this.http.post<category>(`http://localhost:9091/api/addcat`,c);
  }

  updatecategory(c:category):Observable<category>
  {
    return this.http.put<category>(`http://localhost:9091/api/updatecat/`+c.catid,c);
  }

  deletecategory(c:category):Observable<category>
  {
    return this.http.delete<category>(`http://localhost:9091/api/deletecat/`+c.catid);
  }



  getallproduct():Observable<product[]>
  {
    return this.http.get<product[]>(`http://localhost:9091/api/allprdt`)
  }


  getallproductbycategory(e:any):Observable<productbycategory[]>
  {
    return this.http.get<productbycategory[]>(`http://localhost:9091/api/allprdtcat/`+e)
  }


}
