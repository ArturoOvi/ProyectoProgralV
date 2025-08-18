// Año dinámico footer
document.getElementById('year').textContent = new Date().getFullYear();

// Cargar equipo desde JSON externo
$(document).ready(function(){
  $.getJSON("assets/json/colaboradores.json", function(data){
    
    // contenedores distintos en tu HTML
    let juntaContainer = $("#junta-container");
    let colabContainer = $("#colaboradores-container");

    $.each(data, function(index, miembro){
      let card = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <div class="team-card p-3 bg-white rounded-4 shadow-sm h-100 text-center">
            <img src="${miembro.foto}" class="team-photo" alt="${miembro.nombre}">
            <h5 class="fw-semibold mb-1">${miembro.nombre}</h5>
            <div class="team-role">${miembro.rol}</div>
          </div>
        </div>
      `;

      // Tipos de miembro
      if(miembro.tipo === "junta_directiva"){
        juntaContainer.append(card);
      } else if(miembro.tipo === "colaborador"){
        colabContainer.append(card);
      }
    });
  });
});

