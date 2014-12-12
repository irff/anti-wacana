// routes

var Wacana = require('./models/wacana');

module.exports = function(app) {

	// ----- GET
	app.get('/api/wacana', function(req, res) {
		Wacana.find(function(err, wacana) {
			if(err) {
				res.send(err);
			}
			res.json(wacana);
		});
	});

	// ----- CREATE
	app.post('/api/wacana', function(req, res) {
		console.log('yes');
		Wacana.create({
			nama : req.body.nama,
			deskripsi : req.body.deskripsi,
			deadline : req.body.deadline,
			done : false
		}, function(err, wacana) {
			console.log(wacana);

			if(err) {
				res.send(err);
			}

			Wacana.find(function(err, wacana) {
				if(err) {
					res.send(err);
				}
				res.json(wacana);
			});
		});
	});

	// ----- DELETE
	app.delete('/api/wacana/:wacana_id', function(req, res) {
		Wacana.remove({
			_id : req.params.wacana_id
		}, function(err, wacana) {
			if(err) {
				res.send(err);
			}

			Wacana.find(function(err, wacana) {
				if(err) {
					res.send(err);
				}
				res.json(wacana);
			});
		});
	});

	app.get('*', function(req, res) {
		res.sendFile('./public/index.html');
	});
};