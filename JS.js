const url = 'https://openapi.programming-hero.com/api/news/category/01';


const loadNews = () => {



     fetch(url)
          .then(res => res.json())
          .then(data => displayNews(data.data))


}



const displayNews = (data) => {



     const newsContainer = document.getElementById('NewsContainer');

     for (const news of data) {



          const newsDiv = document.createElement('div');

          newsDiv.innerHTML =

               `


               <div class="row g-3">
               <div class="col-md-4">

                 <img src="${news.image_url}" class="img-fluid rounded-start" alt="Loading...">

                 <br></br>
                 <br></br>

               </div>
               
               <div class="col">
               
                   
                   <h5 class="card-title">${news.title}</h5>
                   <br></br>
                   <p class="news-details">${news.details}</p>
                  
                   <p class="news-published_date">${news.author.name}${" "}<img src="eye.svg">${" "}${news.total_view}</p>
                 
        
               
               </div>

            






          `

          newsContainer.appendChild(newsDiv);




     }







};



loadNews();
