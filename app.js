var index = 0;
var pictures = [
                {
                    url: "http://beust.com/pics/halfdome.jpg",
                    title: "Yosemite Half Dome"
                },
                {
                    url: "http://images.techtimes.com/data/images/full/20757/gollum-of-the-lord-of-the-rings.jpg?w=600",
                    title: "Gollum"
                },
                {
                    url: "http://piq.codeus.net/static/media/userpics/piq_52987_400x400.png",
                    title: "Blinky Pinky Inky & Clyde"
                },
                {
                    url: "http://vignette2.wikia.nocookie.net/fantendo/images/0/01/Parashell.png/revision/latest/scale-to-width-down/221?cb=20110802122552",
                    title: "Mario Red Shell"
                }
               ]

var changePicture = function(){
    document.getElementById("main-picture").src = pictures[index].url;

    document.getElementById("picture-title").innerHTML = pictures[index].title;

    document.getElementById("picture-link").innerHTML = pictures[index].url;
    document.getElementById("picture-link").href = pictures[index].url;

};


document.getElementById("forward").addEventListener("click", function(){
    if(index === pictures.length-1){
        alert("There's no more at back!");
    }
    else{
        index = index + 1;
    }

    changePicture();
});

document.getElementById("back").addEventListener("click", function(){

    if(index === 0){
        alert("There's no more at front!");
    }
    else{
        index = index - 1;
    }

    changePicture();
});