'use strict';

/* global createResultShopItem showAllResults */

QUnit.module(`Etsy Shop`, () => {
  const itemOne = {
    title: `Jason`,
    price: `1.01`,
    Images: [
      {
        url_fullxfull: `https://img0.etsystatic.com/027/0/5958031/il_fullxfull.610885484_e8y9.jpg`,
      },
    ],
    Shop: {
      shop_name: `Sew and Tell`,
    },
  };

  const itemTwo = {
    title: `Salad Bar`,
    price: `50.19`,
    Images: [
      {
        url_fullxfull: `https://placebear.com/200/200`,
      },
    ],
    Shop: {
      shop_name: `Pita Pan`,
    },
  };

  function testUiForItem(el, item, assert, msgPrefix) {
    assert.ok(el instanceof Element,
      `${msgPrefix}: The shop item should be an Element object
        (see document.createElement)`);
    assert.ok(el.classList.contains(`shop-item`),
      `${msgPrefix}: The shop item element element should have a class 'shop-item'`);

    // Check the title
    const title = el.querySelector(`h3.shop-item__title`);
    assert.ok(title,
      `${msgPrefix}: The shop item contains an element with the class 'shop-item__title'`);
    assert.equal(title.innerText.trim(), item.title,
      `${msgPrefix}: The shop item title contains the shop item's title from the data`);

    // Check the shop name
    const shopName = el.querySelector(`h4.shop-item__shop-name`);
    assert.ok(shopName,
      `${msgPrefix}: The shop item contains an element with the class 'shop-item__shop-name'`);
    assert.equal(shopName.innerText.trim(), item.Shop.shop_name,
      `${msgPrefix}: The shop item shop-name contains the shop item's shop name from the data`);

    // Check shop item picture
    const pic = el.querySelector(`img.shop-item__pic`);
    assert.ok(pic,
      `${msgPrefix}: The shop item contains an 'img' element with the class 'shop-item__pic'`);
    assert.equal(pic.getAttribute(`src`), item.Images[0].url_fullxfull,
      `${msgPrefix}: The shop item pic has an src from the first Image url`);
    assert.equal(pic.getAttribute(`alt`), item.title,
      `${msgPrefix}: The shop item pic has an alt from the shop item's name`);

    // Check shop item price
    const price = el.querySelector(`.shop-item__price`);
    assert.ok(price,
      `${msgPrefix}: The shop item contains an 'p' element with the class 'shop-item__price'`);
    assert.equal(price.innerText.trim(), `$${item.price}`,
      `${msgPrefix}: The shop item price contains the shop item's price from the data`);
  }

  test(`free passing test`, (assert) => {
    assert.ok(true);
  });

  test(`it can create a shopItem element`, (assert) => {
    // Check the shop item element
    const shopItem = createResultShopItem(itemOne);

    testUiForItem(shopItem, itemOne, assert,
      `Result of createResultShopItem with itemOne`);

    const shopItemTwo = createResultShopItem(itemTwo);

    testUiForItem(shopItemTwo, itemTwo, assert,
      `Result of createResultShopItem with itemTwo`);
  });

  test(`it can update the UI with results from a set of data`, (assert) => {
    const products = document.createElement(`div`);
    document.querySelector(`body`).appendChild(products);
    products.id = `products`;

    showAllResults({ results: [itemOne, itemTwo] });

    const shopItemOne = products.querySelector(`.shop-item`);
    const shopItemTwo = products.querySelector(`.shop-item:last-of-type`);

    testUiForItem(shopItemOne, itemOne, assert,
      `Result of showAllResults for itemOne`);

    testUiForItem(shopItemTwo, itemTwo, assert,
      `Result of showAllResults for itemOne`);

    showAllResults({ results: [itemTwo] });

    const shopItemReset = products.querySelector(`.shop-item`);

    testUiForItem(shopItemReset, itemTwo, assert,
      `showAllResults should reset products children`);

    products.remove();
  });
});
