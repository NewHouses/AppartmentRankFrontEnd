import { Component, Input, OnInit } from '@angular/core';
import { PreferenceTemplate } from '../../../shared/preferenceTemplate.model';

@Component({
  selector: 'app-preference-template-item',
  templateUrl: './preference-template-item.component.html',
  styleUrls: ['./preference-template-item.component.css']
})
export class PreferenceTemplateItemComponent implements OnInit {
  @Input('preferenceTemplateItem') preferenceTemplate!: PreferenceTemplate;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
