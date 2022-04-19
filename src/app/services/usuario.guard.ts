import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  public identidad;
  constructor(
    private _router: Router,
  ){}

  canActivate(){
    let identidad2 = this.getIdentidad();
    if(identidad2.rol !== 'USUARIO'){
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }

  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }

}
