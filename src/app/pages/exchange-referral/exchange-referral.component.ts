import { Component } from '@angular/core';
import { exchangeReferral } from '../../shared/sample-data';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-exchange-referral',
  templateUrl: './exchange-referral.component.html',
  styleUrl: './exchange-referral.component.scss'
})
export class ExchangeReferralComponent {
  
  constructor(public service: SharedService) { }
  filterObj: { company: string, color: string }[] = []; 
  showResult: boolean = false;
  colorIndex: number = 0;
  dropdownList :any= [];
  selectedItems:any= [];
  mobFilterToggle: boolean = false;
  data = exchangeReferral;
  dropdownSettings = {
    singleSelection: false,
    idField: 'itemId',
    textField: 'company',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  ngOnInit() {
 
    this.dropdownList = [
      { itemId: 1, company: 'TCS'},
      { itemId: 2, company: 'HCL'},
      { itemId: 3, company: 'Deliotte'},
      { itemId: 4, company: 'KPMG'},
      { itemId: 5, company: 'EY'},
      { itemId: 5, company: 'PWC'},
      { itemId: 5, company: 'CISCO'},
      { itemId: 5, company: 'MICROSOFT'},
      { itemId: 5, company: 'Amazon'},
      { itemId: 5, company: 'Google'},
      { itemId: 5, company: 'Dell'}
    ];
  
  }
  onItemSelect(item: any) {
    this.filterObj.push({company:item.company, color:this.generateRandomColors()});   
  }

  generateRandomColors(): string {
    const letters = '0123456789ABCDEF';
      let color = '#';
      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  
  onSelectAll(items:any) {
  
   for (let i = 0; i < items.length; i++) { 
    this.filterObj.push({company:items[i].company, color:this.generateRandomColors()});
   }
   
  }
  onSearch() {
   this.mobFilterToggle = false;
   this.showResult = true;
  }
  toggleMobFilter() {
    this.mobFilterToggle = !this.mobFilterToggle
  }
}
