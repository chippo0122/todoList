var data = [];
var str = "";
var el = document.querySelector('#insert');
var check = document.querySelector('#check');
var list = document.querySelector('.output');
window.onresize = function(e){
  document.querySelector('.container').style.height = window.innerHeight + 'px';
};
document.querySelector('.insert-sec').addEventListener('keydown', kbChecking, false);
check.addEventListener('click', checking, false);
list.addEventListener('click', del, false);
function checking(e){
  if(el.value.length <2 ){
    alert('字元數至少2字以上');
    return;
  };
  data.push({
    content: el.value,
  });
  save();
}
function kbChecking(e){
  if(e.keyCode == 13){
    checking();
  };
}
function save(e){
  localStorage.setItem('todoList',JSON.stringify(data));
  write();
  el.value = "";
}
function write(e){
  var buffer = JSON.parse(localStorage.getItem('todoList'));
  for(var i =0 ; i<buffer.length; i++){
     str += '<li class="op-item" data-num="'+ i +'"><p>' + buffer[i].content +'</p><a id="del" href="#"><i class="fas fa-trash-alt"></i></a></li>';
  };
  list.innerHTML = str;
  str = "";
};
function del(e){
  if(e.target.nodeName =="I"){
    var getNum = e.target.parentElement.parentElement.dataset.num;
    data.splice(getNum, 1);
  }
  save();
}