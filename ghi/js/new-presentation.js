window.addEventListener("DOMContentLoaded", async () => { // window(browser), addEventListener waits for an event to happen(in this case, DOMContentLoaded) 
    const url = "http://localhost:8000/api/conferences/"; // Assigning URL to HTML file?
  
    const response = await fetch(url); // Promising the browser to fetch the URL?
  
    if (response.ok) { // if response(a promise is met) then...continue on
      const data = await response.json(); // if a promise is fulfilled, translate response into JSON format?
  
      const selectTag = document.getElementById("conference"); // returns an element object based on the string specified?
      for (let conference of data.conferences) { // a for loop that's looping data.conferences

        const option = document.createElement("option"); // creates an element(option) inside document?
  
        option.value = conference.id; // assigning value to conference ID
  

        option.innerHTML = conference.name; // assigning innerHTML to conference name
  
 
        selectTag.appendChild(option); // appends "option" to a child tag?
      }
    }
  
    const formTag = document.getElementById("create-presentation-form");
    formTag.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const formData = new FormData(formTag);
      const json = JSON.stringify(Object.fromEntries(formData));
      const conferenceSelect = document.getElementById("conference");
      const presentationUrl = `http://localhost:8000/api/conferences/${conferenceSelect.value}/presentations/`;
      const fetchConfig = {
        method: "post",
        body: json,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(presentationUrl, fetchConfig);
      if (response.ok) {
        formTag.reset();
        const newPresentation = await response.json();
        console.log(newPresentation)
      }
    });
});
  