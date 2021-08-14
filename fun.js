// like part 
const click = document.getElementById('like');
let count = 0;
click.onclick = function() {
count += 1;
click.innerHTML =`<i class="fas fa-thumbs-up">Like:<strong>${count}</strong> </i>`;
}

// comment part
document.getElementById('commentBtn').addEventListener('click', function(){
  const commentColor = document.getElementById('commentBtn');
  commentColor.style.color= 'white';
  commentColor.style.background='MediumBlue';
  const commnetSection = document.getElementById('comment-part');
  commnetSection.classList.toggle('d-none');
});


document.getElementById('addText').addEventListener('click', function(){

const parant1 = document.getElementById('album');
const commentCount =  parant1.childElementCount-2;
document.getElementById('comCount').innerText=commentCount;


const div = document.createElement('div');
div.className ='d-flex align-items-center my-3';

const img = document.createElement('img');
img.setAttribute("src", "images/shanto.jpg");
img.className = "img-fluid rounded-circle me-2";
img.style.width = '30px';
div.appendChild(img);

const span = document.createElement('span');
span.className='d-inline-block text-green span';
const getInputText = document.getElementById('commentText');
span.innerHTML= getInputText.value;
div.appendChild(span);
getInputText.value='';

const parant = document.getElementById('album');
parant.appendChild(div);

});

// share part 
const share = document.getElementById('share');
let count1 = 0;
share.onclick = function() {
count1 += 1;
share.innerHTML =`<i class="fas fa-share">Share: <strong>${count1}</strong></i>`;
}


/* document.getElementById('addText').addEventListener('click', function(){
  const storeText = document.createElement('h5');
  storeText.className='bg-info text-white';
  const getInputText = document.getElementById('commentText');
  storeText.innerHTML= getInputText.value;
  const comment = document.getElementById('comment-text');
  comment.appendChild(storeText);
  storeText.classList.add('commentAdd');
  getInputText.value='';
}); */