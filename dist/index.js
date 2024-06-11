System.register("type", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("data", [], function (exports_2, context_2) {
    "use strict";
    var categories, products;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("categories", categories = [
                {
                    id: 1,
                    name: "un mahsulotlari",
                    Image: "https://daryo.uz/cache/2022/05/photo_2021-11-22_12-41-32-1280x853.jpg",
                    categoriesId: 1,
                },
                {
                    id: 2,
                    name: "Ichimliklar",
                    Image: "https://www.gazeta.uz/media/img/2022/06/fwFygA16549326430717_l.jpg",
                    categoriesId: 2,
                },
                {
                    id: 3,
                    name: "sabzavotlar",
                    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqmQdhISGXE8JW8DPlzOaO9I2oSeymhfhUQ&s",
                    categoriesId: 3,
                },
                {
                    id: 4,
                    name: "mevalar",
                    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-W4wcoGko5yFeEwDQYJIVUGx0AR_CRXh3Q&s",
                    categoriesId: 4,
                },
            ]);
            exports_2("products", products = [
                {
                    id: 1,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS23ntUsE_R957Y_FugNX1MX_p31wuXs9O_A&s",
                    name: "Yog'",
                    desc: "Semichka yog'i",
                    price: 18,
                    categoriesId: 1,
                },
                {
                    id: 11,
                    image: "https://frankfurt.apollo.olxcdn.com/v1/files/9fy21s9xeoxj1-UZ/image;s=900x900",
                    name: "Mo'tabar",
                    desc: "Mo'tabar un maxsuloti taomingizni shirin va mazzali qiladi",
                    price: 18,
                    categoriesId: 1,
                },
                {
                    id: 2,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ757EitgtaIdng_S7SLjnCNbLjidgj7Wey-g&s",
                    name: "Anor suv",
                    desc: "Tabbiy afgoniston suvlari",
                    price: 8,
                    categoriesId: 2,
                },
                {
                    id: 21,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNb1SgJfyU-jew2HG2YjvSrVEZ7rIKylhaw&s",
                    name: "Fues Tea",
                    desc: "Tabbiy Uzbeksiton choyi",
                    price: 8,
                    categoriesId: 2,
                },
                {
                    id: 3,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAfBtqA7GekF1EZ0IsW_NSp_RiRZn_7H4Dw&s",
                    name: "Sabzi",
                    desc: "Sog'lom bolay desengiz sabzavotdan yesangiz",
                    price: 12,
                    categoriesId: 3,
                },
                {
                    id: 3,
                    image: "https://api.online-bozor.uz/uploads/images/8a818006d7afde69b0696edb",
                    name: "Pomidor",
                    desc: "O'zbek xaqiqiy dexqon mahsuloti",
                    price: 12,
                    categoriesId: 3,
                },
                {
                    id: 4,
                    image: "https://xabar.uz/static/crop/1/7/920__95_1747089670.jpg",
                    name: "olma",
                    desc: "mazzali dexqon olmasi",
                    price: 12,
                    categoriesId: 4,
                },
                {
                    id: 4,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvEiRJsqfolFXnk7DyjZMhvKbVN4ukk8N_A&s",
                    name: "Ananas",
                    desc: "Brazilya Ananasi",
                    price: 12,
                    categoriesId: 4,
                },
            ]);
        }
    };
});
System.register("basket", [], function (exports_3, context_3) {
    "use strict";
    var basket, basketModal, HeaderBasket, basketBody, basketClose, basketSave;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            exports_3("basket", basket = []);
            // @ts-ignore
            exports_3("basketModal", basketModal = new bootstrap.Modal("#basketModal", {
                keyboard: false,
            }));
            exports_3("HeaderBasket", HeaderBasket = document.querySelector("#HeaderBasket"));
            exports_3("basketBody", basketBody = document.querySelector("#basketBody"));
            exports_3("basketClose", basketClose = document.querySelector("#basketClose"));
            exports_3("basketSave", basketSave = document.querySelector("#basketSave"));
        }
    };
});
System.register("modal", [], function (exports_4, context_4) {
    "use strict";
    var productModal, modalBody, Buying;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            // @ts-ignore
            exports_4("productModal", productModal = new bootstrap.Modal("#productModal", {
                keyboard: false,
            }));
            exports_4("modalBody", modalBody = document.querySelector("#modal-body"));
            exports_4("Buying", Buying = document.querySelector("#Buying"));
        }
    };
});
System.register("index", ["data", "modal", "basket"], function (exports_5, context_5) {
    "use strict";
    var data_1, modal_1, basket_1, categoriesContainer, productsContainer, basketProduct, renderCategories, renderProducts, renderBasket, Swap;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (basket_1_1) {
                basket_1 = basket_1_1;
            }
        ],
        execute: function () {
            categoriesContainer = document.querySelector("#categories");
            productsContainer = document.querySelector("#Products");
            exports_5("basketProduct", basketProduct = null);
            // Categories
            renderCategories = function () {
                if (!categoriesContainer) {
                    console.error("categoriesContainer topilmadi");
                    return;
                }
                categoriesContainer.innerHTML = "";
                data_1.categories.map(function (item) {
                    var col = document.createElement("div");
                    col.className = "col-4 mb-2";
                    col.style.cursor = "pointer";
                    col.innerHTML = "\n      <img src=\"".concat(item.Image, "\" class=\"w-100 h-75 rounded\" >\n      <h5 class=\" mt-2\">").concat(item.name, "</h5>\n    ");
                    categoriesContainer.appendChild(col);
                    col.addEventListener("click", function () { return Swap(item.categoriesId); });
                });
            };
            // Products
            renderProducts = function (categoryId) {
                if (!productsContainer) {
                    console.error("productsContainer topilmadi");
                    return;
                }
                productsContainer.innerHTML = "";
                var filteredProducts = categoryId
                    ? data_1.products.filter(function (product) { return product.categoriesId === categoryId; })
                    : data_1.products;
                filteredProducts.map(function (p) {
                    var col = document.createElement("div");
                    col.className = "col-12 d-flex align-items-center gap-3 mb-3";
                    col.innerHTML = "\n      <img\n          src=\"".concat(p.image, "\"\n          width=\"100\"\n          height=\"80\"\n          class=\"object-fit-cover rounded\"\n        />\n        <div class=\"\" style=\"flex: 1\">\n          <p class=\"fw-bold mb-1\">").concat(p.name, "</p>\n          <p class=\"mb-0\">").concat(p.desc, "</p>\n          <p class=\"mb-0 fw-bold\">").concat(p.price, " ming so'm</p>\n        </div>\n    ");
                    // Button bosilganda mahsulot korsatilib korzinkaga qoshish
                    var btn = document.createElement("button");
                    btn.className = "btn";
                    btn.innerHTML = "<i class=\"fas fa-shopping-cart\"></i>";
                    btn.addEventListener("click", function () {
                        exports_5("basketProduct", basketProduct = p);
                        modal_1.productModal.show();
                        if (!modal_1.modalBody) {
                            console.error("modalBody topilmadi");
                            return;
                        }
                        modal_1.modalBody.className = "p-3";
                        modal_1.modalBody.innerHTML = "\n        <div>\n          <div class=\"d-flex justify-content-center\">\n            <img class=\"rounded w-100\" src=\"".concat(p.image, "\">\n          </div>\n          <div class=\"d-flex justify-content-start mt-3\">\n            <div class=\"ps-4\">\n              <h5>").concat(p.name, "</h5>\n              <p>").concat(p.desc, "</p>\n              <p class=\"fw-bold\">").concat(p.price, " ming so'm</p>\n            </div>\n          </div>\n        </div>\n      ");
                    });
                    col.appendChild(btn);
                    productsContainer.appendChild(col);
                });
            };
            // Basket
            renderBasket = function () {
                if (!basket_1.basketBody) {
                    console.error("basketBody topilmadi");
                    return;
                }
                basket_1.basketBody.innerHTML = "";
                basket_1.basket.map(function (item) {
                    // @ts-ignore
                    basket_1.basketBody.innerHTML += "\n      <div class=\"col-3\">\n        <div> \n          <img class=\"ModalImg rounded object-fit-cover\" src=\"".concat(item.image, "\" alt=\"\">\n        </div>\n        <div class=\"mt-2\">\n          <h4>").concat(item.name, "</h4>\n          <p>").concat(item.desc, "</p>\n          <div>").concat(item.price, " ming so'm</div>\n        </div>\n      </div> \n    ");
                });
            };
            window.onload = function () {
                renderCategories();
                renderProducts();
            };
            exports_5("Swap", Swap = function (categoryId) {
                renderProducts(categoryId);
            });
            modal_1.Buying === null || modal_1.Buying === void 0 ? void 0 : modal_1.Buying.addEventListener("click", function () {
                modal_1.productModal.hide();
                if (basketProduct) {
                    basket_1.basket.push(basketProduct);
                    renderBasket();
                    alert("Maxsulot qabul qilindi");
                }
            });
            basket_1.HeaderBasket === null || basket_1.HeaderBasket === void 0 ? void 0 : basket_1.HeaderBasket.addEventListener("click", function () {
                if (!basket_1.basketBody) {
                    console.error("basketBody topilmadi");
                    return;
                }
                basket_1.basketModal.show();
                renderBasket();
            });
            basket_1.basketClose === null || basket_1.basketClose === void 0 ? void 0 : basket_1.basketClose.addEventListener("click", function () {
                basket_1.basketModal.hide();
            });
            basket_1.basketSave === null || basket_1.basketSave === void 0 ? void 0 : basket_1.basketSave.addEventListener("click", function () {
                basket_1.basketModal.hide();
            });
        }
    };
});
