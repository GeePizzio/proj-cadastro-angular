import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
profiles: any;

  constructor(private profileService: ProfileService) {  }
  ngOnInit(){
    this.profileService.findAll().subscribe(result => {
      this.profiles = result;
    }, error => {
      console.log(error);
    });
  }
}
