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
    const keywords = [ { node: 26, index: 0, content: "The mouth" } ];

    const main = document.getElementsByTagName("main")[0];

    const textNodes = [];
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT)
    while(walker.nextNode()) 
    {
        textNodes.push(walker.currentNode);
    }

    for(let keyword of keywords)
    {
        let index = textNodes[keyword.node].textContent.indexOf(keyword.content);
        if(keyword.node <= textNodes.length && textNodes[keyword.node].textContent.includes(keyword.content) && index !== -1 && index === keyword.index)
        {
            const range = new Range();
            range.setStart(textNodes[keyword.node], index);
            range.setEnd(textNodes[keyword.node], index + keyword.content.length);

            const span = document.createElement("span");
            span.classList.add("highlighted");

            range.surroundContents(span);
        }
    }

    const highlighter = document.getElementById("highlight");
    highlighter.addEventListener("click", () => 
    {
        const selection = window.getSelection();
        const content = selection.toString();
        if(content === "") return;
        if(selection.anchorNode !== selection.focusNode) return alert("Highlight can't span paragraphs nor other highlights.")
    });
}