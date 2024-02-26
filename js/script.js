
const toggleBtn = document.querySelector("#toggle-button");
const dropdownMenu = document.querySelector("#dropdown-menu");
const datePlace = document.querySelector("#date");
const profileBtn = document.querySelector("#profile-btn");
const profileModal = document.querySelector("#profile-modal");

//modal
const search = document.querySelector("#search-btn");
const searchModal = document.querySelector("#search-modal");
const closeBtn = document.querySelector("#close-btn")

const handleclick = ()=>{
    if(searchModal.classList.contains("hidden")){
        searchModal.classList.remove("hidden");
        searchModal.classList.add("flex");
    }
    else{
        searchModal.classList.remove("flex");
        searchModal.classList.add("hidden");
    }
}


const handleClose = ()=>{
    searchModal.classList.remove("flex");
    searchModal.classList.add("hidden");
}
const handleDate = () => {
    const foundatioYear = 2023;
    const currentYear = new Date().getFullYear();

    datePlace.textContent = ` ${foundatioYear} - ${currentYear} `;
}
const handleToggle = () => {
    dropdownMenu.classList.toggle("top-16");
}
const handleProfileBtn = ()=>{
    profileModal.classList.toggle("top-16");
}

document.addEventListener("DOMContentLoaded", () => {
    //Profile Button Events
    profileBtn.addEventListener("click",handleProfileBtn);

    // Search Button Events
    search.addEventListener("click", handleclick);


    // Close Button Events
    closeBtn.addEventListener("click",handleClose);
    
    //Date handling
    handleDate();
    
    // hamburger button toggle Event
    toggleBtn.addEventListener("click", handleToggle);
});