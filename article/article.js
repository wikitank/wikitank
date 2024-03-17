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
    const main = document.getElementsByTagName("main")[0];
    let highlights = JSON.parse(localStorage.getItem("highlights")) || [];

    const highlightButton = document.getElementById("highlight");
    highlightButton.addEventListener("click", () => 
    {
        let selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const content = selection.toString();

        if(range.startContainer !== range.endContainer) 
        {
            return alert("highlighting can't span over multiple paragraphs (or other highlights)!");
        }

        if(content !== "")
        {
            const span = document.createElement("span");
            span.classList.add("highlighted");

            range.surroundContents(span);

            const index = selection.focusNode.textContent.indexOf(content);
            highlights.push({ index: index, content: content, so: range.startOffset, eo: range.endOffset, l: content.length });

            span.addEventListener("click", e => 
            {
                e.preventDefault();
                span.classList.remove("highlighted");

                highlights.splice(highlights.indexOf({ index: index, content: content, so: range.startOffset, eo: range.endOffset, l: selection.focusNode.length }, 1));
            });
        }
    });

    function checkHilight(node)
    {
        for(let highlight of highlights)
        {            
            const index = node.textContent.indexOf(highlight.content);
            if(index !== -1 && index === highlight.index)
            {
                const range = document.createRange();
                range.setStart(node, index);
                range.setEnd(node, index + highlight.content.length);

                const span = document.createElement("span");
                span.classList.add("highlighted");
                range.surroundContents(span);

                span.addEventListener("click", e => 
                {
                    e.preventDefault();
                    span.classList.remove("highlighted");
    
                    highlights.splice(highlights.indexOf(highlight), 1)
                });
            }
        }
    }

    function traverseDocument(origin)
    {
        const walker = document.createTreeWalker(origin, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];

        while(walker.nextNode())
        {
            textNodes.push(walker.currentNode);
        }

        for(let node of textNodes)
        {
            checkHilight(node);
        }
    }

    traverseDocument(main);

    window.addEventListener("unload", () => 
    {
        localStorage.setItem("highlights", JSON.stringify(highlights));
    });
}