import { Injectable } from '@angular/core';
import { readFileSync } from 'fs'; // calls the readFileSync method from the node file system module
import { Element } from './element';

@Injectable()
export class ElementService {

  elements: Element[];

  // synchronously returns the elements from elements.json
  getElements(): void {
    const elements = JSON.parse(readFileSync('./app/assets/elements.json', 'utf8'));
    for (const element of elements) {
      element.highlight = false;
    }
    //elements[0].highlight = true;
    this.elements = elements;
  }

  highlightElement(index: number): void {
    this.elements[index].highlight = true;
  }

  unhighlightElement(index: number): void {
    this.elements[index].highlight = false;
  }
}