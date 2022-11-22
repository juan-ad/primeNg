import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TreeNode } from 'primeng/api';

@Injectable( {providedIn: 'root'} )
export class NodeService {

  constructor(private http: HttpClient) { }

  getFiles(): Observable<any>{
    return this.http.get('assets/categories.json');
  }

  getLazyFiles():Observable<any>{
    return this.http.get('assets/files-lazy.json');
  }
}
