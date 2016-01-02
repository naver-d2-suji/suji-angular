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

exports.showData = function(req, res) {
  db.showList(function(results){
    res.send(results);
  });
};
