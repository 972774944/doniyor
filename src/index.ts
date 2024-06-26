import { categories, products, Product } from "./data";
import { productModal, modalBody, Buying } from "./modal";
import {
  HeaderBasket,
  basket,
  basketModal,
  basketBody,
  basketClose,
  basketSave,
} from "./basket";

const categoriesContainer = document.querySelector("#categories");
const productsContainer = document.querySelector("#Products");

export let basketProduct: Product | null = null;

// Categories uchun
const renderCategories = () => {
  if (!categoriesContainer) {
    console.error("categoriesContainer topilmadi");
    return;
  }
  categoriesContainer.innerHTML = "";
  categories.map((item) => {
    const col = document.createElement("div");
    col.className = "col-4 mb-2";
    col.style.cursor = "pointer";
    col.innerHTML = `
      <img src="${item.Image}" class="w-100 h-75 rounded" >
      <h5 class=" mt-2">${item.name}</h5>
    `;
    categoriesContainer.appendChild(col);
    col.addEventListener("click", () => Swap(item.categoriesId));
  });
};

// Products uchun
const renderProducts = (categoryId?: number) => {
  if (!productsContainer) {
    console.error("productsContainer topilmadi");
    return;
  }
  productsContainer.innerHTML = "";
  const filteredProducts = categoryId
    ? products.filter((product) => product.categoriesId === categoryId)
    : products;
  filteredProducts.map((p) => {
    const col = document.createElement("div");
    col.className = "col-12 d-flex align-items-center gap-3 mb-3";
    col.innerHTML = `
      <img
          src="${p.image}"
          width="100"
          height="80"
          class="object-fit-cover rounded"
        />
        <div class="" style="flex: 1">
          <p class="fw-bold mb-1">${p.name}</p>
          <p class="mb-0">${p.desc}</p>
          <p class="mb-0 fw-bold">${p.price} ming so'm</p>
        </div>
    `;
    // Button bosilganda mahsulot korsatilib korzinkaga qoshish
    const btn = document.createElement("button");
    btn.className = `btn`;
    btn.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
    btn.addEventListener("click", () => {
      basketProduct = p;
      productModal.show();
      if (!modalBody) {
        console.error("modalBody topilmadi");
        return;
      }
      modalBody.className = "p-3";
      modalBody.innerHTML = `
        <div>
          <div class="d-flex justify-content-center">
            <img class="rounded w-100" src="${p.image}">
          </div>
          <div class="d-flex justify-content-start mt-3">
            <div class="ps-4">
              <h5> <span>Name : </span>${p.name}</h5>
              <p> <span class="fw-bold">Desc : </span>${p.desc}</p>
              <p class="fw-bold">  <span>Price : </span>${p.price} ming so'm</p>
            </div>
          </div>
        </div>
      `;
    });
    col.appendChild(btn);
    productsContainer.appendChild(col);
  });
};
// Basket uchun
const renderBasket = () => {
  const iconRed = document.querySelector(".iconRed");
  iconRed?.classList.remove("d-none");
  if (!basketBody) {
    console.error("basketBody topilmadi");
    return;
  }
  basketBody.innerHTML = "";
  let count = 0;
  basket.map((item) => {
    count++;
    // @ts-ignore
    basketBody.innerHTML += `
      <div class="col-3 ">
        <div class="card">
        <div class="text-center"> 
          <img class="ModalImg rounded  object-fit-cover" src="${item.image}" alt="">
        </div>
        <div class="mt-2">
          <p class="fw-bold">Name :<span class=" ms-2 fs-5">${item.name}</span></p>
          <p class="fw-bold">Description :<span class=" ms-2 fs-5">${item.desc}</span></p>
          <p class="fw-bold">Price :<span class=" ms-2 fs-5">${item.price}</span> ming so'm</p>
        </div>
        </div>
      </div> 
    `;
  });
  if (iconRed) {
    iconRed.innerHTML = `${count}`;
  }
};

window.onload = () => {
  renderCategories();
  renderProducts();
};

export const Swap = (categoryId: number) => {
  renderProducts(categoryId);
};

Buying?.addEventListener("click", () => {
  productModal.hide();
  if (basketProduct) {
    basket.push(basketProduct);
    renderBasket();
  }
});

HeaderBasket?.addEventListener("click", () => {
  if (!basketBody) {
    console.error("basketBody topilmadi");
    return;
  }
  basketModal.show();
});

basketClose?.addEventListener("click", () => {
  basketModal.hide();
});

basketSave?.addEventListener("click", () => {
  basketModal.hide();
});
