window.addEventListener("load", ()=>{
    //declaracion de variables recibidas del html
    const mat = document.getElementById("materia");
    const matnew = document.getElementById("matnew");
    const subir = document.getElementById("btn_subir");
    const NewHW = document.getElementById("nueva");
    const lista = document.getElementById("lista");
    const HW = document.getElementById("tareas");
    const desc = document.getElementById("descrip");
    const borrar = document.getElementById("borrar");
    //contadores
    var toDo=0; 
    var done=0;
    var task=0;
    //materias base
    var materias= ['Química', 'Matemáticas', 'Biología'];
    var homework = [];

    subir.addEventListener("click", (e) =>{
        // if(!tareas.include(NewHW.value))
        // {
            if(NewHW.value != '')
            {
                let val=0;
                let exist=0;
                if(matnew.value !=='')
                { 
                    do
                    { 
                        if(matnew.value == materias[val])
                            exist=1;
                            val+=1;    
                    }
                    while(val<materias.length)
                    if(exist==0)
                    {
                       // lista.style.display = "block"; 
                        mat.innerHTML += '<option value= "' + matnew.value + '">' + matnew.value + '</option>';
                        lista.innerHTML += `
                                    <div align="center" class="card" id="${task++}" style="width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${matnew.value}</h5>
                                            <h6 class="card-subtitle mb-2 text-body-secondary">${nueva.value}</h6>
                                            <p class="card-text">${desc.value}</p>
                                            <button class="done">Done</button>
                                            <button class="borrar">Delete</button>
                                        </div>
                                    </div>`; 
                        HW.innerHTML = '<p align="center">Tareas por hacer: ' + toDo + '<p>';
                        HW.innerHTML += '<p align="center">Tareas terminadas: ' + done + '<p>';
                        materias.push(matnew.value);
                    }
                    else
                    {
                        lista.innerHTML += `
                        <div align="center" class="card" id="${task++}" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${matnew.value}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${nueva.value}</h6>
                                <p class="card-text">${desc.value}</p>
                                <button class="done">Done</button>
                                <button class="borrar">Delete</button>
                            </div>
                        </div>`; 
                    }
                    matnew.value='';
                    toDo++;
                    HW.innerHTML = '<p align="center">Tareas por hacer: ' + toDo + '<p>';
                    HW.innerHTML += '<p align="center">Tareas terminadas: ' + done + '<p>';

                }
                else
                {
                    lista.innerHTML += `
                        <div align="center" class="card" id="${task++}" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${mat.value}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${nueva.value}</h6>
                                <p class="card-text">${desc.value}</p>
                                <button class="done">Done</button>
                                <button class="borrar">Delete</button>
                            </div>
                        </div>`; 
                    toDo++;
                    HW.innerHTML = '<p align="center">Tareas por hacer: ' + toDo + '<p>';
                    HW.innerHTML += '<p align="center">Tareas terminadas: ' + done + '<p>';

                 }
                 
            }
            else
            {
                alert("Agrega una Nombre a la tarea");
            }
            homework.push(nueva.value);
        // }
        // else
        // {
        //     alert("Esa tarea ya existe");
        // }
        nueva.value='';
    });

    lista.addEventListener("click", (e) =>{
        switch(e.target.className)
        {
            case "done":
                done++;
                toDo--;
                HW.innerHTML = '<p align="center">Tareas por hacer: ' + toDo + '<p>';
                HW.innerHTML += '<p align="center">Tareas terminadas: ' + done + '<p>';
                e.target.outerHTML = '<button class="toDo">To-Do</button>';
            break;
            case "toDo":
                done--; 
                toDo++;
                HW.innerHTML = '<p align="center">Tareas por hacer: ' + toDo + '<p>';
                HW.innerHTML += '<p align="center">Tareas terminadas: ' + done + '<p>';
                e.target.outerHTML = '<button class="done">Done</button>';
            break;
            case "borrar":
                e.target.parentElement.remove();
                if(done>1 && toDo>1) 
                {
                    done--;
                    toDo--;
                }
                else if(toDo>=2)
                {
                    done = 0;
                    toDo--;
                }
                else if(toDo==1)
                {
                    done= 0;
                    toDo--;
                }
                else if(toDo==0 && done>1)
                {
                    done--;
                    toDo= 0;
                }
                else if(toDo==0 && done==0)
                {
                    done= 0;
                    toDo= 0;
                }
                HW.innerHTML = '<p align="center">Tareas por hacer: ' + toDo + '<p>';
                HW.innerHTML += '<p align="center">Tareas terminadas: ' + done + '<p>';
            break;
        }
    });
    if(done==0 && toDo==0)
    {
        HW.innerHTML += '<br><br><p align="center">No hay tareas por el momento<p><br><br>';
    }
});