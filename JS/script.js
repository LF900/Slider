let left = $('.left');
let right = $('.right');
let pagination = $('.pagination');
let items = document.querySelectorAll('.slider-list__item');
// let queryItems = $('.slider-list__item');
let slideIndex = 0

function createPagination(){
    items.forEach((el, index)=>{
        pagination.append(`<div class="pagination__item" onclick="show(`+ index + `)"></div>`);
    })
}
createPagination()
function show(index){
    items.forEach(el=>{el.classList.remove('active')})
    items[index].classList.add('active');
}

show(slideIndex)
function minus(){
    if(slideIndex > 0){
        slideIndex = slideIndex-1
    }else{
        slideIndex = items.length-1
    }
    show(slideIndex);
}
function plus(){
 if(slideIndex < items.length-1){
     slideIndex = slideIndex + 1
 }else{
     slideIndex = 0
 }
 show(slideIndex);
}


left.click(()=>{
    minus();
})

right.click(()=>{
    plus();
})

console.log(left);
console.log(right);
console.log(items);
// console.log(queryItems);