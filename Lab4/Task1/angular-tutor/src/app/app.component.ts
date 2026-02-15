import {Component} from '@angular/core';

// Loading diffeent component
@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `
<section>
    <app-user />
</section>
`,
  imports: [User],
})
export class App {}






// 3 if-else

@Component({
  selector: 'app-root2',
  template: ` 
  @if(isServerRunning){
    <p>Welcome back, friend! <p>
  } @else{
    <p> Server isn't running<p>
  }
  <span>Yes, the server is running</span>
  `,
})
export class App2 {
  // add the boolean property here
  isServerRunning: Boolean = false;
}





// for in Components
@Component({
  selector: 'app-root',
  template: `
  @for (user of users; track user.id){
    <p>{{user.name}}<p>
  }
  `,
})
export class App3 {
  users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];
}





// Property binding
@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class App4 {
  isEditable = true;
}





// Event Handling
@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
})
export class App5 {
  message = '';

  showSecretMessage() {
    this.message = "Way to go 🚀";
  }
}





// input()
import {input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class User2 {
  readonly name = input<string>();
}





// output()
import {output} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
  readonly addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}





// defer
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
        <p>commponent</p>
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
  //imports: [Comments],
})
export class App6 {}






// optimize image
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class User3 {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}






// Forms
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  imports: [FormsModule],
})
export class User4 {
  favoriteFramework = '';
  username = 'youngTech';
}





// 

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User5 {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}





// Reactive forms
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})
export class App7 {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}






// Form validators
import {  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <label>
        Name:
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email:
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class App8 {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}






// Dependency Injection
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // делает сервис доступным во всём приложении
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  addCar(name: string) {
    this.cars.push(name);
  }
}

import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Cars List</h1>
    <ul>
      <li *ngFor="let car of carService.getCars()">{{ car }}</li>
    </ul>

    <input type="text" [(ngModel)]="newCar" placeholder="Add a car" />
    <button (click)="addNewCar()">Add Car</button>
  `,
  imports: [FormsModule], // для standalone components можно добавить FormsModule, если используем [(ngModel)]
})
export class AppComponent {
  carService = inject(CarService); // Angular "впрыснул" сервис
  newCar = '';

  addNewCar() {
    if (this.newCar.trim()) {
      this.carService.addCar(this.newCar.trim());
      this.newCar = '';
    }
  }
}


//  Last CODE

// PIPES

import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe, JsonPipe } from '@angular/common';

// --------------- Сервис -----------------
@Injectable({ providedIn: 'root' })
export class CarService1 {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  addCar(name: string) {
    if (name.trim()) this.cars.push(name.trim());
  }
}

// --------------- Кастомный pipe -----------------
@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

// --------------- Основной компонент -----------------
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, UpperCasePipe, JsonPipe, ReversePipe],
  template: `
    <h1>Angular Mega Example</h1>

    <!-- ==== Template-driven form ==== -->
    <section>
      <h2>Template-driven Form</h2>
      <label>
        Favorite Framework:
        <input type="text" [(ngModel)]="favoriteFramework" />
      </label>
      <p>Your favorite framework: {{ favoriteFramework | uppercase }}</p>
      <button (click)="showFramework()">Alert Framework</button>
    </section>

    <hr />

    <!-- ==== Reactive form ==== -->
    <section>
      <h2>Reactive Form</h2>
      <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
        <label>
          Name:
          <input type="text" formControlName="name" />
        </label>
        <label>
          Email:
          <input type="email" formControlName="email" />
        </label>
        <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      </form>
      <p>Reactive Form Values: {{ profileForm.value | json }}</p>
    </section>

    <hr />

    <!-- ==== DI + Service ==== -->
    <section>
      <h2>Car List (Service via DI)</h2>
      <ul>
        <li *ngFor="let car of carService.getCars()">{{ car | reverse }}</li>
      </ul>
      <input type="text" [(ngModel)]="newCar" placeholder="Add a car" />
      <button (click)="addNewCar()">Add Car</button>
    </section>
  `,
})
export class AppComponent1 {
  // ---- Template-driven form ----
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }

  // ---- Reactive form ----
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert('Submitted: ' + JSON.stringify(this.profileForm.value));
  }

  // ---- DI Service ----
  carService = inject(CarService);
  newCar = '';

  addNewCar() {
    if (this.newCar.trim()) {
      this.carService.addCar(this.newCar);
      this.newCar = '';
    }
  }
}
