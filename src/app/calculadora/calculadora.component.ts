import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: any = 0
  num2: any = 0
  result: any = 0

  calc(operation: string = ""){
    this.result = eval(this.num1 + operation + this.num2);
  }
}

