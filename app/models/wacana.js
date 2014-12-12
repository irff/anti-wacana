var mongoose 	= require('mongoose');

module.exports = mongoose.model('Wacana', {
	nama: String,
	deskripsi: String,
	deadline: Date,
	selesai: Boolean
});
