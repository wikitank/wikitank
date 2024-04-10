// Bookmarks
{
    const bookmarkButton = document.getElementById("bookmark");
    const pageTitle = document.getElementById("title").innerHTML;

    function toggleBookmark() 
    {
        bookmarkButton.classList.toggle("active");  

        let currentPage = window.location.href;
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        
        let index = bookmarks.findIndex(item => item[0] === currentPage && item[1] === pageTitle);
        
        if (index === -1) 
        {
            bookmarks.push([currentPage, pageTitle]);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        } else
        {
            bookmarks.splice(index, 1);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }
    }

    if(JSON.parse(localStorage.getItem('bookmarks'))?.some(item => item[0] === window.location.href && item[1] === pageTitle))
    {
        bookmarkButton.classList.add("active");
    } else 
    { 
        bookmarkButton.classList.remove("active"); 
    }
}

// TankDown
{
    function TankDown(e){let a=e;return a=a.replace(/;#(\.\[(.*)\])? (.*)/g,'<h1 class="$2">$3</h1>'),a=a.replace(/;##(\.\[(.*)\])? (.*)/g,'<h2 class="$2">$3</h2>'),a=a.replace(/;###(\.\[(.*)\])? (.*)/g,'<h3 class="$2">$3</h3>'),a=a.replace(/;####(\.\[(.*)\])? (.*)/g,'<h4 class="$2">$3</h4>'),a=a.replace(/;%(\d+)(\.\[(.*)\])? (.*)/g,'<div class="center-image"><img class="h$1 $3" src="$4"/></div>'),a=a.replace(/;%(\d+)%(\d+)(\.\[(.*)\])? (.*)/g,'<iframe width="$1" height="$2" src="$5" class="$4"></iframe>'),a=a.replace(/;(\.\[(.*)\])? (.*)/g,'<p class="$2">$3</p>'),a=a.replace(/;\*\*(.*)/g,"</ul>"),a=a.replace(/;\*(\.\[(.*)\])?(.*)/g,'<ul class="$2">'),a=a.replace(/;- (.*)/g,"<li>$1</li>"),a=a.replace(/s{ ?(.*?) ?}(\.\[(.*?)\])?/g,'<span class="$3">$1</span>'),a=a.replace(/\[(.*)\]\((.*)\)(\.\[(.*)\])?/g,'<a class="$4" href="$2">$1</a>'),a=a.replace(/---/g,"<hr>"),a}
    const main = document.getElementById("main");
    main.innerHTML = TankDown(main.innerHTML);
}