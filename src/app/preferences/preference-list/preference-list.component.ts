import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PreferenceTemplate } from '../../shared/preferenceTemplate.model';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit, OnDestroy {
  preferenceTemplates: PreferenceTemplate[];
  private preferenceTemplateChangeSub: Subscription;

  constructor(private preferenceServices: PreferenceService) { }

  ngOnInit(): void {
    this.preferenceTemplates = this.preferenceServices.getPreferenceTemplates();
    this.preferenceTemplateChangeSub = this.preferenceServices.preferenceTemplatesChanged
      .subscribe(
        () => {
          this.preferenceTemplates = this.preferenceServices.getPreferenceTemplates();
        }
    );
  }

  ngOnDestroy(): void {
    this.preferenceTemplateChangeSub.unsubscribe();
  }
}
