

let projects = []; // Variabel Global



function addProject () {
    // get data from
    let projectName = document.getElementById('add-project-name').value;
    let description = document.getElementById ('description').value; 
    let image       = document.getElementById ('input-project-image').files[0];

  

    image = URL.createObjectURL(image)

    // console.log(projectName);
    // console.log(description);
    // console.log(image);

    // // Grouping By Object
    let project = {
        projectName : projectName,
        description : description,
        image       : image,
        Author      : 'Irma Damaiyanti',
        postAT      : "14 Agustus 2022",
        // currentTime : new Date (time)

    }

    console.log(project);

    // // store to array
    projects.push(project)

    // console.log(projects);
     renderProject()
     }



    


    function renderProject (){
        let projectWrapper = document.getElementById('project-list');

        projectWrapper.innerHTML = ''

        for ( let i = 0; i < projects.length; i++){

            projectWrapper.innerHTML += 

            ` <div class="project-list-item">
            <div class="card-list-item">
                <div class="item-list-1">
                    <img src="${projects[i].image}" alt="">
                </div>
                <div class="time-project-list">
                    <a href="project-detail.html" target="_blank"><h2>${projects[i].projectName}</h2></a>
                    <p>${projects[i].postAT} | Author ${projects[i].Author}</p>
                </div>
                <div class="notes-list-item-project">
                    <p>${projects[i].description}
                    </p>
                </div>
                <div class="media-sosial-list-item">
                    <div class="img-1">
                        <a href=""><img src="assets/img/playstore.png" alt=""></a>
                    </div>
                    <div class="img-2">
                        <a href=""><img src="assets/img/android-logo.png" alt=""></a>
                    </div>
                    <div class="img-3">
                        <a href=""><img src="assets/img/java.png" alt=""></a>
                    </div>
                </div>
                <div class="button-group">
                    <button class ="edit-btn" type="button">Edit</button>
                    <button class ="delete-btn" type="button">Delete</button>
                </div>
            </div> 
        </div>

            `
        }

    }

    