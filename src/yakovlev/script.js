window.onload = function(){
    for (let i = 0; i < 9; i++) {
        document.getElementById('play').innerHTML+='<div class="block"></div>';
    }

    let step = 0;

    document.getElementById('play').onclick = function(click){
        if (click.target.className === "block"){
            if (step % 2 === 0) {
                click.target.innerHTML = 'x';
            }
            else {
                click.target.innerHTML = 'o';
            }
            step++;
            win();
        }
    };

    function win(){
        let allblock = document.getElementsByClassName('block');

        if (allblock[0].innerHTML=='o' && allblock[1].innerHTML=='o' && allblock[2].innerHTML=='o') alert('O Win!');
        if (allblock[3].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[5].innerHTML=='o') alert('O Win!');
        if (allblock[6].innerHTML=='o' && allblock[7].innerHTML=='o' && allblock[8].innerHTML=='o') alert('O Win!');
        if (allblock[0].innerHTML=='o' && allblock[3].innerHTML=='o' && allblock[6].innerHTML=='o') alert('O Win!');
        if (allblock[1].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[7].innerHTML=='o') alert('O Win!');
        if (allblock[2].innerHTML=='o' && allblock[5].innerHTML=='o' && allblock[8].innerHTML=='o') alert('O Win!');
        if (allblock[0].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[8].innerHTML=='o') alert('O Win!');
        if (allblock[2].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[6].innerHTML=='o') alert('O Win!');

        if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') alert('X Win!');
        if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') alert('X Win!');
        if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') alert('X Win!');
        if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') alert('X Win!');
        if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') alert('X Win!');
        if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') alert('X Win!');
        if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') alert('X Win!');
        if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') alert('X Win!');

    }

};
