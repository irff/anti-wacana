(function() {
	'use strict';
	angular.module('antiWacana', ['wacanaModule', 'todoService']);

})();

(function() {
	moment.locale('id');
	moment().format();
})();

(function() {
	'use strict';
	var deadline = new Date(0);
	console.log(deadline);

	var formDeadline = $('#form-deadline');

	var propagateDeadline = function() {
		formDeadline.val(deadline);
		formDeadline.trigger('input');
		console.log('Model $scope.formData.deadline updated');
	}

	var setDeadlineDate = function(fullYear, month, date) {
		deadline.setFullYear(fullYear);
		deadline.setMonth(month);
		deadline.setDate(date);
		console.log(deadline);

		propagateDeadline();
	}

	var setDeadlineTime = function(hours, minutes) {
		deadline.setHours(hours);
		deadline.setMinutes(minutes);
		console.log(deadline);

		propagateDeadline();
	}

	var $datepicker = $('#datepicker').pikaday({
		firstDay: 1,
		minDate: new Date(),
		maxDate: new Date('2020-12-21'),
		onSelect: function() {
			var selectedDate = (this).getDate();
			setDeadlineDate(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
			console.log('date updated');
		}
	});

	var $timepicker = $('#timepicker').timepicker();
	
	$('#timepicker').on('changeTime',function() {
		var selectedTime = $timepicker.timepicker('getTime');
		setDeadlineTime(selectedTime.getHours(), selectedTime.getMinutes());
		console.log('time updated');
	});
})();

