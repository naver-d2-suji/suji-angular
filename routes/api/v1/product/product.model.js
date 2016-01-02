/**
 * Created by bw on 15. 12. 27.
 */

'use strict';

var Client = require('mariasql');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev_v1'
});

exports.showList = function (callback) {
  c.query('SELECT * FROM PRODUCT', function (err, rows) {
    if (err)
      throw err;

    var data = "<html><head><title>상품 출력</title></head>";
    data += "<h1>상품 출력</h1>";
    data += "<table border=\"1\">";
    data += "<tr><th>Name</th><th>Price</th><th>Cost</th><th>Tax</th><th>Barcode</th><th>Category</th></tr>";
    for (var i = 0; i < rows.info.numRows; i++) {
      data += "<tr>";
      data += "<td>" + rows[i].NAME + "</td>";
      data += "<td>" + rows[i].PRICE + "</td>";
      data += "<td>" + rows[i].COST + "</td>";
      data += "<td>" + rows[i].TAX + "</td>";
      data += "<td>" + rows[i].BARCODE + "</td>";
      data += "<td>" + rows[i].CATEGORY + "</td>";
      data += "</tr>";
    }
    data += "</table></html>";
    callback(data);
  });
  console.log('SHOW TABLES');
};

exports.insertItem = function (datas, callback) {
  var name = datas[0];
  var price = datas[1];
  var cost = datas[2];
  var tax = datas[3];
  var barcode = datas[4];
  var category = datas[5];
  console.log('DATAS ' + datas[0], datas[1], datas[2], datas[3], datas[4], datas[5]);
  console.log(name, price, cost, tax, barcode, category);

  c.query('INSERT INTO PRODUCT(NAME, PRICE, COST, TAX, BARCODE) VALUES(:name, :price, :cost, :tax, :barcode)',
    {name: name, price: price, cost: cost, tax: tax, barcode: barcode}, function (err, row) {
      if (err)
        throw(err);
      if (row.info.affectedRows == 1) {
        callback(true);
      }
    });
};

exports.removeItem = function (name, callback) {
  console.log(name);

  c.query('DELETE FROM PRODUCT WHERE NAME=:name',
    {name: name}, function (err, row) {
      if (err)
        throw(err);
      if (row.info.affectedRows == 1) {
        callback(true);
      }
      else {
        callback(false);
      }
    });
};

exports.searchItem = function (name, callback) {
  console.log(name);

  c.query('SELECT * FROM PRODUCT WHERE NAME=:name',
    {name: name}, function (err, rows) {
      if (err)
        throw (err);
      else {
        var data = "<html><head><title>검색된 상품</title></head>";
        data += "<h1>검색된 상품</h1>";
        data += "<table border=\"1\">";
        data += "<tr><th>Name</th><th>Price</th><th>Cost</th><th>Tax</th><th>Barcode</th><th>Category</th></tr>";
        for (var i = 0; i < rows.info.numRows; i++) {
          data += "<tr>";
          data += "<td>" + rows[i].NAME + "</td>";
          data += "<td>" + rows[i].PRICE + "</td>";
          data += "<td>" + rows[i].COST + "</td>";
          data += "<td>" + rows[i].TAX + "</td>";
          data += "<td>" + rows[i].BARCODE + "</td>";
          data += "<td>" + rows[i].CATEGORY + "</td>";
          data += "</tr>";
        }
        data += "</table></html>";
        callback(data);
      }
    })
};
