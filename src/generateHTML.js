const generateHTML = (data) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!-- Bootstrap -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <!-- Navbar as a heading -->
      <nav class="navbar-light bg-danger p-5">
        <div class="container-fluid">
          <h1 class="mb-0 h1 text-center text-white">My Team</h1>
        </div>
      </nav>
      <!-- Manager Card -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card shadow mt-5" style="width: 18rem">
              <div class="card-body bg-primary text-white">
                <h3 class="card-title">${data.managerName}</h3>
                <h3 class="card-text">Manager</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.managerId}</li>
                <li class="list-group-item">Email: ${data.managerEmail}</li>
                <li class="list-group-item">Office number: ${data.managerOfficeNumber}</li>
              </ul>
            </div>
          </div>
        </div>`;
};

module.exports = generateHTML;
