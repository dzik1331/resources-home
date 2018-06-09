import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';

@Injectable()
export class ResourcesService {
  private colors: string[] = [
    '#F44336', '#C2185B', '#7B1FA2', '#3F51B5', '#009688', '#0277BD',
    '#4CAF50', '#EEFF41', '#FDD835', '#F57C00', '#795548', '#000000',
    '#78909C', '#AED581', '#7C4DFF', '#2196F3', '#827717', '#FFAB00'
  ];

  public changeTypeList = new Subject();

  constructor() {
  }

  randomColor(): string {
    return this.colors.randomElement();
  }

  setTypeListStorage(type: number) {
    localStorage.setItem('listType', String(type));
    this.changeTypeList.next(this.getTypeListStorage());
  }

  getTypeListStorage() {
    return localStorage.getItem('listType');
  }
}
