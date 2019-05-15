
let orderBy = document.getElementById("orderBy");
let order = document.getElementById("order");
let handsome = document.getElementById("handsome");
let sortData;
window.onload = function () {
  sort();
}
const doInnerHTML = function () {
  if(handsome.checked == true){
    for (let i = 0; i < sortData.length; i++) {
      if(sortData[i].handsome == true){
        document.getElementsByTagName("tbody")[0].innerHTML += (
          '<tr>' +
          '<td>' + sortData[i].id + '</td>' +
          '<td>' + sortData[i].name + '</td>' +
          '<td>' + sortData[i].height + '</td>' +
          '<td>' + sortData[i].weight + '</td>' +
          '<td>' + sortData[i].handsome + '</td>' +
          '</tr>'
        );
      }
    }
  } else {
    for (let i = 0; i < sortData.length; i++) {
      document.getElementsByTagName("tbody")[0].innerHTML += (
        '<tr>' +
        '<td>' + sortData[i].id + '</td>' +
        '<td>' + sortData[i].name + '</td>' +
        '<td>' + sortData[i].height + '</td>' +
        '<td>' + sortData[i].weight + '</td>' +
        '<td>' + sortData[i].handsome + '</td>' +
        '</tr>'
      );
    }
  }
}
orderBy.onchange = function(){
  sort();
}
order.onchange = function(){
  sort();
}
handsome.onclick = function(){
  sort();
  console.log(handsome.checked);
}
const sort = function () {
  let orderByValue = document.getElementById("orderBy").value;
  let orderValue = document.getElementById("order").value;
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  if(orderByValue == 'height' && orderValue == 'desc'){
    sortData = DATA_TABLE.sort(function (a, b) {
      return b.height - a.height
    });
  } else if(orderByValue == 'weight' && orderValue == 'desc') {
    sortData = DATA_TABLE.sort(function (a, b) {
      return b.weight - a.weight
    });
  } else if(orderByValue == 'height' && orderValue == 'asc') {
    sortData = DATA_TABLE.sort(function (a, b) {
      return a.height - b.height
    });
  } else if(orderByValue == 'weight' && orderValue == 'asc') {
    sortData = DATA_TABLE.sort(function (a, b) {
      return a.weight - b.weight
    });
  }
  doInnerHTML();
}
