const articles = 
[
//  [ Title, Link, Category ]
    [ "Quadratic Equations", "article/math/quad_equ.html", "Math" ],
    [ "Logarithms", "article/math/logarithms.html", "Math" ],
    [ "Circulatory System", "article/biology/circulatory_system.html", "Biology" ],
    [ "Blood", "article/biology/blood.html", "Biology" ],
    [ "Ventilation", "article/biology/ventiolation.html", "Biology" ],
    [ "Digestion", "article/biology/digestion.html", "Biology" ],
    [ "Useful Links", "article/biology/links.html", "Japanese" ],
    [ "Environmental Ethics: 1", "article/social_science/env_ethics1.html", "Social Sciences" ],
    [ "Environmental Ethics: 2", "article/social_science/env_ethics2.html", "Social Sciences" ],
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