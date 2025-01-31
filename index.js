document.addEventListener("DOMContentLoaded", () => {
  const githubUsername = "jgearhart27";
  const projectsContainer = document.getElementById("github-projects");
  const excludedRepos = [
    "express-digi",
    "jgearhart27",
    "learn-git",
    "open-source-11",
  ];

  async function fetchGitHubProjects() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${githubUsername}/repos`
      );
      const repositories = await response.json();

      projectsContainer.innerHTML = "";

      repositories.forEach((repo) => {
        if (!excludedRepos.includes(repo.name)) {
          const projectElement = document.createElement("div");
          projectElement.classList.add("project-card");

          projectElement.innerHTML = `<h3>${repo.name}</h3>
        <p>${
          repo.description ? repo.description : "No Description Available"
        }<p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>`;

          projectsContainer.appendChild(projectElement);
        }
      });
    } catch (error) {
      projectsContainer.innerHTML =
        "<p style='color: red;'>Failed to load projects</p>";
      console.error("Error fetching GitHub repositories:", error);
    }
  }
  fetchGitHubProjects();
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("form-response");

    if (email && message) {
      // Simulate form submission (replace with backend integration)
      console.log("Email:", email);
      console.log("Message:", message);

      response.style.display = "block";
      setTimeout(() => {
        response.style.display = "none";
        document.getElementById("contact-form").reset();
      }, 3000);
    } else {
      alert("Please fill out all fields.");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  fadeInElements.forEach((element) => observer.observe(element));
});
