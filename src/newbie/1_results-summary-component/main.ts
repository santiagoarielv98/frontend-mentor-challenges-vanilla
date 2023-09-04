import type { Score } from "./type";

const list = document.getElementById("list")!;
const score = document.getElementById("score")!;

fetch("/data/results.json", { cache: "force-cache" }).then((response) => {
  response.json().then((data: Score[]) => {
    const total = data.reduce((acc, item) => acc + item.score, 0);
    score.innerHTML = Math.round(total / data.length).toString();
    data.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("item");
      li.classList.add(item.category);
      li.innerHTML = `
        <div class="item__left">
          <img src="${item.icon}" alt="${item.category}" width="20" height="20" />
          <span>${item.category}</span>
        </div>
        <div class="item__right">
          <b>${item.score}</b>
          <span>/ 100</span>
        </div>
      `;
      list.appendChild(li);
    });
  });
});
