var users = [
    {
        id: 1,
        name: 'Trang'
    },
    {
        id: 2,
        name: 'Anh'
    },
    {
        id: 3,
        name: 'Bao'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Nguyen Thi Huyen Trang'
    },
    {
        id: 2,
        user_id: 2, 
        content: 'Nguyen Thi Van Anh'
    }
];

// 1 .Lấy cmt
// 2. Từ cmt lấy ra user_id
// 3. từ user_id lấy ra user tương ứng

// Fake API
function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        },1000);
    });
}

// từ user_id lấy ra user tương ứng
function getUsers(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        });
        setTimeout(function(){
            resolve(result);
        },1000);
    });
}

getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id;
        });
        return getUsers(userIds)
                .then(function(users){
                return {
                    users: users,
                    comments: comments
                }; // tra ve mang co chua cac users co comment can lay
                });
    })
    .then(function(data){
        var cmtBlock = document.getElementById('cmt-block');
        var html = '';
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
            cmtBlock.innerHTML = html;  
        });
    })

