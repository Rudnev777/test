import "./style-function.css";
const path_names = new Map([
  ["", "Главная"],
  ["index", "Главная"],
  ["auto_goods", "Автотовары"],
  ["auto_parts", "Автозапчасти"],
  ["tires", "Шины"],
  ["disks", "Диски"],
  ["battery", "Аккумуляторы"],
  ["detailling", "Детейлинг"],
]);

export function create_button_back() {
  const container = document.querySelector("header");
  const btn_back = document.createElement("button");
  btn_back.classList.add("button-back", "button-header");
  btn_back.textContent = "< ";
  btn_back.addEventListener("click", () => {
    window.history.back();
  });
  container?.prepend(btn_back);
}

export function create_header() {
  const container = document.querySelector("header");
  const section = document.createElement("section");
  const search_string = document.createElement("input");
  const btn_img_search = document.createElement("img");
  const btn_img_login_to_account = document.createElement("img");
  btn_img_login_to_account.alt = "👤";
  btn_img_login_to_account.src = "../public/people.png";
  btn_img_search.alt = "🔍";
  btn_img_search.src = "../public/search.png";
  btn_img_search.classList.add("button-img-header", "button-search");
  btn_img_login_to_account.classList.add("button-img-header");
  search_string.classList.add("search-string");
  section.classList.add("section-search-string");
  section.append(search_string, btn_img_search);
  container?.append(section);

  container?.append(btn_img_login_to_account);
}

export function create_breadcrumbs() {
  create_header();
  const container = document.querySelector("main");
  const section = document.createElement("section");
  section.classList.add("section-breadcrumbs");
  let str = window.location.pathname; // получаем путь от начала до данной страницы
  let array_path = [
    ...new Set(str.split("/").filter((item) => item != "index.html")),
  ];

  for (let i = 0; i < array_path.length; i++) {
    let a = document.createElement("a");
    a.classList.add("a-breadcrumb");
    let path = "/";
    for (let j = 0; j <= i; j++) {
      path += array_path[j];
      if (j != 0 && j != i) {
        path += "/";
      }
    }
    const key = array_path[i].replace(".html", "");

    a.textContent = path_names.get(key || array_path[i]) || "Ошибка";
    a.href = path;
    if (i == array_path.length - 1) {
      a.classList.add("a-breadcrumb-last");
    }
    section.append(a);
    if (i != array_path.length - 1) {
      let separation = document.createElement("span");
      separation.textContent = " - ";
      section.append(separation);
    } else {
      a.classList.add("a-breadcrumb-last");
    }
  }

  container?.prepend(section);
}

export function create_product_card() {
  const container = document.querySelector("main");

  let section = document.getElementById("section-product_card-id");
  if (!section) {
    section = document.createElement("section");
    section.id = "section-product_card-id";
  }
  container?.append(section);
  section.classList.add("section-product_card");

  const product_card = document.createElement("div");
  product_card.classList.add("product-card");
  const photo_product = document.createElement("img");
  const price_product = document.createElement("span");
  const name_product = document.createElement("span");
  const btn_buy_product = document.createElement("buttton");
  if (Math.floor(Math.random() * 10) % 2 == 1) {
    price_product.textContent = "100$";
    name_product.textContent = "LADA";
    photo_product.src = "../public/priora.png";
  } else {
    price_product.textContent = "10000$";
    name_product.textContent = "Lexus";
    photo_product.src = "../public/lexus-lfa.png";
  }
  photo_product.classList.add("product-pard-photo");
  btn_buy_product.classList.add("product-pard-button-buy");
  price_product.classList.add("product-pard-price");
  name_product.classList.add("product-pard-name");
  btn_buy_product.textContent = "Купить";
  product_card.append(
    photo_product,
    price_product,
    name_product,
    btn_buy_product
  );
  section.append(product_card);
}


export function create_catalog(name, path_photo, path) {
  const container = document.querySelector("main");
  let section = document.getElementById("catalog-id");
  if (!section) {
    section = document.createElement("section");
    section.id = "catalog-id";
  }
  container?.append(section);
  section.classList.add("catalog");

  const catalog_product_card = document.createElement("section");
  catalog_product_card.classList.add('catalog-product-card');



  const catalog_product_card_photo = document.createElement("img");
  const catalog_product_card_name = document.createElement("span");
  catalog_product_card_name.classList.add("catalog-product-card-name");
  catalog_product_card_name.textContent = name;
  catalog_product_card_photo.classList.add("catalog-product-card-photo")
  catalog_product_card_photo.src = path_photo;
  

    catalog_product_card.append(catalog_product_card_photo, catalog_product_card_name)
  section.append(catalog_product_card);
  catalog_product_card.addEventListener("click", () => {
     window.location.href = path;
  })
}
