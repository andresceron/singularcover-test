import { Injectable } from '@angular/core';
import { ClientStorage } from '@services/client-storage.service';
import { AppConstants } from '@constants/app-constants.constant';

@Injectable()
export class AuthService {

  constructor(private cs: ClientStorage) {}

  public getToken(): string {

    let token;

    if (this.cs.getItem(`${AppConstants.prefix}.token`)) {
      token = this.cs.getItem(`${AppConstants.prefix}.token`);
    } else {
      token = AppConstants.PUBLIC_TOKEN;
    }

    return token;
  }

  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting
  //   // whether or not the token is expired
  //   return;
  // }
}
