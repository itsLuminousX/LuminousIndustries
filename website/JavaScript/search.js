document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const results = document.getElementById("searchResults");

  // Collect searchable text from the page
  const searchableContent = Array.from(document.querySelectorAll("h1, h2, h3, p"))
    .map(el => ({ text: el.textContent, element: el }));

  searchBox.addEventListener("keyup", () => {
    const query = searchBox.value.toLowerCase();
    results.innerHTML = "";

    if (query.length < 2) {
      results.textContent = "Type at least 2 characters to search.";
      return;
    }

    const matches = searchableContent.filter(item =>
      item.text.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      results.textContent = "No results found.";
    } else {
      matches.forEach(match => {
        const div = document.createElement("div");
        div.className = "search-result";
        div.textContent = match.text;
        results.appendChild(div);

        // Highlight the matching element on the page
        match.element.style.backgroundColor = "#ffff99";
      });
    }
  });
});

