const btnCloseArray = document.querySelectorAll('.btn-close');
const arrProducts = Array.from(btnCloseArray).map(btnClose => btnClose.addEventListener('click', onCrossClick));

function onCrossClick(){
    this.parentNode.parentNode.remove();
    const btnCloseArrayNew = document.querySelectorAll('.btn-close');
    if(btnCloseArrayNew.length === 0)
        document.querySelector('.wishlist-empty-container').style.display = 'flex';
}
