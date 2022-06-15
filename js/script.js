{
    'use strict';

    const titleClickHandler = function(event) {
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!');
        console.log(event);

        /* [DONE]remove class 'active' from all article links  */
        const activeLinks = document.querySelectorAll('.titles a.active');

        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }
        console.log(activeLinks);

        /* [IN PROGRESS] add class 'active' to the clicked link */
        clickedElement.classList.add('active');
        console.log('clickedElement:', clickedElement);

        /*[DONE] remove class 'active' from all articles */
        const activeArticles = document.querySelectorAll('.post.active');
        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }
        /* get 'href' attribute from the clicked link */
        const articleSelector = document.getElementById('href');
        const href = clickedElement.getAttribute('href');
        console.log(href);

        /* find the correct article using the selector (value of 'href' attribute) */
        const targetArticle = document.querySelector(href);
        console.log(targetArticle);

        /* add class 'active' to the correct article */
        targetArticle.classList.add('active');
    };

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

    function generateTitleLinks() {
        /* remove contents of titleList */
        let titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';

        /* find all the articles and save them to variable: articles */
        const articles = document.querySelectorAll(optArticleSelector);
        console.log(articles);

        let html = '';

        for (let article of articles) {
            const articleId = article.getAttribute('id');

            /* get the title from the title element */
            const articleTitle = article.querySelector(optTitleSelector).innerHTML;

            /* create HTML of the link */
            const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
            console.log(linkHTML);

            /* insert link into html variable */
            html = html + linkHTML;
            console.log(html);
            html;
        }

        titleList.innerHTML = html;
    }

    generateTitleLinks();

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}







/*{
    'use strict';
    /*document.getElementById('test-button').addEventListener('click', function() {
        const links = document.querySelectorAll('.titles a');
        console.log('links:', links);
    }); 
     */

// 1. FUNNKCTION TITLECLICKHANDLER 

/*const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    //[DONE] remove class 'active'
    from all article links * /
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    console.log(activeLinks)

    // [IN PROGRESS] add class 'active' to the clicked link 
clickedElement.classList.add('active');
console.log('clickedElement:', clickedElement);

//[DONE] remove class 'active' from all articles 
const activeArticles = document.querySelectorAll('.post.active');
for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
}
// get 'href' attribute from the clicked link 
const articleSelector = document.getElementById("href")
const href = clickedElement.getAttribute('href');
console.log(href);

// find the correct article using the selector (value of 'href' attribute) 
const targetArticle = document.querySelector(href);
console.log(targetArticle);

// add class 'active' to the correct article 
targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}

// 2. function generateTitleLinks !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* const optArticleSelector = '.post',
         optTitleSelector = '.post-title',
         optTitleListSelector = '.titles';

     function generateTitleLinks() {

         remove contents of titleList * /
         const titleList = document.querySelector(optTitleSelector);
         titleList.classList.remove('active');


         function clearMessages() {
             titleList.innerHTML = '';
         }
         console.log(titleList)

         /* for each article 
    const article = document.querySelector(optArticleSelector)
    for (let articles of article) {}

    /* get the article id 

    const articleId = article.getAttribute('id');

    /* find the title element
    const articleTitleElement = article.querySelector(optTitleSelector);

    /* get the title from the title element 
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link 
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML)

    /* insert link into titleList 
    titleList.innerHTML = titleList.innerHTML + linkHTML;

}

    generateTitleLinks();

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {
    // remove contents of titleList //
let titleList = document.querySelector(optTitleListSelector);
titleList.innerHTML = '';

// find all the articles and save them to variable: articles 
const articles = document.querySelectorAll(optArticleSelector);
console.log(articles);

let html = '';

for (let article of articles) {
    const articleId = article.getAttribute('id');


    // find the title element 
const articleTitleElement = article.querySelector(optTitleSelector);

// get the title from the title element 
const articleTitle = article.querySelector(optTitleSelector).innerHTML;

// create HTML of the link 
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log(linkHTML)

// insert link into html variable 
html = html + linkHTML;
console.log(html)
html
}

titleList.innerHTML = html;
}
''
generateTitleLinks();
}*/