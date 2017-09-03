import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from '../models/User';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private afa:AngularFireAuth) { 
    this.user = afa.authState;
  }

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afa.auth.signOut();
  }

  authUser() {
    return this.user;
  }
}
