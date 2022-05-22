// Event Listener
// everytime onClick of button it will go into Call Stack
document.getElementById("clickMe")
    .addEventListener("click", function callBack() {
        console.log("Button Clicked")
    })

// Closures Demo with Event Listners
/* Show how many times button clicked */
function attachEventListners() {
    let count = 0;
    document.getElementById("clickMe")
        .addEventListener("click", function callBack() {
            console.log("Button Clicked", ++count)
        })
}

attachEventListners();

// Why do we need to remove eventListners?
// Garbage Collection & removeEventListners
/* We need to remove eventListners because they consumes
memory...like for count once we click on button and not need
to get count++ it will still be saved in memory.
When we remove these event Listners the variables attached to
it are garbage collected */