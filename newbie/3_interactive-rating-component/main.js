const form = document.querySelector("form");
const rating = document.getElementById("rating"); // template
const thankYou = document.getElementById("thank-you"); // template

form.appendChild(rating.content.cloneNode(true));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const value = formData.get("rating");
  form.innerHTML = "";
  form.classList.add("completed");
  form.appendChild(thankYou.content.cloneNode(true));
  form.querySelector("b").textContent = value;

  setTimeout(() => {
    form.classList.remove("completed");
    form.innerHTML = "";
    form.appendChild(rating.content.cloneNode(true));
  }, 3000);
});
