
let buttonLoadMore = document.querySelector('#LoadMore');
let currentItem = 3;

function clickedButton(){
   let boxes = [...document.querySelectorAll('.section1 .article .articleBox')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
    buttonLoadMore.style.display = 'none';
    }
}




