import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  user = {
    tec_cedula: '',
    tec_contrasenia: '',
  }
  userSup = {
    sup_cedula: '',
    sup_contrasenia: '',
  }

  @Input() indice: string | undefined;

  constructor(private authService: AuthService,
    private router: Router) { 
    }

  ngOnInit(): void {
  }
  sigIntec(){
    console.log(this.user);
    this.authService.signIn(this.user)
      .subscribe(res => {
        console.log(res[0]._id);
        this.router.navigate(['/listar-usuarios/'+res[0]._id])   
      },
        err => console.log(err.error)
      )
  }

  sigInSup(){
    this.userSup.sup_cedula=this.user.tec_cedula;
    this.userSup.sup_contrasenia=this.user.tec_contrasenia;
    this.authService.signInS(this.userSup)
      .subscribe(res => {
        console.log(res[0]._id);
        //listar tecnicos
        this.router.navigate(['/listar-tecnicos/'+res[0]._id])
      },
        err => console.log(err)
      )
  }

  signIn(inputValue:string) {
    console.log(inputValue);
    if(inputValue =="1"){
      this.sigInSup();
      
    }else if(inputValue =="2"){
    console.log("opcion 2");
    this.sigIntec()
    //this.router.navigate(['/listar-usuarios']);
  }else{
    console.log("err");
  }
  }




}