// WAIT UNTIL PAGE LOADS
document.addEventListener("DOMContentLoaded", function(){

  const API_URL = "http://localhost:3000";
  let selectedCrisis = null;
  let isAnon = false;
  let locationData = null; // FIX: was overwriting window.location which broke location.reload()

  // CRISIS SELECT
  window.selectCrisis = function(el){
    document.querySelectorAll(".crisis-card").forEach(e => e.classList.remove("selected"));
    el.classList.add("selected");
    selectedCrisis = el.dataset.type;
  }

  // ANON TOGGLE
  window.toggleAnon = function(){
    isAnon = !isAnon;
    const track = document.querySelector(".toggle-track");
    const thumb = document.querySelector(".toggle-thumb");
    thumb.style.transform = isAnon ? "translateX(24px)" : "translateX(0)";
    track.style.background = isAnon ? "#2D7EFF" : "#1A2035";
  }

  // LOCATION
  window.detectLocation = function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        document.querySelector(".loc-title").textContent = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
        document.querySelector(".loc-sub").textContent = "Location detected ✓";
        locationData = { lat: latitude, lng: longitude }; // FIX: use separate variable
      }, () => {
        alert("Could not detect location. Please allow location access.");
      });
    } else {
      alert("Geolocation not supported by this browser.");
    }
  }

  // SUBMIT — FIX: must be async to use await
  window.submitReport = async function(){

    if (!selectedCrisis) {
      alert("Please select a crisis type.");
      return;
    }

    const name     = document.querySelector('input[placeholder="Enter your name"]').value.trim() || "Anonymous";
    const phone    = document.querySelector('input[placeholder="Enter phone number"]').value.trim() || "N/A";
    const description = document.querySelector("textarea").value.trim();
    const time     = document.querySelector('input[type="datetime-local"]').value;
    const location = locationData ? `${locationData.lat}, ${locationData.lng}` : "Not provided";

    if (!description || !time) {
      alert("Please fill in the description and time of incident.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type:        selectedCrisis,
          name:        isAnon ? "Anonymous" : name,
          phone:       isAnon ? "N/A" : phone,
          description,
          time,
          location
        })
      });

      const data = await res.json();

      if (data.success) {
        document.getElementById("formView").style.display = "none";
        const successScreen = document.querySelector(".success-screen");
        successScreen.style.display = "flex";
        document.querySelector(".report-id-value").textContent = data.id;
      } else {
        alert("Submission failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to connect to the server. Make sure the server is running on port 3000.");
    }
  }

  // NEW REPORT — FIX: was using window.location (object) which was overwritten; now safe
  window.newReport = function(){
    window.location.reload();
  }

});
