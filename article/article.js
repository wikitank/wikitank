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

// TankDown
{
    function TankDown(e){let a=e;return a=a.replace(/;#(\.\[(.*)\])? (.*)/g,'<h1 class="$2">$3</h1>'),a=a.replace(/;##(\.\[(.*)\])? (.*)/g,'<h2 class="$2">$3</h2>'),a=a.replace(/;###(\.\[(.*)\])? (.*)/g,'<h3 class="$2">$3</h3>'),a=a.replace(/;####(\.\[(.*)\])? (.*)/g,'<h4 class="$2">$3</h4>'),a=a.replace(/;%(\d+)(\.\[(.*)\])? (.*)/g,'<div class="center-image"><img class="h$1 $3" src="$4"/></div>'),a=a.replace(/;%(\d+)%(\d+)(\.\[(.*)\])? (.*)/g,'<iframe width="$1" height="$2" src="$5" class="$4"></iframe>'),a=a.replace(/;(\.\[(.*)\])? (.*)/g,'<p class="$2">$3</p>'),a=a.replace(/;\*\*(.*)/g,"</ul>"),a=a.replace(/;\*(\.\[(.*)\])?(.*)/g,'<ul class="$2">'),a=a.replace(/;- (.*)/g,"<li>$1</li>"),a=a.replace(/s{ ?(.*?) ?}(\.\[(.*?)\])?/g,'<span class="$3">$1</span>'),a=a.replace(/\[(.*)\]\((.*)\)(\.\[(.*)\])?/g,'<a class="$4" href="$2">$1</a>'),a=a.replace(/---/g,"<hr>"),a}
    const main = document.getElementById("main");
    main.innerHTML = TankDown(main.innerHTML);
}

// highlighting
// {
//     const keywords = JSON.parse(localStorage.getItem("keywords")) || [];

//     const main = document.getElementsByTagName("main")[0];

//     const textNodes = [];
//     const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT)
//     while(walker.nextNode()) 
//     {
//         textNodes.push(walker.currentNode);
//     }

//     for(let i = 0; i < textNodes.length; i++)
//     {
//         let filteredKeywords = keywords.filter(k => k.node === i);
//         let sortedKeywords = filteredKeywords.sort((a, b) => { return a.index - b.index });
//         if(sortedKeywords.length !== 0)
//         {
//             let innerHTML = textNodes[i].parentElement.innerHTML;
//             let offset = 0;
//             for(let k of sortedKeywords)
//             {
//                 for(let j = 0; j < k.content.length; j++)
//                 {
//                     innerHTML[k.index + j] = k.content[j];
//                     let output = innerHTML.substring(0, k.index) + "<span class=\"highlighted\">" + innerHTML.substring(k.index);
//                     offset += 26;
//                     output = output.substring(0, k.index + offset + k.content.length) + "</span>" + output.substring(k.index + offset + k.content.length);
//                     offset += 7;
//                     innerHTML = output;
//                 }
//             }

//             textNodes[i].parentElement.innerHTML = innerHTML;
//         }

//         console.log(textNodes[i]);
//     }

//     const highlighter = document.getElementById("highlight");
//     highlighter.addEventListener("click", () => 
//     {
//         const selection = window.getSelection();
//         const content = selection.toString();
//         if(content === "") return;
//         if(selection.anchorNode !== selection.focusNode) return alert("Highlight can't span paragraphs nor other highlights.")

//         const node = textNodes.indexOf(selection.anchorNode);
//         console.log(selection);
//         const range = selection.getRangeAt(0);
//         keywords.push({ node: node, index: range.startOffset, content: content });

//         const span = document.createElement("span");
//         span.classList.add("highlighted");

//         range.surroundContents(span);
//     });

//     window.addEventListener("unload", () => 
//     {
//         localStorage.setItem("keywords", JSON.stringify(keywords));
//     });
// }