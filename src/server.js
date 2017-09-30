var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

var dataset = require('../lib/dataset');

router.get('/', function(req, res) {
    res.json(
        {
            message: "App works"
        }
    )
});

router.route('/iplist').get(function(req, res) {
    res.json(
            dataset.iplist
    );
});

router.route('/euilist').get(function(req, res) {
    res.json(
            dataset.euilist
    );
});

router.route('/maclist').get(function(req, res) {
    res.json(
            dataset.euilist
    );
});

router.route('/secolist').get(function(req, res) {
    res.json(
            dataset.secoid
    );
});

router.route('/devicelist/:secoid').get(function(req, res) {
    res.json(
        dataset.devicelist[dataset.secoid.indexOf(req.params.secoid)]
    );
});

router.route('/config-extd/:data').get(function(req, res) {
    if (req.params.data == "groups") {
        res.json(
            dataset.generateGroupData()
        );
    } else {
        if (dataset.secoid.indexOf(req.params.data) == -1) {
            res.json(
                dataset.generateDeviceConfigurations(req.params.data)
            );
        } else {
            res.json(
                dataset.generateSecoConfigurations(req.params.data)
            );
        }
    }
}).post(function(req, res) {
    res.json(
        {}
    );
});

router.route('/manual/:deviceid').post(function(req, res) {
    res.json(
        {}
    );
});

router.route('/live/:deviceid').get(function(req, res) {
    res.json(
        dataset.generateLiveData(req.params.deviceid)
    );
});

router.route('/history/:deviceid').get(function(req, res) {
    res.json(
        []
    );
});

router.route('/infopoint/:data').get(function(req, res) {
    if (dataset.secoid.indexOf(req.params.data) == -1) {
        res.json(
            {
                "addresskey": req.params.data,
                "installationdate": "2017-01-01 11:35:29",
                "producttype": "PD-6206-2100-A101-1100",
                "version": "LC_PD_FW_V2_70_17_xx(v17.27 onwards)",
                "lastupdatedate": ""
            }
        );
    } else {
        res.json(
            {
                "addresskey": req.params.data,
                "installationdate": "",
                "producttype": "SC-1011-1230-0000-0000",
                "version": "SC-FW-2.91.17.x",
                "lastupdatedate": "2017-09-19 14:52:01"
            }
        );
    }
});

app.use(router);
app.listen(port);
console.log('App running on port ' + port);
