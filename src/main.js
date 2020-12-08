export default class App {

    sumatoriaSerieUno(numero) {
        let suma = 0;

        for(let n = 1; n <= numero; n = n + 1){
            suma = suma + 1/n;
        }

        return suma;
    }

    sumatoriaSerieDos(numero) {
        let m = 2;
        let suma = 1;

        while(m <= numero) {

            if(m%2 == 0) {
                suma = suma + 1/m;
            } else {
                suma = suma - 1/m;
            }

            m++;
        }

        return suma;
    }
}

let app = new App();

//Prueba de sumatoriaSerieUno()
console.log(app.sumatoriaSerieUno(6));
//Prueba de sumatoriaSerieDos()
console.log(app.sumatoriaSerieDos(6));
