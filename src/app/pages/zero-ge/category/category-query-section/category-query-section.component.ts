import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { map } from 'rxjs';
import { NodeService } from 'src/app/shared/services/node.service';

@Component({
  selector: 'app-category-query-section',
  templateUrl: './category-query-section.component.html',
  styleUrls: ['./category-query-section.component.css']
})
export class CategoryQuerySectionComponent implements OnInit {

  files: TreeNode[] = [];

  selectedFile!: any;

  items!: MenuItem[];

  constructor(private nodeService: NodeService, private messageService: MessageService) {}

  ngOnInit(){
    this.nodeService.getFiles().subscribe( response => { 
      this.files = response.data;
      console.log(this.formatAttribute(this.files, 'A'));
    });
    
    this.items = [
      {label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile)},
      {label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile()}
    ]
  }

  formatAttribute(listAttribute: any, type: string) {
    listAttribute = listAttribute?.map((item: any) => {
      if (type == 'A' && item.predecessor == null) {
        return {
          data: {
            icon: "<i class='fa-brands fa-bandcamp text-primary'></i>",
            subattribute: item.name,
            description: item.description
          },
          children: this.formatAttribute(item.childs, 'S')
        };
      }
      else if (type == 'S') {
        return {
          data: {
            icon: "<i class='fa-brands fa-bandcamp text-primary'></i>",
            subattribute: item.name,
            description: item.description
          },
          children: this.formatAttribute(item.childs, 'C')
        }
    }
    else if (type == 'C') {
      return {
        data: {
          icon: "<i class='fa-brands fa-buffer text-success'></i>",
          subattribute: item.name,
          description: item.description
        }
      }
    }
    else
      return true
    });
    return listAttribute;
  };

  viewFile(file: TreeNode) {
    this.messageService.add({severity: 'info', summary: 'Node Details', detail: file.label});
  }

  unselectFile() {
    this.selectedFile = null;
  }

}
