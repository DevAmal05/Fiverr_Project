import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { MessageService } from 'primeng/api';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  isAuth: boolean;
  constructor(private authservice:AuthService,private messageService: MessageService) {
    var firebaseConfig = {
      apiKey: "AIzaSyDx3idMHuETFY0l1euNs3fjYSouQK0rK04",
      authDomain: "testangular1-44189.firebaseapp.com",
      databaseURL: "https://testangular1-44189-default-rtdb.firebaseio.com",
      projectId: "testangular1-44189",
      storageBucket: "testangular1-44189.appspot.com",
      messagingSenderId: "448709910176",
      appId: "1:448709910176:web:6a2e055ca408d087a033c5",
      measurementId: "G-5HC033C8DM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   }
  

ngOnInit(): void {
 firebase.auth().onAuthStateChanged(
 (user) => {
  if (user) {
    this.isAuth=true;
  }
  else {
    this.isAuth=false;
  }
  
  }
 );
}

SignOut(){
  this.authservice.signOutUser();
}


}
