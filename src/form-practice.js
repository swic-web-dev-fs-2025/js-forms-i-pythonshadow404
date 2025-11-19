import "./style.css";

function Results(data) {
  console.info(Object.entries(data));

  return `<ul class="space-y-1 text-sm">
        ${Object.entries(data)
          .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
          .join("")}
      </ul>
        `;
}

const form = document.querySelector("form");

// Same pattern as 'clicks', but for 'submit' events.
form.addEventListener("submit", (event) => {
  // No, browser! WE will handle this. Stop your default behavior.
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.info(data);
});
