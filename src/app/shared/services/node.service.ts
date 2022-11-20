import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TreeNode } from 'primeng/api';

@Injectable( {providedIn: 'root'} )
export class NodeService {

  constructor(private http: HttpClient) { }

  getFiles():Observable<any>{
    let nodes:TreeNode[] = [];
    return this.http.get('assets/categories.json').pipe(
      map( (categories:any) => { 
        for (let category of categories.data){
          let node: TreeNode = {
            "data": "Documents Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
          };
          node.label = category.name;
          node.children = category.childs;
          nodes.push(node);
        }
        return nodes;
      })
    );
  }

  getLazyFiles():Observable<any>{
    return this.http.get('assets/files-lazy.json');
  }
}
