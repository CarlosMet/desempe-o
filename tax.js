
    
    let option = Number(prompt("Bienvenido. Ingrese una de las siguientes opciones: 1. calcular impuesto 2. salir"))
    console.log(option)

    let employeesTaxes = []
    let counter = 1

    while(option == 1){
        let earnings = Number(prompt(`Cuál es el ingreso mensual del empleado No ${counter}`))
        if(earnings < 2000000 ){
            employeesTaxes.push(earnings*0.1)
        }else if(earnings>= 2000000 && earnings <=5000000) {
            employeesTaxes.push(earnings * 0.15)
        }else{
            employeesTaxes.push(earnings * 0.20)
        }
    
    counter++
    option = Number(prompt("1. seguir calculando para otro empleado 2. salir"))
}

console.log(employeesTaxes)

for (let index = 0; index < employeesTaxes.length; index++) {
    console.log(`el impuesto del empleado No ${index + 1} es: ${employeesTaxes[index]}`)
    
}

