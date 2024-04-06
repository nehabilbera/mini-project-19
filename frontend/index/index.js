function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  
//   function myFunction() {
//     document.getElementById("myDropdown2").classList.toggle("show2");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn2')) {
//     var myDropdown = document.getElementById("myDropdown2");
//       if (myDropdown.classList.contains('show2')) {
//         myDropdown.classList.remove('show2');
//       }
//     }
//   }
  