import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    readonly email = signal('');
  readonly password = signal('');
  readonly loading = signal(false);

  constructor(private authService: AuthService, private router:Router){}
  login(): void {
    this.authService.login();
    console.log({
      email: this.email, password: this.password
    });
  }
  
}
