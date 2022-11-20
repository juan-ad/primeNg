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
    this.nodeService.getFiles().subscribe( response => this.files = response );
    
    this.items = [
      {label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile)},
      {label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile()}
    ]
  }

  viewFile(file: TreeNode) {
    this.messageService.add({severity: 'info', summary: 'Node Details', detail: file.label});
  }

  unselectFile() {
    this.selectedFile = null;
  }

}
