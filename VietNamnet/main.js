var postApi = 'http://localhost:3000/news';

function run(){
    getNews(renderNews);
    createMoreNews();
};

run();

// function 
function getNews(callback){
    fetch(postApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

// sau khi da lay duoc news => render
function renderNews(newsList){
    var ulContainer = document.getElementById("news-container");
    var htmls = newsList.map(function(newsItem){
        return `
            <li class = "news-item-${newsItem.id}"> 
                <h1>${newsItem.name}</h1>
                <p> ${newsItem.description}</p>
                <button onclick ="deleteNews(${newsItem.id})"> Delete </button>
            </li>`;
    });
    ulContainer.innerHTML = htmls.join('');
}

// ham gui news len server
function postNews(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };
    fetch(postApi,options)
            .then(function(response){
                response.json();
            })
            .then(callback)
}

// ham xu li gui them tin
function createMoreNews(){
    var createBtn = document.getElementById("create");
    createBtn.onclick = function(){
        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;
        var formObj = {
            name: name, 
            description: description
        }
        postNews(formObj,getNews(renderNews));
    };
}

// ham xu li khi bam nut xoa
function deleteNews(id){
    var option_delete = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    fetch(postApi+'/'+id, option_delete)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var newsItem = document.querySelector('.news-item-'+id);
            if (newsItem){{
                newsItem.remove();
            }}
        });
}