---
tags:
  - javascript
published: true
date: 2020-09-07T20:27:49.321Z
title: "JavaScript: The semester begins"
---
<script>
    function printCoin() {
      currency = document.querySelector('#coin');
      console.log(currency.value);
      document.getElementById("choice").innerHTML = "You chose: " + currency.value;
      getPrice(currency);
    }

    function getPrice(currency) {
      let requestURL = 'https://min-api.cryptocompare.com/data/price?fsym=' + currency.value + '&tsyms=USD&api_key=e29b700b7cfd70faa0de907743ea4e186cd2e1f2f3b999332f7718be49feb6ae';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL, true);
      request.responseType = 'text';
      request.send();
      request.onload = function () {
        if (request.readyState === request.DONE) {
          var coinPrice = request.responseText;
          // console.log(coinPrice);
          var coinPriceData = [].slice.call(coinPrice)
          // console.log(coinPriceData);
          var i;
          var currentValueUSD = "";
          for (i = 7; i < (coinPriceData.length-1); i++) {
            currentValueUSD = currentValueUSD + coinPriceData[i];
          }
        }
        document.getElementById("choicePrice").innerHTML = "Current price is: $" + currentValueUSD;
      }
    }

  </script>

Up until three months ago, I'd never written a single line of JavaScript. I still haven't written much outside of a sample web app that shows cryptocoin pricing based on the user's choice of coin.

<h2>JavaScript demo to show current value of crypto</h2>
  <form>
    <label form="coin">Choose a cryptocurrency:</label>
    <select id="coin" name="coins">
      <option value="BTC">Bitcoin</option>
      <option value="LTC">Litecoin</option>
      <option value="ETC">Etherium</option>
      <input type="button" value="Submit" onclick="printCoin()">
      <input type="reset" onclick="location.reload()">
    </select>
  </form>
  <p id="choice">Coin: </p>
  <p id="choicePrice">Price:</p>

But as I've read more about JavaScript, and seen how it can power this blog, my long term focus has changed.

Originally, I figured I'd take what I learned from my in-progress Computer Science program at the local community college and apply it to mobile development. Not any more. I'm thinking web development all the way for several reasons.

I think I'd rather not be tied to a specific app store or proprietary platform. Instead, the more accessible web seems to be the place for me. And while I could focus on HTML and CSS as a front-end developer, I'd prefer to create more functionality than presentation and content. 

I've been creating content online since 2003, so I've "been there and done that" more than enough: I wrote nearly 10,000 blog posts during my stint at Gigaom between 2008 and 2015, for example.