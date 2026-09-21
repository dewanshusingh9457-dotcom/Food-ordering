/*
  ///////////////////////////////////////////////

  Profile Dropdown
 
  ///////////////////////////////////////////////
*/

const profile__menu = document.querySelector(".profile__menu");
const profileBtn = document.getElementById("profileBtn");

/*
  -----------------------------------------------
  Event Handlers
  -----------------------------------------------
*/

//Toggle the DropDown Menu and Scale the ProfieBtn
function toggleProfileDropdown(event) {
  event.target.classList.toggle("icon-hover"); // Toggle the icon hover for profileBtn
  event.target.classList.toggle("icon-active"); //Scale the profileBtn
  if (profile__menu) {
    profile__menu.classList.toggle("profile__menu-active");
  }
}

//Closes Profile Dropdown Menu
function closeProfileDropdown(event) {
  if (profileBtn && event.target.id != "profileBtn") {
    if (profile__menu && profile__menu.classList.contains("profile__menu-active")) {
      profileBtn.classList.remove("icon-active");
      profileBtn.classList.toggle("icon-hover");
      profile__menu.classList.remove("profile__menu-active");
    }
  }
}

/*
  -----------------------------------------------
  Event Listeners
  -----------------------------------------------
*/

//Adding Click Event on ProfileBtn
if (profileBtn) {
  profileBtn.addEventListener("click", toggleProfileDropdown);
}

// Adding Click Event on Document to Close Profile Dropdown
document.addEventListener("click", closeProfileDropdown);
