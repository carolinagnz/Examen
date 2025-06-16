const coche1 = {
    id: 1,
    foto: "imagenes/coche1.png",
    nombre: "Bugatti Chiron Super Sport 300+",
    potencia: "1.500+ cavalls de força",
    motor: "Motor: 8.0 litres W16",
}

const coche2 = {
    id: 2,
    foto: "imagenes/cohce2.png",
    nombre: "Koenigsegg Jesko",
    potencia: "Potència: 1.600+ cavalls de força",
    motor: "Motor: V8 de 5.0 litres",
}

const coche3 = {
    id: 3,
    foto: "imagenes/coche3.png",
    nombre: "Hennessey Venom F5",
    potencia: "Potència: 1.800+ cavalls de força",
    motor: "Motor: V8 de 6.6 litres",
}


const coche4 = {
    id: 4,
    foto: "imagenes/coche4.png",
    nombre: "Rimac C_Two",
    potencia: "Potència: 1.900+ cavalls de força",
    motor: "Motor: Elèctric",
    }

const coche5 = {
    id: 5,
    foto: "imagenes/coche5.png",
    nombre: "Lamborghini Sian",
    potencia: "Potència: 800+ cavalls de força",
    motor: "Motor: V12 híbrid",
}


const bd = [coche1, coche2, coche3, coche4, coche5];

const container = document.getElementById('news-container');
bd.forEach(coche => {
    const cocheHTML = `
        <article>
            <a href="detalleCoche.html?id=${coche.id}"><img src=${coche.foto}></a>
            <div>
                <a href="detalleCoche.html?id=${coche.id}"><h1>${coche.nombre}</h1></a>
                <p>${coche.potencia}</p>
                <p>${coche.motor}</p>
                <a href="detalleCoche.html?id=${coche.id}">Ver mas</a>
            </div>
        </article>
    `;
    container.innerHTML += cocheHTML;
});