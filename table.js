const footerHTML = `
<div class="credits">
    <h2>WikiTank</h2>
    <p class="credits">By Noel Nimstad & Mzhahid Sibai</p>
</div>
<div class="footer-links">
    <a href="../../index.html">Home</a>
    <br>
    <a href="../bookmark/bookmark.html">Bookmarks</a>
</div>
`;

const tree = `
<ul class="tree">
    <li class="root math">
        <details>
            <summary>Mathematics</summary>
            <ul>
                <li><a href="article/math/quad_equ.html">Quadratic Equations</a></li>
                <li><a href="article/math/logarithms.html">Logarithms</a></li>
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
                        <summary>Lectures</summary>
                        <ul>
                            <li><a href="article/social_science/env_ethics1.html">Environmental Ethics: 1</a></li>
                            <li><a href="article/social_science/env_ethics2.html">Environmental Ethics: 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>    
                        <details>
                        <summary>Swedish Politics</summary>
                            <ul>
                                <li>
                                <details>
                                    <summary>Taxes</summary>
                                    <ul>
                                        <li><a class="gdoc" href="https://docs.google.com/document/d/1hodvCH_iAncN_BMAoXrpXhzZFcTu1O2zNGkmxpUXCXA/edit?usp=sharing">Socialist taxes</a></li>
                                        <li><a class="gdoc" href="https://docs.google.com/document/d/1S6Lv9STvT0ccPfrvxucx8mXH_iXsLSpTVlw8Jizgw6k/edit">Liberalist taxes</a></li>
                                        <li><a class="gdoc" href="https://docs.google.com/document/d/1NAXipwokGdphBdbH3phXfROsfvD73wCjaSJvafVMvl0/edit">Conservatist taxes</a></li>
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
                        <li>
                            <details>
                            <summary>Human physiology</summary>
                                <ul>
                                    <li><a href="article/biology/blood.html">Blood</a></li>
                                    <li><a href="article/biology/circulatory_system.html">Circulary system</a></li>
                                    <li><a href="article/biology/digestion.html">Digestion</a></li>
                                    <li><a href="article/biology/ventilation.html">Ventilation</a></li>
                                    <li><a href="article/biology/immune_sys.html">Immune system</a></li>
                                    <li><a href="article/biology/endocrine_system.html">Endocrine system</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>Computer Science</summary>
                    <ul>
                        <li><a href="article/cs/t1.html">Systems in Organisations</a></li>
                        <li><a href="article/cs/t2.html">Computer Organisation</a></li>
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
                        <li><a href="article/japanese/links.html">日本語リンク集</a></li>
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
const footer = new barium.tag("page_footer", () => 
{
    return [ footerHTML, "footer" ];
});

const table = new barium.tag("tree", () => 
{
    return [ tree, "div" ]
});

const article_table = new barium.tag("article_tree", () => 
{
    return [ tree.replace(/(?<!class="(chain|gdoc)" )href="(.*)"/g, "href=\"../../$2\""), "div" ];
});

barium.add(footer);
barium.add(table);
barium.add(article_table);
barium.initial();