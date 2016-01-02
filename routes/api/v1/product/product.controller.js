/**
 * Created by bw on 15. 12. 27.
 */

'use strict';

var db = require('./product.model.js');

exports.index = function(req, res) {
  res.render('v1/product/productindex', {
    title : 'Product Index'
  });
};

exports.additem = function(req, res) {
  res.render('v1/product/additem', {
    title : 'Add Item'
  });
};

exports.deleteitem = function (req, res) {
  res.render('v1/product/deleteitem', {
    title: 'Delete Item'
  });
};

exports.searchitem = function (req, res) {
  res.render('v1/product/searchitem', {
    title: 'Search Item'
  });
};

exports.createItem = function(req, res) {
  console.log('Form Data');
  var name = req.body.itemName;
  var price = req.body.itemPrice;
  var cost = req.body.itemCost;
  var tax = req.body.itemTax;
  var barcode = req.body.itemBarcode;
  var category = req.body.itemCategory;
  var datas = [name, price, cost, tax, barcode, category];

  console.log(name, price, cost, tax, barcode, category);

  db.insertItem(datas, function(isSuccess){
    if (isSuccess) {
      res.send('<script>alert("Insert Item Success");history.back();</script>');
    }
  });
};

exports.deleteItem = function (req, res) {
  console.log('Form Data');
  var name = req.body.itemName;

  console.log(name);

  db.removeItem(name, function (isSuccess) {
    if (isSuccess) {
      res.send('<script>alert("Remove Item Success");history.back();</script>');
    }
    else {
      res.send('<script>alert("Remove Item fail");history.back();</script>')
    }
  });
};

exports.searchItem = function (req, res) {
  console.log('Form Data');
  var name = req.body.itemName;

  console.log(name);

  db.searchItem(name, function (result) {
    res.send(result);
  });
};

exports.showData = function(req, res) {
  db.showList(function(results){
    res.send(results);
  });
};
