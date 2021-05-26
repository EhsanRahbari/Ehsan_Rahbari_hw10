$(document).ready(function () {
  $(".page-link").click(function (e) { 
    e.preventDefault();
    // let page = $(this).attr("href");
    // console.log(page);
    $.get(`https://reqres.in/api/users?page=${$(this).text()}`,
        function (data) {
         let pageContent = data;
         $(".cardPlate").empty();
        for (const card of pageContent.data) {
            let infoCard = `
            <div class="card p-3 w-25">
            <img src="${card.avatar}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">id : ${card.id}</h5>
              <p class="card-text">
                email : ${card.email}
              </p>
              <a href="#" class="btn btn-primary">User Profile</a>
            </div>
          </div>
          `;
          $(".cardPlate").append(infoCard);
         
        }  
        }
    );
  });
    
});