const listCollection = document.getElementsByTagName("li");
console.log(listCollection);
for(const li of listCollection){
    console.log(li.innerText);
}

