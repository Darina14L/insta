let dataLikes = [41, 93, 14]; 
let dataTexts = ["Очень красивые цветы!", "Делаю свое портфолио))", "После дождя вышла радуга!"] 
let dataImgs = ["post1.jpg", "site.jpg", "rainbow.jpg"] 
 
let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 
 
for(let i = 0; i < 100; i++){ 
    let newPost = originalPost.cloneNode(true); 
 
    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i%3]); 
 
    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0] 
    numberOfLikes.innerHTML = dataLikes[i%3]; 
 
    let postText = newPost.getElementsByClassName("postText")[0] 
    postText.innerHTML = dataTexts[i%3]; 
 
    let likeBtn = newPost.getElementsByClassName("likeBtn")[0] 
    likeBtn.setAttribute("onclick", "likes(" + i + ")") 
 
    korobkaPostov.appendChild(newPost); 
} 


function like(postIndex){ 
    let post = korobkaPostov.children[postIndex + 1]; // +1,
    let numberOfLikes = post.getElementsByClassName("numberOfLikes")[0];
    let currentLikes = parseInt(numberOfLikes.innerHTML);
    currentLikes++;
    numberOfLikes.innerHTML = currentLikes;
}

let c=0;
function like(i){
    c++;
    if(c%2!==0){
        document.getElementsByClassName('fonlike')[i+1].style.backgroundColor = "red";
    }
    else{
        let a = newPost.getElementsByClassName("a")[0] 
        a.setAttribute("onclick", "addComment(" + i + ")") 
        document.getElementsByClassName('fonlike')[i+1].style.backgroundColor = "white";
    }
}



function addComment(i) {
    var Input = document.getElementById('input'+i);
    var Text = Input.value;
    Input.value = "";

    if (Text.trim() !== "") {
        var List = document.getElementById('list'+i);
        var newComment = document.createElement("b");
        newComment.textContent = Text;
        List.appendChild(newComment);
    } else {
        alert("введите комментарий.");
    }
}
