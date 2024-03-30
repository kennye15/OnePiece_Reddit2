const commont = document.querySelector('input');
const submitBtn = document.querySelector('.sup2');
const commentCount = document.querySelector('#commentCount');
const webAd = document.querySelector('.web-ad');

submitBtn.addEventListener('click', () => {
    console.log(commont.value);
    
    const newComment = document.createElement('p');
    newComment.innerText = '我 : '+commont.value;
    newComment.classList.add('ad1');

    webAd.append(newComment);

    commentCount.innerText = webAd.childElementCount;

    commont.value='';
});

const backToTopBtn = document.querySelector('#backToTop');
const subscribeBtn = document.querySelector('#subscribe');
const popupWrapper = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');


backToTopBtn.addEventListener('click', () =>{
    console.log('click');
    scrollTo(0,0);
});

subscribeBtn.addEventListener('click', () => {
    popupWrapper.classList.remove('hide');
});

popupWrapper.addEventListener('click', () => {
    popupWrapper.classList.add('hide');
});

closeBtn.addEventListener('click', () => {
    popupWrapper.classList.add('hide');
});

popup.addEventListener('click', (e) => {
    e.stopPropagation();
});