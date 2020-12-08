export default class App {

    sumatoriaSerieUno(numero) {
        let suma = 0;

        for(let n = 1; n <= numero; n = n + 1){
            suma = suma + 1/n;
        }

        return suma;
    }
}

let app = new App();

//Prueba de sumatoriaSerieUno()

