const API_KEY = "AIzaSyDBVd3zS1Tq1WgIX-6t-cu1u4NC1ieD8jY";  // paste your API key here
const CX = "7745a7ff7682459c";                // paste your Search Engine ID here

document.addEventListener("DOMContentLoaded", () => {
    const query = new URLSearchParams(window.location.search).get("q");
    const searchBox = document.getElementById("searchBox");
    if (searchBox) searchBox.value = query;

    if (query) {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(query)}`)
            .then(res => res.json())
            .then(data => {
                const resultsContainer = document.getElementById("results");
                resultsContainer.innerHTML = "";
                if (data.items) {
                    data.items.forEach(item => {
                        resultsContainer.innerHTML += `
                            <div class="result">
                                <a href="${item.link}" target="_blank">${item.title}</a>
                                <p>${item.snippet}</p>
                            </div>
                        `;
                    });
                } else {
                    resultsContainer.innerHTML = "<p>No results found</p>";
                }
            })
            .catch(err => console.error(err));
    }
});
