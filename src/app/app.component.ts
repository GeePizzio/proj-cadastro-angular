import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj-cadastro-angular';
  items: MenuItem[] = [
    {
      'name': 'Home',
      'url': '/home'
    },
    {
      'name': 'Profiles',
      'url': '/profiles'
    }
  ]
  
  minhaFuncao(){
    alert('MINHA FUNÇÃO CHAMADA!');
  }
}

