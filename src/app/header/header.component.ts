import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../apartments/filter/Filter.model';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated = false;
  username: string;

  constructor(private dataSorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.username = user.username;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onFetchApartments() {
    this.dataSorageService.fetchApartments(new Filter(2000, 0, '42.22788973334626,-8.72946020788653', 4000));
  }
}
