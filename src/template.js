// Function to insert data into html and generating html file. 
module.exports = team => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
      <title>Team Profile Generator</title>
  </head>
  <body>
      <header class="columns is-full is-mobile">
        <section class="column hero">
          <div class="hero-body has-text-centered">
            <p class="title">
              Team Profile Generator
            </p>
            <p class="subtitle has-text-info">
              My current team:
            </p>
          </div>
        </section>
      </header>
      <main class="column has-background-info-dark is-mobile">
        ${createProfile(team)}
      </main>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
  </body>
  </html>`
};

const createProfile = team => {
  // Adds manager information to html
  const createManager = manager => {
      return `<div class="column is-one-third card is-centered my-4">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${manager.getName()}</p>
            <p class="subtitle is-6">${manager.getRole()}</p>
            <p class="subtitle is-6">${manager.getId()}</p>
            <p class="subtitle is-6">${manager.getEmail()}</p>
            <p class="subtitle is-6">${manager.getOfficeNum()}</p>
          </div>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <br>
        </div>
      </div>
    </div>`
};
  // Adds engineer information to html
  const createEngineer = engineer => {
      return `<div class="column is-one-third card is-centered my-4">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${engineer.getName()}</p>
            <p class="subtitle is-6">${engineer.getRole()}</p>
            <p class="subtitle is-6">${engineer.getId()}</p>
            <p class="subtitle is-6">${engineer.getEmail()}</p>
            <p class="subtitle is-6">${engineer.getGithub()}</p>
          </div>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <br>
        </div>
      </div>
    </div>`
  };

  // Adds intern information to html
  const createIntern = intern => {
      return `<div class="column is-one-third card is-centered my-4">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${intern.getName()}</p>
            <p class="subtitle is-6">${intern.getRole()}</p>
            <p class="subtitle is-6">${intern.getId()}</p>
            <p class="subtitle is-6">${intern.getEmail()}</p>
            <p class="subtitle is-6">${intern.getSchool()}</p>
          </div>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <br>
        </div>
      </div>
    </div>`
  }

  // Adds employee information to html 
  const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");
};