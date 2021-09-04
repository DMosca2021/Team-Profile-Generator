function createTemplate(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="./sampleStyle.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
          <section class="hero ">
            <div class="hero-body">
              <p class="title">
                Team Profile Generator
              </p>
              <p class="subtitle">
                My current team:
              </p>
            </div>
          </section>
        </header>
        <main>
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Manager</p>
                  <p class="subtitle is-6">${data}</p>
                  <p class="subtitle is-6">${data.managerId}</p>
                  <p class="subtitle is-6">${data.managerEmail}</p>
                  <p class="subtitle is-6">${data.managerNum}</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Engineer</p>
                  <p class="subtitle is-6">${data.engineerName}</p>
                  <p class="subtitle is-6">${data.engineerId}</p>
                  <p class="subtitle is-6">${data.engineerEmail}</p>
                  <p class="subtitle is-6">${data.engineerGithub}</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Intern</p>
                  <p class="subtitle is-6">${data.internName}</p>
                  <p class="subtitle is-6">${data.internId}</p>
                  <p class="subtitle is-6">${data.internEmail}</p>
                  <p class="subtitle is-6">${data.internSchool}</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br>
              </div>
            </div>
          </div>
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
}

module.exports = createTemplate;