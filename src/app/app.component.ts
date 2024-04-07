import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cat-nerd';


  animals = [
    'cat',
    'dog',
    'hamster',
    'iguana',
    'sloth',
    'platypus'
  ]

  universes = [
    'star trek',
    'star wars',
    'marvel',
    'dune'
    'bladerunner'
  ]
}
