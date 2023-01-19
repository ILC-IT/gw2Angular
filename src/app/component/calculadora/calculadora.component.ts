import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  formularioCalc!: FormGroup;
  resultado = {
    resOro: 0,
    resPlata: 0,
    resCobre: 0,
    difOro: 0,
    difPlata: 0,
    difCobre: 0
  };
  loading = false;

  constructor(private formBuilder: FormBuilder) { 
    this.initForm();
  }

  ngOnInit(): void {
    
  }

  initForm(){
    this.formularioCalc = this.formBuilder.group({
      cantidad: ['1', [Validators.pattern("^[0-9]*$"), Validators.min(1)]],
      oro: ['0', [Validators.pattern("^[0-9]*$"), Validators.min(0)]],
      plata: ['0', [Validators.pattern("^[0-9]*$"), Validators.min(0), Validators.max(99)]],
      cobre: ['0', [Validators.pattern("^[0-9]*$"), Validators.min(0), Validators.max(99)]],
      porcentaje: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })
  }

  sendForm(){
    if (this.formularioCalc.status == "INVALID"){
      return;
    }
    this.resultado = this.calcularPorcentaje();
    this.loading = true;
  }

  resetForm(){
    this.formularioCalc.reset();
    // console.log(this.formularioRegistro); 
    this.formularioCalc.markAsUntouched();
    this.formularioCalc.setValue({
      cantidad: '1',
      oro: '0',
      plata: '0',
      cobre: '0',
      porcentaje: ''
    });
    this.loading = false;
  }

  calcularPorcentaje(){
    let valor = this.formularioCalc.value;
    //console.log("oro: ", valor.oro, " plata: ", valor.plata, " cobre: ", valor.cobre)

    let cantidadCobre = valor.cantidad * valor.cobre;
    let cantidadPlata = valor.cantidad * valor.plata;
    let cantidadOro = valor.cantidad * valor.oro;
    if (cantidadCobre >= 100){
      let invertir = this.invertirCadena(cantidadCobre.toString());
      let partePlata = this.splitNum(invertir,2)[1];
      let parteCobre = this.splitNum(invertir,2)[0];
      partePlata = this.invertirCadena(partePlata);
      parteCobre = this.invertirCadena(parteCobre);
      cantidadPlata = cantidadPlata + Number(partePlata);
      cantidadCobre = Number(parteCobre);
    }
    if (cantidadPlata >= 100){
      let invertir = this.invertirCadena(cantidadPlata.toString());
      let parteOro = this.splitNum(invertir,2)[1];
      let partePlata = this.splitNum(invertir,2)[0];
      parteOro = this.invertirCadena(parteOro);
      partePlata = this.invertirCadena(partePlata);
      cantidadOro = cantidadOro + Number(parteOro);
      cantidadPlata = Number(partePlata);
    }
    // console.log('oro ', cantidadOro);
    // console.log('plata', cantidadPlata);
    // console.log('cobre ', cantidadCobre);

    // let tempOro = `${valor.oro}`; //meto en strings los valores de oro, plata y cobre
    // let tempPlata = "0";
    // let tempCobre = "0";
    // if (valor.plata < 10) {
    //   tempPlata = `0${valor.plata}`; //añado un cero a la izquierda para que sean 2 caracteres si es menor de 10
    // }
    // else {
    //   tempPlata = `${valor.plata}`;
    // }
    // if (valor.cobre < 10) {
    //   tempCobre = `0${valor.cobre}`; //añado un cero a la izquierda para que sean 2 caracteres si es menor de 10
    // }
    // else {
    //   tempCobre = `${valor.cobre}`;
    // }

    let tempOro = `${cantidadOro}`; //meto en strings los valores de oro, plata y cobre multiplicados por cantidad
    let tempPlata = "0";
    let tempCobre = "0";
    if (cantidadPlata < 10) {
      tempPlata = `0${cantidadPlata}`; //añado un cero a la izquierda para que sean 2 caracteres si es menor de 10
    }
    else {
      tempPlata = `${cantidadPlata}`;
    }
    if (cantidadCobre < 10) {
      tempCobre = `0${cantidadCobre}`; //añado un cero a la izquierda para que sean 2 caracteres si es menor de 10
    }
    else {
      tempCobre = `${cantidadCobre}`;
    }

    let total = tempOro + tempPlata + tempCobre; //creo un string con el formato: oro, plata con 2 digitos y cobre con 2 digitos
    let res = Number(total) * valor.porcentaje / 100; //calculo el porcentaje; Number(total) me pasa a number el contenido de 'total'
    // console.log(`total: ${total}`);
    // console.log(valor.cantidad);
    // console.log("res: ", res);
    let resCobre = Math.round(res % 100); //calculo el cobre, plata y oro del res al aplicar el porcentaje
    let resPlata = Math.floor((res / 100)) % 100;
    let resOro = Math.floor(res / 10000);

    // console.log("aaaa: ", tempOro, " aa: ", tempPlata, " a:", tempCobre);
    // console.log("aaaa: ", resOro, " aa: ", resPlata, " a:", resCobre);
    // let dif = Number(total) - Math.round(res); //diferencia entre el total (original) y el res (al aplicar el porcentaje)
    // console.log("Dif: ", dif);

    let difPlata = 0;
    let difOro = 0;
    let difCobre = 0;
    difCobre = Number(tempCobre) - resCobre; //calculo el cobre diferencia entre el total (original) y el res (al aplicar el porcentaje)
    if (difCobre < 0){
      difCobre = 100 - Math.abs(difCobre);
      difPlata--;
    }
    difPlata = difPlata + Number(tempPlata) - resPlata; 
    if (difPlata < 0){
      difPlata = 100 - Math.abs(difPlata);
      difOro--;
    }
    difOro = difOro + Number(tempOro) - resOro;
    //console.log("Dif: oro: ", difOro, " plata: ", difPlata, " cobre: ", difCobre);

    let resultado = {
      resOro,
      resPlata,
      resCobre,
      difOro,
      difPlata,
      difCobre
    }

    return resultado;
  }

  splitNum(cad: string, pos: number){
    // divide una cadena en 2 trozos a partir de pos
    return [cad.substring(0, pos), cad.substring(pos)];
   }

  invertirCadena(cad: string) {
    return cad.split("").reverse().join("");
  }

}
