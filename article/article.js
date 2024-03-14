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