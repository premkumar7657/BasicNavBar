const menuBar = document.getElementById("menubar");
const closeBar = document.getElementById("closebar");
const menuItems = document.getElementById("menuitems");


menuBar.addEventListener("click", ()=>{
   // console.dir(menuBar);
    // menuItems.className="bg-blue-500 md:block";
    // menuBar.classList.add("hidden");
    // closeBar.classList.remove("hidden");
    menuItems.classList.toggle("hidden");
    closeBar.classList.toggle("hidden");
    menuBar.classList.toggle("hidden");
});

closeBar.addEventListener("click", ()=>{
    // menuItems.className="bg-blue-500 md:block hidden";
    // closeBar.classList.add("hidden");
    // menuBar.classList.remove("hidden");
    menuItems.classList.toggle("hidden");
    closeBar.classList.toggle("hidden");
    menuBar.classList.toggle("hidden");
});

