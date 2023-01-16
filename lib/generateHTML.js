function generateHTML(data) {
    const directory = data.companyMembers;
    console.log(directory);

    function createEmployee() {
        const allHTML = []
        directory.forEach((element) => {
            if (element.role == `Manager`) {
                console.log(`Success!`);
                allHTML.push(`
                <section class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.role}</h6>
                        <p class="card-text">ID: ${element.id}</p>
                        <p class="card-text">Email: <a href="mailto:${element.email}">${element.email}</a></p>
                        <p class="card-text">Office #: ${element.officeNumber}</p>
                    </div>
                </section>
                `)
            }
            if (element.role == `Engineer`) {
                allHTML.push(`
                <section class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.role}</h6>
                        <p class="card-text">ID: ${element.id}</p>
                        <p class="card-text">Email: <a href="mailto:${element.email}">${element.email}</a></p>
                        <p class="card-text">GitHub: <a href="https://github.com/${element.github}">${element.github}</a></p>
                    </div>
                </section>
                `)
            }
            if (element.role == `Intern`) {
                allHTML.push(`
                <section class="card" style="width: 18rem;">
                    <h5 class="card-title">${element.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${element.role}</h6>
                    <p class="card-text">ID: ${element.id}</p>
                    <p class="card-text">Email: <a href="mailto:${element.email}">${element.email}</a></p>
                    <p class="card-text">School: ${element.school}</p>
                </section>
                `)
            }
        })
    return allHTML.join('');
    }
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Company Directory</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <header class="column bg-primary text-center">
                <h1>Company Directory</h1>
            </header>    
        </div>

        <div class="row">
            <main>
                ${createEmployee()}  
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>
    `;
  }

module.exports = generateHTML;

  