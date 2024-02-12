const addCommentBtn = document.querySelector('#addCommentBtn');
const commentTextBody = document.querySelector('#userComment');
const submitBtn = document.querySelector('#submitBtn');

addCommentBtn.addEventListener('click', function(){
    commentTextBody.classList.replace('hide', 'show');
});

submitBtn.addEventListener('click', function(){
    
});