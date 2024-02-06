const addCommentBtn = document.querySelector('#addCommentBtn');
const commentTextBody = document.querySelector('#userComment');

addCommentBtn.addEventListener('click', function(){
    commentTextBody.classList.replace('hide', 'show');
});