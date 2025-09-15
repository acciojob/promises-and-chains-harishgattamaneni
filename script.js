let promiseBelow18 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Oh sorry. You aren't old enough.");
    }, 4000);
});

let promiseAbove18 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Welcome, you can vote.");
    }, 4000);
});


function submit(event) {
    event.preventDefault(); // stop form reload

    let age = parseInt(document.getElementById("age").value);
    let name = document.getElementById("name").value;

    if(!isNaN(age) && name !== ""){
        if(age < 18){
            promiseBelow18.then((data)=>{
                alert(data);
            });
        }else{
            promiseAbove18.then((data)=>{
                alert(data);
            });
        }
    }else{
        alert("Please enter valid details.");
    }
}