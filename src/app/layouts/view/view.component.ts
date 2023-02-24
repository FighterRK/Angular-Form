import { Component } from '@angular/core';
import { DataViewService } from 'src/app/data-view.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  viewDetails : any;


  constructor(public viewService : DataViewService){
    this.fetchData()
  }

  fetchData(){
    console.log(this.viewService.getData());
    this.viewDetails = this.viewService.getData()
    
  }

}
