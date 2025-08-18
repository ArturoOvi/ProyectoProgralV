$(document).ready(function () {
    $.getJSON("assets/json/flu.json", function (data) {

        // contenedores distintos en tu HTML
        let FluContainer = $("#flu-container");

        $.each(data, function (index, flu) {
            let card = `
        <div class="card m-4" style="width: 18rem;">
                <img src="${flu.logo}" class="card-img-top" alt="logo">
                    <div class="card-body">
                        <p class="card-text text text-center">${flu.acronimo}</p>
                    </div>
            </div>
      `;


            FluContainer.append(card);

        });
    });
});