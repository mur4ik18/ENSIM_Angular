import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ChoicePCComponent } from './choice-pc/choice-pc.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, HomeComponent, HeaderComponent, ChoicePCComponent],
  //template: "<h1>Hello World!</h1>",

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Pest';
}
