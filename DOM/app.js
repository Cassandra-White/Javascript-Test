const allLis = document.querySelectorAll('li')

for(let i = 0; i < allLis.length; i++){
  allLis[i].innerText = 'New Content'
}

for(let li of allLis){
  li.innerHTML = '<b>Cette fois en Gras</b>'
}