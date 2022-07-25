const invitationTitle = document.querySelector(".invitation-title");

invitationTitle.innerHTML = `${localStorage.getItem("username")}, Welcome to the Pasadise`;

