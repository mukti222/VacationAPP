(function(){
     
    "use strict";

    var detailsForm = document.querySelector('#destinationdetail');
//mengarah ke form
detailsForm.addEventListener('submit', handleFormSubmit);
//tombol submit dijadikan ke handleFormsubmit

function handleFormSubmit(event){
    event.preventDefault();

    //extract value dari setiap isian html & mencocokan
    var destName = event.target.elements['name'].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;


    //clear form isian
    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }

    //membuat var utk card
    var destCard = createDestinationCard
    (destName, destLocation, destPhoto, destDesc);
    //ambil dari kumpulan var di handleFormsubmit
    var wishListContainer = document.getElementById('destinationcontainer');
    //merubah Title
    if (wishListContainer.children.length === 0) {
        document.getElementById('title').innerHTML = "My Wish list";}

    document.querySelector('#destinationcontainer').appendChild(destCard);
} //menambah destcard menjadi child dari destination container 

// menambahkan kartu
function createDestinationCard(name, location, photoURL, description) {
    var card = document.createElement('div');
    //membuat element ke html bagian div
    card.className = 'card';
    //class di card

    var img = document.createElement('img');
    img.setAttribute('alt', name);
    //membuat element ke img
    //jika gambar tidak muncul maka muncul tulisan name(fungsi alt)

    var constantPhotoURL = "images/signpost.png";

    if (photoURL.length === 0) {
        img.setAttribute('src', constantPhotoURL);}
        //mengset var img isinya jadi constanphotourl
    else {img.setAttribute('src', photoURL);}
        //mengatur atribut src ISINYA JADI PhotoURL
    card.appendChild(img);


    var cardBody = document.createElement("div");
    //cardbody = div
    cardBody.className = "card-body";
    //classname = mengatur  nilai class html card-body

    var cardTitle = document.createElement("h3");
    //cardtitle = h3
    cardTitle.innerHTML = name; //name dari html
    cardBody.appendChild(cardTitle);
    //menambahkan cardtitle menjadi child dari cardbody 

    var cardSubtitle = document.createElement("h4");
    //cardsub = h4
    cardSubtitle.innerHTML = location; //location dari html
    cardBody.appendChild(cardSubtitle);
    //nambah cardsubtitle menjadi child dari cardbody

    if (description.length !== 0) {
        var cardText = document.createElement("p");
        //cardtext = <p>
        cardText.className = "card-text";
        //classname = mengatur  nilai class sprti html card-text
        cardText.innerText = description;
        // mengatur teks pada cardText dengan nilai dari description.
        cardBody.appendChild(cardText);
        // cardtext menjadi child dari cardbody
    }

    var cardDeletebtn = document.createElement("button");
    //buat element button
    cardDeletebtn.innerText = "Remove";
    //mengatur teks pada carddeletebtn dengan nilai dari remove.

    cardDeletebtn.addEventListener("click", removeDestination);
    //di carddeletebtn tambahkan fungsi klik dan removedestination
    cardBody.appendChild(cardDeletebtn);
    //cardeletebutton jadika child dari cardbody

    card.appendChild(cardBody);
    // card jadikan child dari cardBody

    return card;
    //return card
}

function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
}

/*
fungsi removedestination utk hapus card
event.target mengacu pada elemen HTML yang 
menjadi sumber atau target dari event tersebut, 
yaitu elemen yang memicu pemanggilan fungsi removeDestination

event.target.parentElement.parentElement digunakan untuk mengakses 
elemen induk kedua atau elemen "parent" dari elemen induk pertama.
 Dalam konteks ini, kita ingin mengakses elemen kartu (card) 
 yang menjadi elemen "parent" dari elemen cardBody.

card.remove() adalah metode yang digunakan untuk menghapus 
elemen dari tampilan atau menghapusnya dari struktur dokumen 
HTML. Di sini, card.remove() digunakan untuk menghapus elemen
 kartu (card) dari tampilan, sehingga tidak akan ditampilkan lagi.
*/
})();





