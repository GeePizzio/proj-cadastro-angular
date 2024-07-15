import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent {
  
  constructor(private profileService: ProfileService){}

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    email: new FormControl('', Validators.required),
    active: new FormControl(false, Validators.required),
    country: new FormControl('', Validators.required),
    explevel: new FormControl(0, [Validators.required, Validators.min(0)])
  })

  onSubmit(){
    const profile = this.profileForm.value;
    this.profileService.save(profile).subscribe(result => { 
      console.log(result);
    })
  }
}
