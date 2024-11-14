const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our service!';
}

function greet(name) {
  return 'Hello, ' + name + '!';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  res.send(greet(name));
});

function passwordCheck(password) {
  if (password.length > 15) {
    return 'Password is strong.';
  } else {
    return 'Password is weak.';
  }
}

app.get('/password-check', (req, res) => {
  let password = req.query.password;
  res.send(passwordCheck(password));
});

function twoSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(twoSum(num1, num2));
});

function subscriptionStatus(userName, isSubscribed) {
  if (isSubscribed === 'true') {
    return userName + ' is subscribed';
  } else {
    return userName + ' is not subscribed';
  }
}

app.get('/subscription-status', (req, res) => {
  let userName = req.query.userName;
  let isSubscribed = req.query.isSubscribed;
  res.send(subscriptionStatus(userName, isSubscribed));
});

function discountedPrice(price, discount) {
  let discountedPrice = price - (price * 10) / 100;
  return discountedPrice.toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(discountedPrice(price, discount));
});

function greetingMsg(age, gender, name) {
  return 'Hello, ' + name + '!' + ' You are a ' + age + ' year old ' + gender;
}

app.get('/greeting-msg', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(greetingMsg(age, gender, name));
});

function finalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(finalPrice(price, discount, tax));
});

function totalExerciseTime(running, cycling, swimming) {
  let totalTime = running + cycling + swimming;
  return totalTime.toString();
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(totalExerciseTime(running, cycling, swimming));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
