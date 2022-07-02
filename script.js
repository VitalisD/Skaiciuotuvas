document.querySelector('#suma').addEventListener('click', function (){
    //console.log ('mygtukas');
    let skaičius1
    let skaičius2
    skaičius1 = parseFloat(document.querySelector('#skaičius1').value);
    skaičius2 = parseFloat(document.querySelector('#skaičius2').value);
    let atsakymas1
    atsakymas1 = skaičius1 + skaičius2
    console.log (atsakymas1)
    document.querySelector('.rezultatas').innerHTML = (atsakymas1);

});

document.querySelector('#atimtis').addEventListener('click', function (){
    let skaičius1
    let skaičius2
    skaičius1 = parseFloat(document.querySelector('#skaičius1').value);
    skaičius2 = parseFloat(document.querySelector('#skaičius2').value);
    let atsakymas2
    atsakymas2 = skaičius1 - skaičius2
    console.log (atsakymas2)
    document.querySelector('.rezultatas').innerHTML = (atsakymas2);
});

document.querySelector('#daugyba').addEventListener('click', function (){
    let skaičius1
    let skaičius2
    skaičius1 = parseFloat(document.querySelector('#skaičius1').value);
    skaičius2 = parseFloat(document.querySelector('#skaičius2').value);
    let atsakymas3
    atsakymas3 = skaičius1 * skaičius2
    console.log (atsakymas3)
    document.querySelector('.rezultatas').innerHTML = (atsakymas3);
});

document.querySelector('#dalyba').addEventListener('click', function (){
    let skaičius1
    let skaičius2
    skaičius1 = parseFloat(document.querySelector('#skaičius1').value);
    skaičius2 = parseFloat(document.querySelector('#skaičius2').value);
    let atsakymas4
    atsakymas4 = skaičius1 / skaičius2
    console.log (atsakymas4)
    document.querySelector('.rezultatas').innerHTML = (atsakymas4);
});