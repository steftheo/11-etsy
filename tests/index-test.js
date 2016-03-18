'use strict';

/* global createResultShopItem */

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

  test(`it can create a shopItem element`, (assert) => {
    const info = itemOne;

    // Check the shop item element
    const shopItem = createResultShopItem(info);
    assert.ok(shopItem instanceof Element,
      `The createResultShopItem function should return an Element object
        (see document.createElement)`);
    assert.ok(shopItem.classList.contains(`shop-item`),
      `The returned element should have a class 'shop-item'`);

    // Check the title
    const title = shopItem.querySelector(`h3.shop-item__title`);
    assert.ok(title,
      `The returned element contains an element with the class 'shop-item__title'`);
    assert.equal(title.innerText.trim(), info.title,
      `The shop item title contains the shop item's title from the data`);

    // Check the shop name
    const shopName = shopItem.querySelector(`h4.shop-item__shop-name`);
    assert.ok(shopName,
      `The returned element contains an element with the class 'shop-item__shop-name'`);
    assert.equal(shopName.innerText.trim(), info.Shop.shop_name,
      `The shop item shopName contains the shop item's shop name from the data`);

    // Check shop item picture
    const pic = shopItem.querySelector(`img.shop-item__pic`);
    assert.ok(pic,
      `The returned element contains an 'img' element with the class 'shop-item__pic'`);
    assert.equal(pic.getAttribute(`src`), info.Images[0].url_fullxfull,
      `The shop item pic has an src from the first Image url`);
    assert.equal(pic.getAttribute(`alt`), info.title,
      `The shop item pic has an alt from the shop item's name`);

    // Check shop item price
    const price = shopItem.querySelector(`.shop-item__price`);
    assert.ok(price,
      `The returned element contains an 'p' element with the class 'shop-item__price'`);
    assert.equal(price.innerText.trim(), `$1.01`,
      `The shop item price contains the shop item's price from the data`);
  });

  test(`it can create a result shopItem element from the data`, (assert) => {
    const info = itemTwo;

    // Check the shop item element
    const shopItem = createResultShopItem(info);
    assert.ok(shopItem instanceof Element,
      `The createResultShopItem function should return an Element object
        (see document.createElement)`);
    assert.ok(shopItem.classList.contains(`shop-item`),
      `The returned element should have a class 'shop-item'`);

    // Check the title
    const title = shopItem.querySelector(`h3.shop-item__title`);
    assert.ok(title,
      `The returned element contains an element with the class 'shop-item__title'`);
    assert.equal(title.innerText.trim(), info.title,
      `The shop item title contains the shop item's title from the data`);

    // Check the shop name
    const shopName = shopItem.querySelector(`h4.shop-item__shop-name`);
    assert.ok(shopName,
      `The returned element contains an element with the class 'shop-item__shop-name'`);
    assert.equal(shopName.innerText.trim(), info.Shop.shop_name,
      `The shop item shopName contains the shop item's shop name from the data`);

    // Check shop item picture
    const pic = shopItem.querySelector(`img.shop-item__pic`);
    assert.ok(pic,
      `The returned element contains an 'img' element with the class 'shop-item__pic'`);
    assert.equal(pic.getAttribute(`src`), info.Images[0].url_fullxfull,
      `The shop item pic has an src from the first Image url`);
    assert.equal(pic.getAttribute(`alt`), info.title,
      `The shop item pic has an alt from the shop item's name`);

    // Check shop item price
    const price = shopItem.querySelector(`.shop-item__price`);
    assert.ok(price,
      `The returned element contains an 'p' element with the class 'shop-item__price'`);
    assert.equal(price.innerText.trim(), `$50.19`,
      `The shop item price contains the shop item's price from the data`);
  });

  test(`it can update the UI with results from a set of data`, (assert) => {

  });
});
