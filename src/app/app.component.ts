import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AuthenticateService } from './services/authenticate.service'
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'insuredMine';
  user: User;
  registerUser1 = {
    'email': "abc@media.com",
    'mobileNumber': "963852",
    'password': "abc123",
    'username': "tom",
    'loggedIn': false
  };
  registerUser2 = {
    'email': "def@media.com",
    'mobileNumber': "963852",
    'password': "def12",
    'username': "dick",
    'loggedIn': false
  };
  constructor(private account: AuthenticateService, private route: ActivatedRoute,
    private router: Router,) {
    this.account.register(this.registerUser1).pipe(first())
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        });
    this.account.register(this.registerUser2).pipe(first())
      .subscribe(
        data => {
          console.log(data)
          window.location.reload();
        },
        error => {
          console.log(error)
        });

  }
  ngOnInit() {
    this.account.user.subscribe(x => {
      console.log('asdf', x);
      this.user = x
    });
  }

  logout(user) {
    this.user = { ...user, loggedIn: false };
    this.router.navigate(['/home']);
    // this.account.logout();
  }
}
