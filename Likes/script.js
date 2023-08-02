var post1 = document.querySelector("#post-1")
var post2 = document.querySelector("#post-2")
var post3 = document.querySelector("#post-3")

function like(num){
    if (num==0) {
        post1.innerText=parseInt(post1.innerText) +1
    }
    else if (num==1){
        post2.innerText=parseInt(post2.innerText) +1
    }

    else if (num==2) {
        post3.innerText+parseInt(post3.innerText) +1
    }
}