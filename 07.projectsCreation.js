function projectsCreation(input) { 
    let name = input[0];    
    let countOfProjects = Number(input[1]);  
    let timeForProject = countOfProjects * 3;

        console.log (`The architect ${name} will need ${timeForProject} hours to complete ${countOfProjects} project/s.`)
} 

    projectsCreation(["Sanya","9"]);         