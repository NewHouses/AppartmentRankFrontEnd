import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Preference } from '../../shared/preference.model';
import { PreferenceTemplate } from '../../shared/preferenceTemplate.model';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit, OnDestroy {
  preferenceTemplates: PreferenceTemplate[] = [];
  private preferenceTemplateChangeSub: Subscription;

  constructor(private preferenceServices: PreferenceService, private router: Router, private route: ActivatedRoute) { }

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

  onEditPreference(index: number) {
    this.preferenceServices.startedEditing.next(index);
  }

  onNewPreferenceTemplate() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
