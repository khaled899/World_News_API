let data;
let title=[];
let btn=document.getElementById('btn')
async function getNews(countryCode,categoryCode) {
    //    return new Promise(function(callback){
    //     let myHttp = new XMLHttpRequest()
    //     myHttp.open('GET', `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${categoryCode}&apiKey=5dd21e75c9f34ba5904d235f0fae27f3`)
    //     myHttp.send()
    
    //     myHttp.addEventListener('readystatechange', function () {
    //         if (myHttp.readyState == 4) {
    //             data = JSON.parse(myHttp.response).articles
    //             display()
    //             callback()
    
    //         }
    
    //     })
    // })
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${categoryCode}&apiKey=5dd21e75c9f34ba5904d235f0fae27f3`)
        let json= await response.json()
        data=json.articles
        console.log(data);
        display()        
        //  .then(function(s){
        //   return s.json()
        //  })
        //  .then(function (u){
            // data=u.articles;
            // // console.log(data);
            // display()
        //  }) 
    }
  let links = document.querySelectorAll('ul li')
  for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click',function(e){
          // let x =links[i].getAttribute('mostafa')
          let cCode =e.target.getAttribute('countryCode')
          let categoryCode=e.target.getAttribute('categoryCode')
  
          // console.log(x);
          getNews(cCode,categoryCode)
      })
  }


    function display(){
    let link;    
    let content;
        let hamada =``
    for(let i =0 ; i < data.length ; i++) {
        title=data[i].title
        link = data[i].url
        content=data[i].content
        // let pContent=content.slice(0,500)
        // console.log(pContent);
        let cardTitle=title.split(' ')
        hamada += `<div class="news" id="news">
        <h2>${cardTitle[0]+" "+cardTitle[1]}</h2>
        <img src="${data[i].urlToImage}">
        <p>${data[i].content}</p>
        <a href="${link}">See More<span> >> </span></a>
        </div> `
    }

    document.getElementById('sec').innerHTML = hamada
    // console.log(title);
    }

let earth=document.getElementById('earth')
let text=document.getElementById('text')
let header=document.getElementById('header')
window.addEventListener('scroll',function(){
    let value =window.scrollY;
    earth.style.left=-value +'px';
    text.style.right=-value*1.05 +'px';
    header.style.top=-value*0.5 +'px';
    // header.style.opacity=0.1
})

// function news() {
//     let x = fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5dd21e75c9f34ba5904d235f0fae27f3')
//      .then(function(s){
//       return s.json()
//      })
//      .then(function (u){
//          console.log(u);
  
//      })
//   }
  
//   news()

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}