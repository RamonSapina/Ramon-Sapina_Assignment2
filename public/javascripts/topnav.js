  /* topnav.js
  This allows the anchoring of the selected top
  nav item.
  Student Name: Ramon J. Sapina
  Student ID: 301282055
  Date: 2023-06-27 */


  const currentLocation = location.href;
    const navItems = document.querySelectorAll(".topnav a");
    const navLength = navItems.length;
    for (let i = 0; i < navLength; i++) {
      if (navItems[i].href === currentLocation) {
        navItems[i].classList.add("active");
      }
    }