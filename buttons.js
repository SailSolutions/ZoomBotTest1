//Buttons
var profiles = document.getElementById("profile");
var task = document.getElementById("tasks");
var checkout = document.getElementById("checkout");
var proxies = document.getElementById("proxies");

//Screens
var profilePanel = document.getElementById("profilePanel");
var taskPanel = document.getElementById("taskPanel");
var checkoutPanel = document.getElementById("checkoutPanel");
var proxiesPanel = document.getElementById("proxiesPanel");

//Bool to check if buttons are selected
var taskSelect, checkoutSelect, proxySelect;

profile.addEventListener("click", profileOpen)
task.addEventListener("click", taskOpen);
checkout.addEventListener("click", checkoutOpen);
proxies.addEventListener("click", proxiesOpen);

function taskOpen() {
    console.log("Bruh");

    taskPanel.style.display = "inline-block";
    checkoutPanel.style.display = "none";
    proxiesPanel.style.display = "none";
    profilePanel.style.display = "none";
}

function checkoutOpen() {
    console.log("checkout Open");
    checkoutPanel.style.display = "inline-block";
    taskPanel.style.display = "none";
    proxiesPanel.style.display = "none";
    profilePanel.style.display = "none";
}

function proxiesOpen() {
    console.log("proxies Open");
    proxiesPanel.style.display = "inline-block";
    taskPanel.style.display = "none";
    checkoutPanel.style.display = "none";
    profilePanel.style.display = "none";
}

function profileOpen() {
    console.log("proxies Open");
    profilePanel.style.display = "inline-block";
    proxiesPanel.style.display = "none";
    taskPanel.style.display = "none";
    checkoutPanel.style.display = "none";
}