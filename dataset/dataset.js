var genData = require('./generate');

var deviceConfigurations = `{
    "<KEY>": {
        "COM01": {},
        "SYS02": {
            "TPD": 16,
            "LON": "<LON>",
            "LAT": "<LAT>",
            "TML": 8500,
            "DID": 1,
            "EUI": "<EUI>"
        },
        "SYS04": {},
        "SYS05": {
            "0LH": 2,
            "0HH": 2
        },
        "PHC01": {
            "PPI": 16,
            "PPX": 65,
            "PED": 0,
            "PDD": 0,
            "POM": 0,
            "PPM": 0,
            "PAM": 0
        },
        "EBS01": {
            "PGR": 1,
            "PST": 10,
            "PPF": 50,
            "2LH": 200,
            "2HH": 4000
        },
        "AND01": {
            "LSE": 32,
            "RMU": 200,
            "RHT": 3,
            "RMD": 50,
            "ID1": 25,
            "ID2": 65472,
            "ID3": 65472,
            "ID4": 65472,
            "ID5": 65472,
            "ID6": 65472,
            "ID7": 65472,
            "ID8": 65472,
            "ID9": 65472,
            "IDA": 65472,
            "IDB": 65472,
            "IDC": 65472,
            "EV1": 50,
            "EV2": 65472,
            "EV3": 65472,
            "EV4": 65472,
            "EV5": 65472,
            "EV6": 65472,
            "EV7": 65472,
            "EV8": 65472,
            "EV9": 65472,
            "EVA": 65472,
            "EVB": 65472,
            "EVC": 65472
        },
        "meta-info": {
            "device-code": "pico"
        }
    }
}`;

var secoConfigurations = `{
	"<KEY>": {
		"SCO01": {
			"PIA": "<SECOIP>",
			"PPO": 8150,
			"PTR": "ntp.myowlet.net",
			"PTZ": 5.5,
			"PTI": 6,
			"PAI": 0,
			"PAT": "06:15",
			"PLA": <LAT>,
			"PLO": <LON>,
			"PTO": 240,
			"PRC": 1,
			"PUT": 4,
			"PUG": 2,
			"PDS": "auto",
			"PAS": 0,
			"PSP": 0,
			"PMS": 1,
			"PNL": 0,
			"PFL": 0
		},
		"DST10": {
			"DS0": "2001-01-01 00:00:01",
			"DS1": "2001-01-01 00:00:01",
			"DS2": "2001-01-01 00:00:01",
			"DS3": "2001-01-01 00:00:01",
			"DS4": "2001-01-01 00:00:01",
			"DS5": "2001-01-01 00:00:01",
			"DS6": "2001-01-01 00:00:01",
			"DS7": "2001-01-01 00:00:01",
			"DS8": "2001-01-01 00:00:01",
			"DS9": "2001-01-01 00:00:01",
			"DW0": "2001-01-01 00:00:01",
			"DW1": "2001-01-01 00:00:01",
			"DW2": "2001-01-01 00:00:01",
			"DW3": "2001-01-01 00:00:01",
			"DW4": "2001-01-01 00:00:01",
			"DW5": "2001-01-01 00:00:01",
			"DW6": "2001-01-01 00:00:01",
			"DW7": "2001-01-01 00:00:01",
			"DW8": "2001-01-01 00:00:01",
			"DW9": "2001-01-01 00:00:01",
			"DH0": -1,
			"DH1": -1,
			"DH2": -1,
			"DH3": -1,
			"DH4": -1,
			"DH5": -1,
			"DH6": -1,
			"DH7": -1,
			"DH8": -1,
			"DH9": -1
		},
		"meta-info": {
			"device-code": "seco210"
		}
	}
}`;

var liveData = `{
	"<KEY>": {
		"COM01": {
			"FLN": 0,
			"FSD": 0,
			"FPU": 0,
			"FDR": 0,
			"FCQ": 60
		},
		"SYS02": {
			"FFM": 0,
			"FTS": "<DATETIME>",
			"FRH": 2781,
			"TMP": 2180,
			"FAA": -1,
			"FAE": -1,
			"FRS": 60
		},
		"SYS04": {
			"SFW": "2.70.17.30",
			"SNO": "000000000001",
			"PTY": "PD-6206-2100-A101-1100"
		},
		"SYS05": {
			"FPE": 0,
			"FRE": "<DATETIME>",
			"FLA": "<DATETIME>"
		},
		"PHC01": {
			"FPS": 1,
			"FL1": 0,
			"FL2": 42
		},
		"EBS01": {
			"FDL": 0,
			"FRH": 2065,
			"FON": "<DATE> 06:00:00",
			"FOF": "<DATE> 19:00:00",
			"FEM": 1,
			"FEC": 12492,
			"FCP": 5,
			"FCV": 22767,
			"FCC": 4,
			"FPF": 56
		},
		"AND01": {
			"FDL": 255,
			"AEM": 21,
			"FSS": 0
		}
	}
}`;

