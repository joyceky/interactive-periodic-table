import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pt-button',
  templateUrl: 'filter-button.component.html',
    styleUrls: ['filter-button.component.css'] 

})

export class FilterButtonComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() filterGroupBlocks: string[];
  
  buttonName: string;
  elementStyle: Object;

  ngOnInit(): void {
    this.buttonName = this.returnButtonName(this.name);
  }

  ngOnChanges(): void {
    if (this.filterGroupBlocks.length === 1) {
      const filterGroup = this.filterGroupBlocks[0];
      if (filterGroup === this.name) {
        this.elementStyle = {'background-color': 'red'};
      } else {
        this.elementStyle = {'background-color': 'transparent'};
      }
    } else if (this.filterGroupBlocks.length > 1) {
      const isNonMetal = this.filterGroupBlocks
        .some(groupBlock => groupBlock === 'noble gas');
      if (isNonMetal && this.name === 'nonmetal') {
        this.elementStyle = {'background-color': 'red'};
      } else if (!isNonMetal && this.name === 'metal') {
        this.elementStyle = {'background-color': 'red'};
      } else {
        this.elementStyle = {'background-color': 'transparent'};
      }
    }
    else {
      this.elementStyle = {'background-color': 'transparent'};
    }
  }

  // TODO:
  // It would be much better to simply capitalize and add an 's'
  // To any name that easily pluralizes
  returnButtonName(groupName: string): string {
    switch (groupName) {
      case 'noble gas':
        return 'Noble Gases';
      case 'halogen':
        return'Halogens';
      case 'nonmetal':
        return 'Other';   
      case 'actinoid':
        return 'Actinoids';  
      case 'alkali metal':
        return 'Alkali Metals'; 
      case 'alkaline earth metal':
        return 'Alkaline Earth Metals'; 
      case 'lanthanoid':
        return 'Lanthanoids'; 
      case 'transition metal':
        return 'Transition Metals'; 
      case 'metal':
        return 'Other';
      case 'metalloid':
        return 'Metalloids'; 
      case 'solid':
        return 'Solid';
      case 'liquid':
        return 'Liquid';
      case 'gas':
        return 'Gas';
      case '':
        return 'Other';  
      default:
        break;
    }
  }
  
}