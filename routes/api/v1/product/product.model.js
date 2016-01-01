/**
 * Created by bw on 15. 12. 27.
 */

'use strict';

var Client = require('mariasql');

var c = new Client({
  host: 'localhost',
  user: 'Practice',
  password: '',
  db: 'Practice'
});

exports.showList = function (callback) {
  c.query('SELECT * FROM PRODUCT', function (err, rows) {
    if (err)
      throw err;
    callback(rows);
  });
  console.log('SHOW TABLES');
};

exports.insertItem = function (datas, callback){
  var name = datas[0];
  var price = datas[1];
  var cost = datas[2];
  var tax = datas[3];
  var barcode = datas[4];
  var category = datas[5];
  console.log('DATAS ' + datas[0], datas[1], datas[2], datas[3], datas[4], datas[5]);
  console.log(name, price, cost, tax, barcode, category);

  c.query('INSERT INTO PRODUCT(NAME, PRICE, COST, TAX, BARCODE, CATEGORYPK) VALUES(:name, :price, :cost, :tax, :barcode, :category)',
    { name : name, price : price, cost : cost, tax : tax, barcode : barcode, category : category }, function(err, row){
      if(err)
        throw(err);
      if(row.info.affectedRows == 1){
        callback(true);
      }
    });
};
