// Fetch:
// API (URL): application programing interface: giao diện lập trình ứng dụng => cổng giao tiếp ứng dụng 
// backend -> API -> Fetch -> JSON -> JSON.parse() -> JS type -> render ra giao diện với HTML

var postApi = 'http://localhost:3000/course';

fetch(postApi)
    .then(function(response){
        return response.json(); // tra ve  promise
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                    <h2>${post.name}</h2>
                    <p>${post.description}</p>
                    `;
        });
        var html = htmls.join('');
        document.getElementById('cmt-block').innerHTML = html;
    })
