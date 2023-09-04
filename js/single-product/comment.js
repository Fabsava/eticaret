function commentStarFunch() {
  const star = [...document.querySelectorAll(".star")];
  star.forEach((item) =>
    item.addEventListener("click", function (e) {
      e.preventDefault();
      star.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    })
  );
}

function addNewComment() {
  const commentlist = document.querySelector(".comment-list");
  const commenttext = document.getElementById("comment-text");
  const commentname = document.getElementById("comment-name");
  const email = document.getElementById("email");

  const reviewbutton = document.getElementById("review-button");

  reviewbutton.addEventListener("click", function () {
    const text = commenttext.value.trim();
    const name = commentname.value.trim();
    const mail = email.value.trim();
    const stars = [...document.querySelectorAll(".stars .active i")];
    let result = "";

    result += `
  <li class="comment-item">
    <div class="comment-avatar">
    <img src="../img/avatars/avatar1.jpg" alt="" />
    </div>
    <div class="comment-text">
    <ul class="comment-star">
        ${getstart(stars)}
        
        
    </ul>
    <div class="comment-meta">
        <strong>${name}</strong>
        <span>-</span>
        <time>April 23, 2022</time>
    </div>
    <div class="comment-description">
        <p>
        ${text}
        </p>
    </div>
    </div>
</li>
  `;
    commentlist.innerHTML += result;
    commentname.value = "";
    commenttext.value = "";
    email.value = "";
  });
}

function getstart(star) {
  let mal = "";
  for (let i = 0; i < star.length; i++) {
    mal += `<li>
        <i class="bi bi-star-fill"></i>
      </li>`;
  }
  return mal;
}

export function commentFuch() {
  commentStarFunch();
  addNewComment();
}
