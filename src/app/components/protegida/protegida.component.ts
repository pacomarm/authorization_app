import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
})
export class ProtegidaComponent implements OnInit {

  constructor( public auth: AuthService) { }

  ngOnInit(): void {
    console.log('ngoninit protegida');
    this.auth.userProfile$.subscribe( perfil =>{
      console.log(perfil);
    });
  }

}
