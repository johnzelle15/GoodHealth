function changeImage() {
    // let icon = document.getElementById('menu-icon');
    let img = document.getElementById('left-nav').style;
    let temp = document.getElementById('side').style;
    let temp1 = document.getElementById('toggle').style;
    if(window.innerWidth > 768) {
        temp.display = "block";
        temp1.transform = "rotate(180deg)";
    }
    if (window.innerWidth <= 768) {
        img.visibility = "hidden";
        document.getElementById("menu-icon").src = "logo/humburger.png";
    } else if(window.innerWidth > 768) {
        img.visibility = "visible";
    } else {
        img.visibility = "hidden";
    } 

}

window.onresize = changeImage;
window.onload = changeImage;

// icon.src = "mySchool\ProjectWebsite\logo\close.png";
//change the humbergur icon and the visibiliy of left-nav;
document.getElementById("menu-icon").addEventListener('click', function() {
    let x = document.getElementById("left-nav").style;
    if(x.visibility == "hidden") {
        x.visibility = "visible";
        // this.style.backgroundColor = "red";
        this.src = "logo/close.png";
        this.style.width = "24px";
    } else {
        x.visibility = "hidden";
        this.src = "logo/humburger.png";
    }
});

//thsi control when the left navigation visible when clic outside the navigation except the top navigation the left navigation will be hidden
let arr = [document.getElementById('mains'),document.getElementById('side')];
arr.forEach(function(elem,ind) {
    
    elem.addEventListener('click', function() {
        let x = document.getElementById("left-nav").style;
        if(x.visibility == "visible" && window.innerWidth <= 768) {
            x.visibility = "hidden";
            document.getElementById('menu-icon').src = "logo/humburger.png";
        }
    });
}
);
//controls the right side navigation bar and the transition of arrow
document.getElementById('toggle').addEventListener('click',function() {
    let x = document.getElementById("side").style;
    if(x.display == "block") {
        x.visibility = "visible";
        x.display = "none";
        this.style.transform = "rotate(0deg)";
    } else {
        x.display = "block";
        this.style.transform = "rotate(180deg)";
    }
}) 