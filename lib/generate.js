"use strict";

var secoidArray = [];
var devicelistArray = [];
var secoIPList = [];
var euiAddress = [];

var seco_count = 1;
var dev_count = 5000;
var eui = "00:13:a2:00:40:ae:00:00";
var generateData = function generateData() {
    for (var i = 1; i <= seco_count; i++) {
        var seco_id = 900 + i;
        secoidArray.push("IN_DLH_1111222_" + seco_id);
		var ip = i + 5;
        secoIPList.push("10.254.2." + ip);

        var devArr = new Array();
        for (var j = 1; j <= dev_count; j++) {
            var dev_id = "PD" + seco_id + j;
            devArr.push("IN_DLH_1111222_" + dev_id);

            eui = '0123456789abcdef'.split('').map(function (v, i, a) {
                return i > 15 ? null : a[Math.floor(Math.random() * 16)];
            }).join('');

            var str = "";
            for (var k = 0, len = eui.length; k < len; k++) {
                if (k % 2 != 0 && k != eui.length - 1) {
                    str += eui[k] + ':';
                } else {
                    str += eui[k];
                }
            }
            euiAddress["IN_DLH_1111222_" + dev_id] = str;
            console.log(euiAddress["IN_DLH_1111222_" + dev_id]);
        }
        devicelistArray.push(devArr);
    }
};

var generateMACID = function() {
	
		eui = '0123456789abcdef'.split('').map(function (v, i, a) {
			return i > 15 ? null : a[Math.floor(Math.random() * 16)];
		}).join('');

		var str = "";
		for (var k = 0, len = eui.length; k < len; k++) {
			if (k % 2 != 0 && k != eui.length - 1) {
				str += eui[k] + ':';
			} else {
				str += eui[k];
			}
		}
		euiAddress.push(str);
		var i = 9;
	
}

//generateData();
generateMACID();

module.exports = {
    secoid: secoidArray,
    devicelist: devicelistArray,
    iplist: secoIPList,
    euilist: euiAddress,
	generateMACID: euiAddress
};