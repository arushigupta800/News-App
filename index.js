
function getNews(country,category)
{
    document.getElementById("news").innerHTML="";
    fetch("https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=0e863b53b4c24314b1dc24182e89fb55")
.then((response)=> {
    return response.json();
})
.then((data)=> {
    
    let news= data.articles;
    console.log(news);

    news.forEach((n,index )=> {

        //creating newscard div
        let newsCard= document.createElement("div");
        newsCard.classList.add("news_card");

        //creating news_img div
        let newsImg= document.createElement("div");
        newsImg.classList.add("news_img");

        //creating img element 
        let img= document.createElement("img");
        img.setAttribute("src", n.urlToImage);

        // adding the image in the newsimg div as child
        newsImg.appendChild(img);

        //creating news_details div
        let newsDetails= document.createElement("div");
        newsDetails.classList.add("news_detail");

        //title h1
        let title=document.createElement("h1");
        title.classList.add("title");
        title.append(n.title);

        //author p
        let author=document.createElement("p");
        author.classList.add("author");
        author.append(n.author);

        //content p
        let content=document.createElement("p");
        content.classList.add("content");
        content.append(n.description);
        //adding anchor tag for link
        let link=document.createElement("a");
        link.setAttribute("href", n.url); 
        link.setAttribute("target", "blank")


        //button btn
        let button=document.createElement("button");
        button.classList.add("btn");  
        button.append("Read full article");

        //adding button in link
        link.appendChild(button);

        //adding content in news details
        newsDetails.appendChild(title);
        newsDetails.appendChild(author);
        newsDetails.appendChild(content);
        newsDetails.appendChild(link);


        //adding news_img and news_details in news_card
        newsCard.appendChild(newsImg);
        newsCard.appendChild(newsDetails);

        document.getElementById("news").appendChild(newsCard);
    });

})
.then((err)=> {
    console.log(err);
})

}

getNews("in","business");

function search()
{
    let country = document.getElementById("country").value;
    let category = document.getElementById("category").value;

    // console.log(country);
    // console.log(category);
    getNews(country,category);


}
