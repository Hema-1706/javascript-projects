const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("searchBtn");

const profileContainer =
  document.getElementById("profileContainer");

const errorMessage =
  document.getElementById("errorMessage");

async function getProfile(username) {

  try {

    errorMessage.textContent = "";

    profileContainer.innerHTML = "";

    const url =
      `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    profileContainer.innerHTML = `
    
      <div class="profile-card">

        <img src="${data.avatar_url}" alt="Profile">

        <h2>${data.name}</h2>

        <p>${data.bio || "No bio available"}</p>

        <p>Followers: ${data.followers}</p>

        <p>Following: ${data.following}</p>

        <p>Public Repos: ${data.public_repos}</p>

        <a href="${data.html_url}" target="_blank">
          Visit Profile
        </a>

      </div>

    `;

  }

  catch (error) {

    errorMessage.textContent = error.message;

  }

}

searchBtn.addEventListener("click", () => {

  const username = searchInput.value.trim();

  if (username !== "") {

    getProfile(username);

  }

});