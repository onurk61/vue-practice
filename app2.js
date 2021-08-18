const dummyData = [
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Antrenman Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst",
    discount: "254.00",
    price: "339.00",
  },
  {
    imgUrl:
      "https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg",
    title: "üüüüüüüüüüüüüüü",
    discount: "254.00",
    price: "339.00",
  },
];

let cardRow= document.getElementById("cardRow");

function deneme(data) {
  return data.map(item => {
    cardRow.innerHTML += `
    <div class="col-md-3">
    <a href="#" class="card mb-3 mt-3 p-0">
    <div class="card-image p-0 border-0">
        <img class="img-fluid" src="${item.imgUrl}" alt="${item.title}">
    </div>

    <div class="card-body p-0 border-0">
        <h4 class="card-title">${item.title}</h4>
    </div>

    <div class="card-footer p-0 border-0">
        <h5 class="price">${item.price}</h5>
        <h4 class="discount-price">${item.discount}</h4>
    </div>
    </a>
    </div>
`
  });
}

let _changeInterval = null;

function searchInput(event){

  clearInterval(_changeInterval);

   _changeInterval = setInterval(() => {
    event.preventDefault();
    cardRow.innerHTML = "";
    let inputSearch = document.getElementById("searchIn").value;
    let asd = dummyData.filter(item => {
      if(item.title.toLowerCase().includes(inputSearch.toLowerCase())){
        return item;
      }
    })
      deneme(asd);
      clearInterval(_changeInterval)
   }, 400);
}

function addItem(){
    let item = {
        title: 'Onur',
        imgUrl: 'https://fenerium.com/Fenerium/media/images/urunler/AT017EAS031BZ.jpg',
        price: '400',
        discount: '300'
    };
    dummyData.push(item);
    deneme([item]);
}

deneme(dummyData);