const allLis = document.querySelectorAll('li')
const colors = ['black', 'purple','blue', 'red', 'green', 'grey']

for(let i = 0; i < allLis.length; i++){
  allLis[i].innerText = 'New Content'
}

for(let li of allLis){
  li.innerHTML = '<b>Cette fois en Gras</b>'
}

allLis.forEach((li, index) =>{
  li.style.color = colors[index]
})