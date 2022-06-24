import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOptions={};
  stories: any[] = [];

  constructor() { }

  ngOnInit() {
    this.slideOptions = {
      slidesPerView: 5.5,
    };
    this.stories = [
      { name: 'New' },
      { name: 'Android', src: 'assets/images/circles/android.png' },
      { name: 'Angular', src: 'assets/images/circles/angular.png' },
      { name: 'Ionic', src: 'assets/images/circles/ionic.png' },
      { name: 'Nodejs', src: 'assets/images/circles/nodejs.png' },
      { name: 'Laravel', src: 'assets/images/circles/laravel.png' },
      { name: 'IOS', src: 'assets/images/circles/ios.png' },
      { name: 'Php', src: 'assets/images/circles/php.png' },
    ];
  }

}
