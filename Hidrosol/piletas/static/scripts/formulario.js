    document.getElementById('formulario').addEventListener('submit',function(e){
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let telefono = document.getElementById('telefono').value;
        let barrio = document.getElementById('barrio').value;
        let fecha = document.getElementById('fecha').value;
        let vendedor = document.getElementById('vendedor').value;
        let email = document.getElementById('email').value;
        let modelo = document.getElementById('modelo_select').value;

        localStorage.setItem('nombre',nombre);
        localStorage.setItem('telefono',telefono);
        localStorage.setItem('barrio',barrio);
        localStorage.setItem('fecha',fecha);
        localStorage.setItem('vendedor',vendedor);
        localStorage.setItem('email',email);
        localStorage.setItem('modelo_select',modelo);
        
         window.location.href = '/presupuesto/';

    });

    function erease(event){
        event.preventDefault();
        document.getElementById('formulario').reset();
    }
