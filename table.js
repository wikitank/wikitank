const tree = `
<ul class="tree">
    <li class="root math">
        <details>
            <summary>Mathematics</summary>
            <ul>
                <li>
                    <details>
                    <summary>Quadratic Equations</summary>
                    <ul>
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>
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
                    <li>Writing...</li>
                </ul>
                </details>
            </li>
            <li>
                <details>
                <summary>Psychology</summary>
                <ul>
                    <li>Writing...</li>
                </ul>
                </details>
            </li>
            <li>
                <details>
                <summary>Social Sciences</summary>
                <ul>
                    <li>Writing...</li>
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
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>Computer Science</summary>
                    <ul>
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>Physics</summary>
                    <ul>
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Chemistry</summary>
                    <ul>
                        <li>Writing...</li>
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
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>English B</summary>
                    <ul>
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Swedish</summary>
                    <ul>
                        <li>Writing...</li>
                    </ul>
                    </details>
                </li>   
                <li>
                    <details>
                    <summary>日本語</summary>
                    <ul>
                        <li>Writing...</li>
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

barium.add(table);
barium.initial();