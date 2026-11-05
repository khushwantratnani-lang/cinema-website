// simple helper functions (not advanced)
console.log("JS is running");

// go to booking page
function goBooking(price){
  localStorage.setItem("price", price);
  window.location = "booking.html";
}

// filter movies (basic)
function filterMovies(){
  let input = document.getElementById("search").value.toLowerCase();

  document.querySelectorAll(".movie").forEach(m => {
    let text = m.innerText.toLowerCase();
    m.style.display = text.includes(input) ? "block" : "none";
  });
}