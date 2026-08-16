document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".tag-filter");
  const posts = document.querySelectorAll(".post-row");
  const empty = document.querySelector(".filter-empty");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visible = 0;

      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      posts.forEach((post) => {
        const tags = post.dataset.tags.split(" ").filter(Boolean);
        const show = filter === "all" || tags.includes(filter);
        post.hidden = !show;
        if (show) visible += 1;
      });

      if (empty) empty.hidden = visible !== 0;
    });
  });
});
