"use strict";

var genData = require('./generate');

var deviceConfigurations = "{\n    \"<KEY>\": {\n        \"COM01\": {},\n        \"SYS02\": {\n            \"TPD\": 16,\n            \"LON\": \"<LON>\",\n            \"LAT\": \"<LAT>\",\n            \"TML\": 8500,\n            \"DID\": 1,\n            \"EUI\": \"<EUI>\"\n        },\n        \"SYS04\": {},\n        \"SYS05\": {\n            \"0LH\": 2,\n            \"0HH\": 2\n        },\n        \"PHC01\": {\n            \"PPI\": 16,\n            \"PPX\": 65,\n            \"PED\": 0,\n            \"PDD\": 0,\n            \"POM\": 0,\n            \"PPM\": 0,\n            \"PAM\": 0\n        },\n        \"EBS01\": {\n            \"PGR\": 1,\n            \"PST\": 10,\n            \"PPF\": 50,\n            \"2LH\": 200,\n            \"2HH\": 4000\n        },\n        \"AND01\": {\n            \"LSE\": 32,\n            \"RMU\": 200,\n            \"RHT\": 3,\n            \"RMD\": 50,\n            \"ID1\": 25,\n            \"ID2\": 65472,\n            \"ID3\": 65472,\n            \"ID4\": 65472,\n            \"ID5\": 65472,\n            \"ID6\": 65472,\n            \"ID7\": 65472,\n            \"ID8\": 65472,\n            \"ID9\": 65472,\n            \"IDA\": 65472,\n            \"IDB\": 65472,\n            \"IDC\": 65472,\n            \"EV1\": 50,\n            \"EV2\": 65472,\n            \"EV3\": 65472,\n            \"EV4\": 65472,\n            \"EV5\": 65472,\n            \"EV6\": 65472,\n            \"EV7\": 65472,\n            \"EV8\": 65472,\n            \"EV9\": 65472,\n            \"EVA\": 65472,\n            \"EVB\": 65472,\n            \"EVC\": 65472\n        },\n        \"meta-info\": {\n            \"device-code\": \"pico\"\n        }\n    }\n}";

var secoConfigurations = "{\n\t\"<KEY>\": {\n\t\t\"SCO01\": {\n\t\t\t\"PIA\": \"<SECOIP>\",\n\t\t\t\"PPO\": 8150,\n\t\t\t\"PTR\": \"ntp.myowlet.net\",\n\t\t\t\"PTZ\": 5.5,\n\t\t\t\"PTI\": 6,\n\t\t\t\"PAI\": 0,\n\t\t\t\"PAT\": \"06:15\",\n\t\t\t\"PLA\": <LAT>,\n\t\t\t\"PLO\": <LON>,\n\t\t\t\"PTO\": 240,\n\t\t\t\"PRC\": 1,\n\t\t\t\"PUT\": 4,\n\t\t\t\"PUG\": 2,\n\t\t\t\"PDS\": \"auto\",\n\t\t\t\"PAS\": 0,\n\t\t\t\"PSP\": 0,\n\t\t\t\"PMS\": 1,\n\t\t\t\"PNL\": 0,\n\t\t\t\"PFL\": 0\n\t\t},\n\t\t\"DST10\": {\n\t\t\t\"DS0\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS1\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS2\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS3\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS4\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS5\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS6\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS7\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS8\": \"2001-01-01 00:00:01\",\n\t\t\t\"DS9\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW0\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW1\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW2\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW3\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW4\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW5\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW6\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW7\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW8\": \"2001-01-01 00:00:01\",\n\t\t\t\"DW9\": \"2001-01-01 00:00:01\",\n\t\t\t\"DH0\": -1,\n\t\t\t\"DH1\": -1,\n\t\t\t\"DH2\": -1,\n\t\t\t\"DH3\": -1,\n\t\t\t\"DH4\": -1,\n\t\t\t\"DH5\": -1,\n\t\t\t\"DH6\": -1,\n\t\t\t\"DH7\": -1,\n\t\t\t\"DH8\": -1,\n\t\t\t\"DH9\": -1\n\t\t},\n\t\t\"meta-info\": {\n\t\t\t\"device-code\": \"seco210\"\n\t\t}\n\t}\n}";

