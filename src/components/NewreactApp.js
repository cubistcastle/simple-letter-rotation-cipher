'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var RotatedString = require('components/RotatedString');

// CSS
require('normalize.css');
require('../styles/main.scss');

// var imageURL = require('../images/yeoman.png');

var SubCipherApp = React.createClass({
		getInitialState: function() {
		return {
			text: '',
			rotNum: 0
		};
		},


		handleChange: function(event) {
		this.setState({ text: event.target.value });
		},
		rotationChange: function(event) {
		this.setState({ rotNum: event.target.value });
		},
	render: function() {
	var slideVal = this.state.rotNum;
	return (
		<div className="main">
		<ReactTransitionGroup transitionName="fade">
				<div clas="wrapper">
					<div className="row">

						<div className="large-8 columns large-centered">
							<h1>Letter Rotation Cipher</h1>
								<textarea className="form-control" onChange={this.handleChange} defaultValue={this.state.text} placeholder="What do you want to cipher?">
								</textarea>
						</div>
					</div>
					<div className="row">
						<div className="large-8 columns large-centered">
							<p>Level of rotation</p>
							<div className="ranger">
								<output htmlFor="rotation-slider" className="rotation-level">{slideVal}</output>
								<input id="rotation-slider" type="range" min="0" value={slideVal} max="20" step="1" onChange={this.rotationChange}/>
							</div>

						</div>
					</div>
					<div className="row">
						<div className="large-8 columns large-centered panel">
						<RotatedString text={this.state.text} num={this.state.rotNum}/>
						</div>
					</div>
				</div>
		</ReactTransitionGroup>
		</div>
	);
	}
});
React.render(<SubCipherApp />, document.getElementById('content')); // jshint ignore:line

module.exports = SubCipherApp;
