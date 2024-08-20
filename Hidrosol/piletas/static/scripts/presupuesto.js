const data = {
    "piletas": [
        {
            "familia": "RECTA HÚMEDA",
            "modelo": "M-RH505",
            "medidas": "5 X 2,65 X 1X3",
            "precio": "5.855.614"
        },
        {
            "familia": "RECTA HÚMEDA",
            "modelo": "M-RH605",
            "medidas": "6 X 3 X 1.35",
            "precio": "7.069.518"
        },
        {
            "familia": "RECTA HÚMEDA",
            "modelo": "M-RH705",
            "medidas": "7 X 3,45 X 1,35",
            "precio": "8.506.996"
        },
        {
            "familia": "RECTA HÚMEDA",
            "modelo": "M-RH805",
            "medidas": "8 X 3,45 X 1,35",
            "precio": ""
        },
        {
            "familia": "RECTA",
            "modelo": "M-RC400",
            "medidas": "4 X 2,25 X 1,22 ",
            "precio": "4.494.760"
        },
        {
            "familia": "RECTA",
            "modelo": "M-RC500",
            "medidas": "5 X 2,65 X 1,3",
            "precio": "5.680.668"
        },
        {
            "familia": "RECTA",
            "modelo": "M-RC600",
            "medidas": "6 X 3 X 1,35",
            "precio": "6.858.568"
        },
        {
            "familia": "RECTA",
            "modelo": "M-RC700",
            "medidas": "7 X 3,45 X 1,35",
            "precio": "8.226.966"
        },
        {
            "familia": "RECTA",
            "modelo": "M-RC800",
            "medidas": "8 X 3,45 X 1,35",
            "precio": "9.453.009"
        },
        {
            "familia": "RECTA",
            "modelo": "M-RC900",
            "medidas": "9 X 3,8 X 1,4",
            "precio": "10.663.478"
        },
        {
            "familia": "ARCO ROMANO",
            "modelo": "M-AR650",
            "medidas": "6,5 X 3 X 1,35",
            "precio": "7.402.396"
        },
        {
            "familia": "ARCO ROMANO",
            "modelo": "M-AR750",
            "medidas": "7,5 X 3,45 X 1,35",
            "precio": "8.906.314"
        },
        {
            "familia": "ARCO ROMANO",
            "modelo": "M-AR850",
            "medidas": "8,5 X 3,45 X 1,35",
            "precio": ""
        },
        {
            "familia": "ARCO ROMANO",
            "modelo": "M-AR950",
            "medidas": "9,5 X 3,8 X 1,4",
            "precio": "11.295.182"
        },
        {
            "familia": "DOBLE BANCO",
            "modelo": "M-DB360",
            "medidas": "3,6 X 2,00 X 0,90",
            "precio": "3.646.090"
        },
        {
            "familia": "DOBLE BANCO",
            "modelo": "M-DB395",
            "medidas": "3,90 X 2,10 X 1,00",
            "precio": "4.098.545"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo": "M-BE385",
            "medidas": "390 X 2,25 X 1,00",
            "precio": "4.053.746"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo": "M-BE390",
            "medidas": "3,90 X 2,25 X 1X3",
            "precio": "4.213.760"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo": "M-BE490",
            "medidas": "4,90 X 2,60 X 1,3",
            "precio": "5.254.562"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo": "M-BE590",
            "medidas": "5,85 X 2,8 X 1,4",
            "precio": "6.383.648"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo": "M-BE680",
            "medidas": "6,8 X 3,25 X 1,4",
            "precio": "7.416.028"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo": "M-BE780",
            "medidas": "7,8 X 3,8 X 1,4",
            "precio": "8.673.840"
        },
        {
            "familia": "SOLARIUM HÚMEDO",
            "modelo": "M-SH585",
            "medidas": "5,85 X 2,8 X 1,4",
            "precio": "6.632.792"
        },
        {
            "familia": "SOLARIUM HÚMEDO",
            "modelo": "M-SH675",
            "medidas": "6,8 X 3,25 X 1,4",
            "precio": "7.817.385"
        },
        {
            "familia": "SOLARIUM HÚMEDO",
            "modelo": "M-SH775",
            "medidas": "7,8 X 3,8 X 1,4",
            "precio": "9.066.207"
        },
        {
            "familia": "SPA",
            "modelo": "M-SP200",
            "medidas": "2,18 X 2,18 X 0,90",
            "precio": ""
        }
    ]

}

window.addEventListener('load', function () {
    // Rellenar los campos del formulario
    document.getElementById("nombre").value = localStorage.getItem("nombre");
    document.getElementById('telefono').value = localStorage.getItem('telefono');
    document.getElementById('barrio').value = localStorage.getItem('barrio');
    document.getElementById('fecha').value = localStorage.getItem('fecha');
    document.getElementById('vendedor').value = localStorage.getItem('vendedor');
    document.getElementById('email').value = localStorage.getItem('email');

    var modeloValor = localStorage.getItem('modelo_select');
    var modeloSpan = document.getElementById('modelo_presupuesto');
    if (modeloSpan) {
        modeloSpan.textContent = modeloValor;

    } else {
        console.error('Elemento con ID "modelo_presupuesto" no encontrado.');
    }


    definirFamilia(modeloValor);
    definirMedidas(modeloValor);
    definirPrecio(modeloValor);
});

function definirFamilia(modeloValor) {
    let pileta = data.piletas.find(pileta => pileta.modelo === modeloValor)

    if (pileta) {
        let familiaElement = document.getElementById('familia');
        if (familiaElement) {
            familiaElement.textContent = pileta.familia;
        } else {
            alert('Familia no encontrada')
        }
    }else{
        alert('Modelo no encontrado')
    }
}

function definirMedidas(modeloValor){
    let medida = data.piletas.find(pileta => pileta.modelo === modeloValor)

    if (medida){
        let medidasElement = document.getElementById('medida');
        if (medidasElement){
            medidasElement.textContent = medida.medidas;
        }else{
            alert('Medidas no encontradas')
        }
    }else{
        alert('Modelo no encontrado')
    }
}

function definirPrecio(modeloValor){
    let precios = data.piletas.find(pileta => pileta.modelo === modeloValor);
    
    if (precios){
       let preciosElement = document.getElementById("precio");
       if(preciosElement){
        preciosElement.textContent = precios.precio
       }else{
        alert('Precio no encontrado')
       }   
    }else{
        alert('modelo no encontrado');
    }
}
