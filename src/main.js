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
    
    esPrimo(numero) {

        do {
            if(numero === 2 || numero === 3) {
                return true;
            } else if(numero%2 !== 0 && numero%3 !== 0) {
                return true;
            } else {
                return false;
            }
        }
        while(numero >= 2);
    }

    obtenerMultiplos(inicio, fin) {
        
        if(inicio>fin) {
            let t = inicio;
            inicio = fin;
            fin = t;
        } 

        let string = "";

        do {
            if(inicio%3 == 0) {
                string += inicio;
            }

            inicio++;
        } while(inicio <= fin);

        return string;
    }

    obtenerImpares(numero1, numero2) {

        if(numero1<numero2) {
            let m = numero1;
            numero1 = numero2;
            numero2 = m;
        }
    }
}

let app = new App();

//Prueba de la función sumatoriaSerieUno()
console.log(app.sumatoriaSerieUno(6));
//Prueba de la función sumatoriaSerieDos()
console.log(app.sumatoriaSerieDos(6));
//Prueba de la función esPrimo()
console.log(app.esPrimo(2));
console.log(app.esPrimo(3));
console.log(app.esPrimo(7));
console.log(app.esPrimo(8));
//Prueba de la función obtenerMultiplos()
console.log(app.obtenerMultiplos(3,12));
console.log(app.obtenerMultiplos(18,2));

