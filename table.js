const tree = `
<ul class="tree">
    <li class="root math">
        <details>
            <summary>Mathematics</summary>
            <ul>
<<<<<<< HEAD
                <li>
                    <details>
                    <summary>Quadratic Equations</summary>
                    <ul>
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Logarithms</summary>
                    <ul>
                        <li><a href="article/math/how_to_solve.html">Exercises. How to Solve?</a></li>
                        <li><a href="article/math/logarithms.html">Logaritms</a></li>
                    </ul>
                    </details>
                </li>
=======
                <li><a href="article/math/quad_equ.html">Quadratic Equations</a></li>
                <li><a href="article/math/logarithms.html">Logarithms</a></li>
>>>>>>> 55d5516d2c0f7a539f25e41212226c3785c06410
            </ul>
        </details>
    </li>
    <li class="root ss">
        <details>
        <summary>Human Sciences</summary>
        <ul>
            <li>
                <details>
                <summary>Business Management</summary>
                <ul>
                    <li><a>Writing</a></li>
                </ul>
                </details>
            </li>
            <li>
                <details>
                <summary>Psychology</summary>
                <ul>
                    <li><a>Writing</a></li>
                </ul>
                </details>
            </li>
            <li>
                <details>
                <summary>Social Sciences</summary>
                <ul>
                    <li>
                        <details>
                        <summary>Swedish Politics</summary>
                        <ul>
                            <li>
                                <details>
                                <summary>Taxes</summary>
                                <ul>
                                    <li><a class="gdoc">Socialist taxes</a></li>
                                    <li><a class="gdoc">Liberalist taxes</a></li>
                                    <li><a class="gdoc">Conservatist taxes</a></li>
                                </ul>
                                </details>
                            </li>
                        </ul>
                        </details>
                    </li>
                </ul>
                </details>
            </li>
        </ul>
        </details>
    </li>
    <li class="root sc">
        <details>
            <summary>Sciences</summary>
            <ul>
                <li>
                    <details>
                    <summary>Biology</summary>
                    <ul>
                        <li><a href="article/biology/digestion.html">Digestion</a></li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>Computer Science</summary>
                    <ul>
                        <li><a>Writing</a></li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>Physics</summary>
                    <ul>
                        <li><a>Writing</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Chemistry</summary>
                    <ul>
                        <li><a>Writing</a></li>
                    </ul>
                    </details>
                </li>   
            </ul>
        </details>
    </li>
    <li class="root lang">
        <details>
            <summary>Languages</summary>
            <ul>
                <li>
                    <details>
                    <summary>English A</summary>
                    <ul>
                        <li><a>Writing</a></li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>English B</summary>
                    <ul>
                        <li><a>Writing</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Swedish</summary>
                    <ul>
                        <li><a>Writing</a></li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>日本語</summary>
                    <ul>
                        <li><a class="chain" href="https://www.tofugu.com/japanese-grammar/">Tofugu Grammar</a></li>
                    </ul>
                    </details>
                </li>   
            </ul>
        </details>
    </li>
</ul>
`;

// Barium
const table = new barium.tag("tree", () => 
{
    return [ tree, "div" ]
});

const modifiedTree = tree.replace(/href="(.*)"/g, "href=\"../../$1\"");
const article_table = new barium.tag("article_tree", () => {
    return [ modifiedTree, "div" ]
});

barium.add(table);
barium.add(article_table);
barium.initial();