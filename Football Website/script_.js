var wasChanged = false; 

function toggleDarkMode() {
    const body = document.body;

    if (!wasChanged) {
        body.classList.add("DarkMode");
        wasChanged = true; 
    } 
    else {
        body.classList.remove("DarkMode"); 
        wasChanged = false; 
    }
}

