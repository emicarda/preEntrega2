class Productos {
    constructor(id,nombre,precio){
        this.id = id; 
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = []

productos.push(new Productos(1, "Chulengo", 30000))
productos.push(new Productos(9, "Brasero", 12000))
productos.push(new Productos(12, "Atizador", 6000))
productos.push(new Productos(5, "Disco", 9000))

console.log(productos)

//MENU

do{
    menu = Number(prompt("Ingrese una opcion: \n 1.Mostrar Productos \n 2. Agregar Productos \n 3. Filtrar Productos (Menor precio al Mayor Precio) \n 4. Salir"))


switch (menu) {
    case 1:
        mostrar();
        break;
    
        case 2:
        agregar();
        break;

    case 3:
        filtrar();
        break;

        case 4:
            alert("Gracias por la compra")
            break;
    default:
        alert("No ingreso ninguna opcion. Por favor Ingrese alguna de las opciones")
        break;
}
} while(menu !=4)





//Funcion Mostrar

function mostrar(){
    if(productos.length==0){
        alert("Aun no ha cargado ningún producto a la lista de stock")
    }else{
    console.log("El stock cargado al sistema hasta el momento es el siguiente: \n\n");
    productos.forEach(element => {
        console.log(
        "- ID del producto: " + element.id + "\n" + 
        "- Nombre del producto: " + element.nombre + "\n" + 
        "- Precio del producto: $" + element.precio + "\n\n");
    });
    }
}



//Funcion Agregar

function agregar(){
    let nuevoIngreso = 0

    while (nuevoIngreso < 1) {
        let nuevo = new Productos(prompt("Ingrese nuevo id"),
                                    (prompt("Ingrese nombre del producto")),
                                    Number(prompt("Ingrese precio")))
        productos.push(nuevo)
        nuevoIngreso++
    }
    console.log(productos)
}


//Funcion Ordenar

function filtrar(){
    productos.sort(function (a, b) {
        if (a.precio < b.precio) {
        return 1;
        }
        if (a.precio > b.precio) {
        return -1;
        }
        return 0;
    });
    console.log("Los elementos ordenados segun su precio, quedan asi: \n\n");
    productos.forEach(element => {
        console.log("Id: " + element.id + "\n" + "Producto: " + element.nombre + "\n" + "Precio: $" + element.precio + "\n");
    });
}