var liveData = "{\n\t\"<KEY>\": {\n\t\t\"COM01\": {\n\t\t\t\"FLN\": 0,\n\t\t\t\"FSD\": 0,\n\t\t\t\"FPU\": 0,\n\t\t\t\"FDR\": 0,\n\t\t\t\"FCQ\": 60\n\t\t},\n\t\t\"SYS02\": {\n\t\t\t\"FFM\": 0,\n\t\t\t\"FTS\": \"<DATETIME>\",\n\t\t\t\"FRH\": 2781,\n\t\t\t\"TMP\": 2180,\n\t\t\t\"FAA\": -1,\n\t\t\t\"FAE\": -1,\n\t\t\t\"FRS\": 60\n\t\t},\n\t\t\"SYS04\": {\n\t\t\t\"SFW\": \"2.70.17.30\",\n\t\t\t\"SNO\": \"000000000001\",\n\t\t\t\"PTY\": \"PD-6206-2100-A101-1100\"\n\t\t},\n\t\t\"SYS05\": {\n\t\t\t\"FPE\": 0,\n\t\t\t\"FRE\": \"<DATETIME>\",\n\t\t\t\"FLA\": \"<DATETIME>\"\n\t\t},\n\t\t\"PHC01\": {\n\t\t\t\"FPS\": 1,\n\t\t\t\"FL1\": 0,\n\t\t\t\"FL2\": 42\n\t\t},\n\t\t\"EBS01\": {\n\t\t\t\"FDL\": 0,\n\t\t\t\"FRH\": 2065,\n\t\t\t\"FON\": \"<DATE> 06:00:00\",\n\t\t\t\"FOF\": \"<DATE> 19:00:00\",\n\t\t\t\"FEM\": 1,\n\t\t\t\"FEC\": 12492,\n\t\t\t\"FCP\": 5,\n\t\t\t\"FCV\": 22767,\n\t\t\t\"FCC\": 4,\n\t\t\t\"FPF\": 56\n\t\t},\n\t\t\"AND01\": {\n\t\t\t\"FDL\": 255,\n\t\t\t\"AEM\": 21,\n\t\t\t\"FSS\": 0\n\t\t}\n\t}\n}";

var groupData = "{\n\t\"GRP01\": {\n\t\t\"PSA\": \"-3\",\n\t\t\"PSD\": \"-3\",\n\t\t\"PWD\": \"248\",\n\t\t\"PAA\": \"0\",\n\t\t\"PAD\": \"0\",\n\t\t\"weekdays\": {\n\t\t\t\"11111000\": [\n\t\t\t\t[\n\t\t\t\t\t\"00:00\",\n\t\t\t\t\t\"02:00\",\n\t\t\t\t\t0\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"02:00\",\n\t\t\t\t\t\"02:15\",\n\t\t\t\t\t20\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"02:15\",\n\t\t\t\t\t\"04:00\",\n\t\t\t\t\t0\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"04:00\",\n\t\t\t\t\t\"05:00\",\n\t\t\t\t\t160\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"05:00\",\n\t\t\t\t\t\"06:00\",\n\t\t\t\t\t150\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"06:00\",\n\t\t\t\t\t\"08:00\",\n\t\t\t\t\t140\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"08:00\",\n\t\t\t\t\t\"09:00\",\n\t\t\t\t\t120\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"09:00\",\n\t\t\t\t\t\"11:00\",\n\t\t\t\t\t100\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"11:00\",\n\t\t\t\t\t\"13:00\",\n\t\t\t\t\t80\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"13:00\",\n\t\t\t\t\t\"15:00\",\n\t\t\t\t\t100\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"15:00\",\n\t\t\t\t\t\"16:00\",\n\t\t\t\t\t120\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"16:00\",\n\t\t\t\t\t\"18:00\",\n\t\t\t\t\t140\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"18:00\",\n\t\t\t\t\t\"19:00\",\n\t\t\t\t\t150\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"19:00\",\n\t\t\t\t\t\"20:00\",\n\t\t\t\t\t160\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"20:00\",\n\t\t\t\t\t\"21:00\",\n\t\t\t\t\t170\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"21:00\",\n\t\t\t\t\t\"23:00\",\n\t\t\t\t\t0\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"23:00\",\n\t\t\t\t\t\"23:15\",\n\t\t\t\t\t20\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t\"23:15\",\n\t\t\t\t\t\"24:00\",\n\t\t\t\t\t0\n\t\t\t\t]\n\t\t\t]\n\t\t},\n\t\t\"weekends\": {\n\t\t\t\"00000110\": []\n\t\t},\n\t\t\"exceptions\": {},\n\t\t\"motionsensors\": {\n\t\t\t\"PML\": 200,\n\t\t\t\"PRT\": \"20\",\n\t\t\t\"PIS\": \"0\",\n\t\t\t\"PRS\": 20,\n\t\t\t\"PHT\": \"180\"\n\t\t}\n\t}\n}";

