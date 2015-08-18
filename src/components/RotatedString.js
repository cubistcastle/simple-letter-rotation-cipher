'use strict';

var React = require('react/addons');

require('styles/RotatedString.scss');

var RotatedString = React.createClass({

	rotLet: function() {
		var rawString = this.props.text;
		var n = parseInt(this.props.num);
		return rawString.replace(/[a-zA-Z]/g, function (charac) {
			var charCode = null;
			var start = null;
			var i = null;
			var c = null;

			charCode = charac.charCodeAt(0);
			if (charCode < 97) {
				start = ('A').charCodeAt('0');
			} else {
				start = ('a').charCodeAt('0');
			}

			c = charCode - start;
			i = (c + n) % 26 + start;

			return String.fromCharCode(i);
		});
	},
	render: function() {

		var newString = this.rotLet();
		var info = (parseInt(this.props.num) && this.props.text) ? 'rotated version: ' + newString : null;

		return (
			<div>
				<h3 className="rotated-string">{info}</h3>

			</div>
		);
	}

});

module.exports = RotatedString;
