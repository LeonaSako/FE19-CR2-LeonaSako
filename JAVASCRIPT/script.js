const tasks = [{
    name: "Reading a book",
    img: "../images/book.jpg",
    description: "Take the desired book from the library and read it",
    importance: 0,

    Deadline: "Deadline: 25.07.2023",
}, {
    name: "Going to Cinema",
    img: "../images/cinema.jpg",
    description: "Watch the new Marvel movie",
    importance: 2,
    Deadline: "Deadline: 22.08.2023",
}, {
    name: "Coding",
    img: "../images/code1.jpg",
    description: "Finish the code review",
    importance: 3,
    Deadline: "Deadline: 01.07.2023",
}, {
    name: "Go to the gym",
    img: "../images/fitness.jpg",
    description: "keep in shape by going to the gym",
    importance: 0,
    Deadline: "Deadline: 14.07.2023",

}, {
    name: "Cut the hair",
    img: "../images/hair.jpg",
    description: "go to the hairdresser and get a haircut",
    importance: 0,
    Deadline: "Deadline: 03.07.2023",


}, {
    name: "Hiking",
    img: "../images/hiking.jpg",
    description: "Go to the mountains for health and fresh air",
    importance: 2,
    Deadline: "Deadline: 13.08.2023",


}, {
    name: "Dancing",
    img: "../images/zumba-4333580_640.jpg",
    description: "Go to Zumba classes",
    importance: 5,
    Deadline: "Deadline: 20.08.2023",


}, {
    name: "Lunch",
    img: "../images/LUNCH.jpg",
    description: "Go to lunch with old friends",
    importance: 1,
    Deadline: "Deadline: 20.07.2023",


}, {
    name: "Playing guitar",
    img: "../images/Playing-guitar.jpg",
    description: "Practice playing the guitar for 2 hours ",
    importance: 4,
    Deadline: "Deadline: 15.07.2023",

}];



function render() {
    for (let whatever of tasks) {
        document.getElementById("result").innerHTML += `
<div class = "card g-3 g-3">


<div class = "Task-container d-flex justify-content-between">  

<button type="button" class="btn btn-lg btn-primary" disabled>Task</button>

<div class = "icons-Task-container pt-3" >
<i class="bi bi-bookmark"></i>
<i class="bi bi-three-dots-vertical"></i>
</div> 
</div> 


    <img src  = "${whatever.img}"class = "card-img-top"alt = "...">
    <div class = "card-body">
    <h5 class = "card-title">${whatever.name}  </h5>
    <p class = "border-bottom ">${whatever.description}  </p> 
    <div class="priority-container d-flex">
    <i class="bi bi-exclamation-triangle-fill "></i>
    <p class="px-1" >Priority level:  </p> 
    <span class="importance  px-2 py-1">${whatever.importance}</span>

    </div> 

    <div class="deadline-container ">
    <i class="bi bi-calendar-week"></i> 
    <span class="px-1">${whatever.Deadline}</span>

    </div> 
    <p class = "border-bottom "></p> 

    
<div class= "bottom-buttons d-flex justify-content-end">
<button type="button" class="btn btn-danger mx-1"> <i class="bi bi-trash "></i> Delete</button>
<button type="button" class="btn btn-success"> <i class="bi bi-check-circle"></i> Done</button>
    
    </div> 


    </div> 
`;
    }

    const btns = document.getElementsByClassName("importance");
    for (let i = 0; i < btns.length; i++) {
        if (tasks[i].importance == 0 || tasks[i].importance == 1) {
            document.getElementsByClassName("importance")[i].style.backgroundColor = "green";
        } else if (tasks[i].importance == 2 || tasks[i].importance == 3) {
            document.getElementsByClassName("importance")[i].style.backgroundColor = "yellow";
        } else {
            document.getElementsByClassName("importance")[i].style.backgroundColor = "red";
        }
    }



    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            if (tasks[i].importance < 5) {
                tasks[i].importance++;

                document.getElementsByClassName("importance")[i].innerHTML = tasks[i].importance;
                if (tasks[i].importance == 0 || tasks[i].importance == 1) {
                    document.getElementsByClassName("importance")[i].style.backgroundColor = "green";
                } else if (tasks[i].importance == 2 || tasks[i].importance == 3) {
                    document.getElementsByClassName("importance")[i].style.backgroundColor = "yellow";
                } else {
                    document.getElementsByClassName("importance")[i].style.backgroundColor = "red";
                }



            } else {
                alert("5 is the max value");
            }



        })
    }
}
render();

function sortAscending() {
    tasks.sort(function(a, b) {
        if (a.importance < b.importance) {
            return -1;
        }
        if (a.importance > b.importance) {
            return 1;
        }
        return 0;
    });
    document.getElementById("result").innerHTML = "";
    render();

}

function sortDescending() {
    tasks.sort(function(a, b) {
        if (a.importance > b.importance) {
            return -1;
        }
        if (a.importance < b.importance) {
            return 1;
        }
        return 0;
    });
    document.getElementById("result").innerHTML = "";
    render();


}

function sortAZ() {
    tasks.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    document.getElementById("result").innerHTML = "";
    render();


}

function sortZA() {
    tasks.sort(function(a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    });
    document.getElementById("result").innerHTML = "";
    render();


}

function handleSort() {
    const selectValue = document.getElementById("select-sort").value;

    if (selectValue == "asc") {
        sortAscending();
    }
    if (selectValue == "dsc") {
        sortDescending()
    }
    if (selectValue == "a-z") {
        sortAZ()
    }
    if (selectValue == "z-a") {
        sortZA()
    }
}

document.getElementById("select-sort").addEventListener("change", handleSort)