var generateDeviceConfigurations = function generateDeviceConfigurations(deviceid) {
	var key = "IN_DLH_1111222_PD";
	var lon = 75.787271;
	var lat = 26.912434;
	var eui = "00:13:a2:00:40:ae:00:00";

	var latlon = getRandomLocation(lat, lon, 500);
	lat = parseFloat(latlon.latitude.toFixed(7));
	lon = parseFloat(latlon.longitude.toFixed(7));
	key = deviceid;

	return JSON.parse(deviceConfigurations.replace("<KEY>", deviceid).replace("<LAT>", lat).replace("<LON>", lon).replace("<EUI>", genData.euilist[deviceid]));
};

var generateSecoConfigurations = function generateSecoConfigurations(deviceid) {
	var key = "";
	var lon = 75.787271;
	var lat = 26.912434;

	var latlon = getRandomLocation(lat, lon, 500);
	lat = parseFloat(latlon.latitude.toFixed(7));
	lon = parseFloat(latlon.longitude.toFixed(7));
	key = deviceid;

	return JSON.parse(secoConfigurations.replace("<KEY>", deviceid).replace("<LAT>", lat).replace("<LON>", lon).replace("<SECOIP>", genData.iplist[genData.secoid.indexOf(deviceid)]));
};

var generateLiveData = function generateLiveData(deviceid) {
	var datetime = getDateTime();
	return JSON.parse(liveData.replace("<KEY>", deviceid).replace(/<DATETIME>/g, datetime.dateTime).replace(/<DATE>/g, datetime.date));
};

var generateGroupData = function generateGroupData() {
	return JSON.parse(groupData);
};

var getRandomLocation = function getRandomLocation(latitude, longitude, radiusInMeters) {
	var getRandomCoordinates = function getRandomCoordinates(radius, uniform) {
		// Generate two random numbers
		var a = Math.random(),
		    b = Math.random();

		// Flip for more uniformity.
		if (uniform) {
			if (b < a) {
				var c = b;
				b = a;
				a = c;
			}
		}

		// It's all triangles.
		return [b * radius * Math.cos(2 * Math.PI * a / b), b * radius * Math.sin(2 * Math.PI * a / b)];
	};

	var randomCoordinates = getRandomCoordinates(radiusInMeters, true);

	// Earths radius in meters via WGS 84 model.
	var earth = 6378137;

	// Offsets in meters.
	var northOffset = randomCoordinates[0],
	    eastOffset = randomCoordinates[1];

	// Offset coordinates in radians.
	var offsetLatitude = northOffset / earth,
	    offsetLongitude = eastOffset / (earth * Math.cos(Math.PI * (latitude / 180)));

	// Offset position in decimal degrees.
	return {
		latitude: latitude + offsetLatitude * (180 / Math.PI),
		longitude: longitude + offsetLongitude * (180 / Math.PI)
	};
};

var getDateTime = function getDateTime() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	if (month.toString().length == 1) {
		var month = '0' + month;
	}
	if (day.toString().length == 1) {
		var day = '0' + day;
	}
	if (hour.toString().length == 1) {
		var hour = '0' + hour;
	}
	if (minute.toString().length == 1) {
		var minute = '0' + minute;
	}
	if (second.toString().length == 1) {
		var second = '0' + second;
	}
	var dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	var date = year + '-' + month + '-' + day;
	return {
		date: date,
		dateTime: dateTime
	};
};

module.exports = {
	secoid: genData.secoid,
	devicelist: genData.devicelist,
	iplist: genData.iplist,
	euilist: genData.euilist,
	generateDeviceConfigurations: generateDeviceConfigurations,
	generateLiveData: generateLiveData,
	generateGroupData: generateGroupData,
	generateSecoConfigurations: generateSecoConfigurations,
	generateMACID: genData.generateMACID
};