var groupData = `{
	"GRP01": {
		"PSA": "-3",
		"PSD": "-3",
		"PWD": "248",
		"PAA": "0",
		"PAD": "0",
		"weekdays": {
			"11111000": [
				[
					"00:00",
					"02:00",
					0
				],
				[
					"02:00",
					"02:15",
					20
				],
				[
					"02:15",
					"04:00",
					0
				],
				[
					"04:00",
					"05:00",
					160
				],
				[
					"05:00",
					"06:00",
					150
				],
				[
					"06:00",
					"08:00",
					140
				],
				[
					"08:00",
					"09:00",
					120
				],
				[
					"09:00",
					"11:00",
					100
				],
				[
					"11:00",
					"13:00",
					80
				],
				[
					"13:00",
					"15:00",
					100
				],
				[
					"15:00",
					"16:00",
					120
				],
				[
					"16:00",
					"18:00",
					140
				],
				[
					"18:00",
					"19:00",
					150
				],
				[
					"19:00",
					"20:00",
					160
				],
				[
					"20:00",
					"21:00",
					170
				],
				[
					"21:00",
					"23:00",
					0
				],
				[
					"23:00",
					"23:15",
					20
				],
				[
					"23:15",
					"24:00",
					0
				]
			]
		},
		"weekends": {
			"00000110": []
		},
		"exceptions": {},
		"motionsensors": {
			"PML": 200,
			"PRT": "20",
			"PIS": "0",
			"PRS": 20,
			"PHT": "180"
		}
	}
}`;

var generateDeviceConfigurations = function(deviceid) {
    var key = "IN_DLH_1111222_PD";
    var lon = 77;
    var lat = 28;
    var eui = "00:13:a2:00:40:ae:00:00";
    
    var latlon = getRandomLocation(lon, lat, 500);
    lat = latlon.latitude;
    lon = latlon.longitude;
    key = deviceid;

    return JSON.parse(deviceConfigurations.replace("<KEY>", deviceid).replace("<LAT>", lat).replace("<LON>", lon).replace("<EUI>", genData.euilist[deviceid]));
}

var generateSecoConfigurations = function(deviceid) {
    var key = "";
    var lon = 77;
    var lat = 28;
    
    var latlon = getRandomLocation(lon, lat, 500);
    lat = latlon.latitude;
    lon = latlon.longitude;
    key = deviceid;

    return JSON.parse(secoConfigurations.replace("<KEY>", deviceid).replace("<LAT>", lat).replace("<LON>", lon).replace("<SECOIP>", genData.iplist[genData.secoid.indexOf(deviceid)]));
}

var generateLiveData = function(deviceid) {
    var datetime = getDateTime();
    return JSON.parse(liveData.replace("<KEY>", deviceid).replace(/<DATETIME>/g, datetime.dateTime).replace(/<DATE>/g, datetime.date));
}

var generateGroupData = function() {
    return JSON.parse(groupData);
}

var getRandomLocation = function (latitude, longitude, radiusInMeters) {
    var getRandomCoordinates = function (radius, uniform) {
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
        return [
            b * radius * Math.cos(2 * Math.PI * a / b),
            b * radius * Math.sin(2 * Math.PI * a / b)
        ];
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
        latitude: latitude + (offsetLatitude * (180 / Math.PI)),
        longitude: longitude + (offsetLongitude * (180 / Math.PI))
    }
};

var getDateTime = function() {
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
    }
}

module.exports = {
    secoid: genData.secoid,
	devicelist: genData.devicelist,
	iplist: genData.iplist,
	euilist: genData.euilist,
    generateDeviceConfigurations: generateDeviceConfigurations,
    generateLiveData: generateLiveData,
	generateGroupData: generateGroupData,
	generateSecoConfigurations: generateSecoConfigurations
}