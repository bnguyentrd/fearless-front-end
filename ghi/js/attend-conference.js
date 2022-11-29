window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');

    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }
      const spin = document.getElementById("loading-conference-spinner");
      spin.classList.add("d-none"); // Here, add the 'd-none' class to the loading icon
      selectTag.classList.remove("d-none"); // Here, remove the 'd-none' class from the selectTag
    }
    const formTag = document.getElementById("create-attendee-form");
    formTag.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(formTag);
      const json = JSON.stringify(Object.fromEntries(formData));
      // const conferenceSelect = document.getElementById("conference")
      const attendeeUrl = "http://localhost:8001/api/attendees/";
      const fetchConfig = {
        method: "post",
        body: json,
        headers: {
          "Content-Type": "application/json",
        },
      };
    const response = await fetch(attendeeUrl, fetchConfig);
    if (response.ok) {
      formTag.reset();
      document.getElementById("success-message").classList.remove("d-none");
      document.getElementById("create-attendee-form").classList.add("d-none")
    }
  });
});