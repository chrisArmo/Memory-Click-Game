/**
 * Root App Component
 */

// Dependencies -------------------- /

import React, { Component } from 'react';
import Nav from "./components/Nav";
import Images from "./components/Images";
import {shuffleImages} from "./helpers/utility";
import images from "./images.json";
import './App.css';

// Component -------------------- /

class App extends Component {
	state = {
		currentScore: 0,
		highScore: 0,
		clicked: [],
		miss: false,
		images
	};

	handleImageClick = (id) => {
		const clicked = this.state.clicked.includes(id),
			shuffled = shuffleImages([...this.state.images]);
		if (!clicked) {
			this.setState((prevState) => ({
				currentScore: prevState.currentScore + 1,
				clicked: [...prevState.clicked, id],
				miss: false
			}));
		} else {
			this.setState((prevState) => ({
				currentScore: 0,
				clicked: [],
				highScore: prevState.highScore < prevState.currentScore 
					? prevState.currentScore 
					: prevState.highScore,
				miss: true
			}));
		}
		this.setState(() => ({images: shuffled}))
	};

	render() {
		return (
			<div className="App">
				<Nav 
					currentScore={this.state.currentScore}
					highScore={this.state.highScore}
					miss={this.state.miss} />
				<div className="container main">
					<Images 
						images={this.state.images}
						handleImageClick={this.handleImageClick}
						miss={this.state.miss} />
				</div>
			</div>
		);
	}
}

// Export Component -------------------- /

export default App;
