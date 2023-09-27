import blogArray from "./data.js";

const blogContainerEl = document.getElementById("blog-container-el")
document.getElementById("toggleMenuButton").addEventListener("click", toggleMenu);


function renderBlogGrid(){
    let blogGridHtml = ""
    blogArray.forEach(blog => {
        blogGridHtml += `
        <a class="blog-box">
            <article>
                <img class="blog-img" src="${blog.img}" alt="laptop computer picture">
                <span class="blog-date">${blog.date}</span>
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-preview">${blog.text}</p>
            </article>
        </a>

        `
    })
    return blogGridHtml
}
blogContainerEl.innerHTML = renderBlogGrid()

function toggleMenu(){
    let navElements = document.getElementById("myLinks")
    navElements.style.display = navElements.style.display === "block" ? "none" : "block"
}