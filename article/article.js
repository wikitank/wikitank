// bookmarking
{
    const bookmarkButton = document.getElementById("bookmark");
    function toggleBookmark() 
    {
        bookmarkButton.classList.toggle("active");

        let currentPage = window.location.href;
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        
        let index = bookmarks.indexOf(currentPage);
        if (index === -1) 
        {
            bookmarks.push(currentPage);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        } else 
        {
            bookmarks.splice(index, 1);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }
    }

    if(JSON.parse(localStorage.getItem('bookmarks'))?.includes(window.location.href))
    {
        bookmarkButton.classList.add("active");
    } else { bookmarkButton.classList.remove("active"); };
}

// highlighting
{
    const keywords = JSON.parse(localStorage.getItem("keywords")) || [];

    const main = document.getElementsByTagName("main")[0];

    const textNodes = [];
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT)
    while(walker.nextNode()) 
    {
        textNodes.push(walker.currentNode);
    }

    for(let i = 0; i < textNodes.length; i++)
    {
        let filteredKeywords = keywords.filter(k => k.node === i);
        let sortedKeywords = filteredKeywords.sort((a, b) => { return a.index - b.index });
        if(sortedKeywords.length !== 0)
        {
            let innerHTML = textNodes[i].parentElement.innerHTML;
            let offset = 0;
            for(let k of sortedKeywords)
            {
                for(let j = 0; j < k.content.length; j++)
                {
                    innerHTML[k.index + j] = k.content[j];
                    let output = innerHTML.substring(0, k.index) + "<span class=\"highlighted\">" + innerHTML.substring(k.index);
                    offset += 26;
                    output = output.substring(0, k.index + offset + k.content.length) + "</span>" + output.substring(k.index + offset + k.content.length);
                    offset += 7;
                    innerHTML = output;
                }
            }

            textNodes[i].parentElement.innerHTML = innerHTML;
        }

        console.log(textNodes[i]);
    }

    const highlighter = document.getElementById("highlight");
    highlighter.addEventListener("click", () => 
    {
        const selection = window.getSelection();
        const content = selection.toString();
        if(content === "") return;
        if(selection.anchorNode !== selection.focusNode) return alert("Highlight can't span paragraphs nor other highlights.")

        const node = textNodes.indexOf(selection.anchorNode);
        console.log(selection);
        const range = selection.getRangeAt(0);
        keywords.push({ node: node, index: range.startOffset, content: content });

        const span = document.createElement("span");
        span.classList.add("highlighted");

        range.surroundContents(span);
    });

    window.addEventListener("unload", () => 
    {
        localStorage.setItem("keywords", JSON.stringify(keywords));
    });
}