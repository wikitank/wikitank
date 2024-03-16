const articles = 
[
 // [ Title, Link, Category ]
    [ "Quadratic Equations", "article/math/quad_equ.html", "Math" ],
    [ "Logarithms", "article/math/logarithms.html", "Math" ],
    [ "Digestion", "article/biology/digestion.html", "Biology" ]
];

const searchBar = document.getElementById("search-bar");
const resultsBar = document.getElementById("results");
searchBar.addEventListener("input", () => 
{
    resultsBar.innerHTML = "";
    
    if(searchBar.value === "") 
    { 
        resultsBar.classList.add("inactive"); 
        searchBar.classList.remove("active"); 
        return; 
    } else 
    { 
        resultsBar.classList.remove("inactive"); 
        searchBar.classList.add("active"); 
    };
    
    const results = articles.filter(a => { return a[0].toLowerCase().includes(searchBar.value.toLowerCase()) });
    if(results.length === 0) { resultsBar.classList.add("inactive"); searchBar.classList.remove("active"); return; };
    for(let result of results)
    {
        const element = document.createElement("a");
        element.innerHTML = `<span class="result-category">${ result[2] }/</span>${ result[0] }`;
        element.href = result[1];
        resultsBar.append(element);
    }
});