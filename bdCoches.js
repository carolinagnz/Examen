
const coche1 = {
    id: 1, // Un identificador unico para el coche
    foto: "imagenes/coche1.png", // Ruta de la imagen del coche
    nombre: "Bugatti Chiron Super Sport 300+", // Nombre completo del coche
    potencia: "1.500+ cavalls de força", // Info de la potencia
    motor: "Motor: 8.0 litres W16", // Info del motor
};

// Se repite la definicion para coche2, coche3, coche4 y coche5 con sus respectivos dats
const coche2 = {
    id: 2,
    foto: "imagenes/coche2.png",
    nombre: "Koenigsegg Jesko",
    potencia: "Potència: 1.600+ cavalls de força",
    motor: "Motor: V8 de 5.0 litres",
};

const coche3 = {
    id: 3,
    foto: "imagenes/coche3.png",
    nombre: "Hennessey Venom F5",
    potencia: "Potència: 1.800+ cavalls de força",
    motor: "Motor: V8 de 6.6 litres",
};

const coche4 = {
    id: 4,
    foto: "imagenes/coche4.png",
    nombre: "Rimac C_Two",
    potencia: "Potència: 1.900+ cavalls de força",
    motor: "Motor: Elèctric",
};

const coche5 = {
    id: 5,
    foto: "imagenes/coche5.png",
    nombre: "Lamborghini Sian",
    potencia: "Potència: 800+ cavalls de força",
    motor: "Motor: V12 híbrid",
};

// Array  bd: Contiene todos los objetos de coches
const bd = [coche1, coche2, coche3, coche4, coche5];

// Seleccion del contenedor HTML: obtiene una referencia al elemento div en el HTML que tiene el ID 'newsContainer' y este sera el lugar donde se insertaran todas las tarjetas de los coches
const newsContainer = document.getElementById('newsContainer');

// Aqui se ira poniendo el HTML de cada tarjeta de coche
let htmlCoches = '';

// Bucle para generar el HTML de cada tarjeta: itera sobre cada 'coche' dentro del array bd
bd.forEach(coche => {
    // Dentro de las comillas invertidas, se puede escribir HTML plano y se pueden incrustar variables JavaScript usando ${variable}
    htmlCoches += `
        <div class="targete">
            <img src="${coche.foto}" alt="${coche.nombre} foto">
            <h2 class="cocheNombre">${coche.nombre}</h2>
            <p class="cocheContenido">${coche.potencia}</p>
            <p class="cocheContenido">${coche.motor}</p>
            
        </div>
    `;
});

// Insercion del HTML generado: asigna todo el string 'htmlCoches' (que contiene todas las tarjetas) como contenido HTML dentro del 'newsContainer'

newsContainer.innerHTML = htmlCoches;

