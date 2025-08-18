$(document).ready(function(){
  $.getJSON("assets/json/servicios.json", function(data){
    let container = $("#serviciosJson-container");
    let servicios = data.servicios_calidad_agua;

    $.each(servicios, function(index, servicio){
      let listaElementos = "<div class='d-flex flex-wrap gap-2 mt-2 justify-content-center'>";
      $.each(servicio.elementos_clave, function(i, elemento){
        listaElementos += `<span class="badge bg-primary-subtle text-dark fw-normal">${elemento}</span>`;
      });
      listaElementos += "</div>";

      let card = `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="servicio-card">
            <div>
              <h5 class="fw-semibold mb-2">${servicio.nombre}</h5>
              <p class="mb-2">${servicio.descripcion}</p>
            </div>
            ${listaElementos}
          </div>
        </div>
      `;
      container.append(card);
    });
  }).fail(function(){
    $("#serviciosJson-container").html("<p class='text-danger'>No se pudo cargar la información de los servicios.</p>");
  });
});