const generateEmployees = (manager, interns, engineers) => {
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
                  <div class="col-12 mb-2 bg-dark text-light p-3">
                  <h3 class="portfolio-item-title text-light">${manager.name}</h3>
                    <h5 class="portfolio-languages">
                      Email Address:<br>
                      ${manager.email}
                    </h5>
                    <p>
                        Employee ID Number:
                        ${manager.id}
                    </p>
                    <h5 class="portfolio-languages>Phone Number</h5>
                    <p>${manager.phone}</p>
                    <p>${manager.getRole()}</p>
                  </div>
            ${interns
                .map(( intern ) => {
                  return `
                  <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="portfolio-item-title text-light">${intern.name}</h3>
                    <h5 class="portfolio-languages">
                      Email Address:<br>
                      ${intern.email}
                    </h5>
                    <p>
                        Employee ID Number:
                        ${intern.id}
                    </p>
                    <h5 class="portfolio-languages>School attended:</h5>
                    <p>${intern.school}</p>
                    <p>${intern.getRole()}</p>
                  </div>
                `;
                })
                .join('')}
                ${engineers
                    .map((engineer) => {
                      return `
                      <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${engineer.name}</h3>
                        <h5 class="portfolio-languages">
                          Email Address:<br>
                          ${engineer.email}
                        </h5>
                        <p>
                            Employee ID Number:
                            ${engineer.id}
                        </p>
                        <a href="${engineer.getGithub()}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Github Profile</a>
                        <p>${engineer.getRole()}</p>
                      </div>
                    `;
                    })
                    .join('')}
    `;
};

module.exports = generatePageData = (manager, interns, engineers) => {
    console.log(manager, interns, engineers);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>The Definitive Employee Tracker</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">The Definitive Employee Tracker</h1>
        </div>
      </header>
      <main class="container my-5">
        <p>${generateEmployees(manager, interns, engineers)}</p>
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${manager.name} </h3>
      </footer>
    </body>
    </html>
    `;
};