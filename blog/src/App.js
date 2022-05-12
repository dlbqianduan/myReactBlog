import "./App.css";
import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LeftSide from "./components/left-size/index.jsx";
import Home from "./pages/home/index.jsx";
import Categories from "./pages/categories/index.jsx";
import About from "./pages/about/index.jsx";
import Detail from "./pages/home/detail/index.jsx";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<LeftSide></LeftSide>
				<div className="right_side">
					<div className="breadcrumb">先默认写个home</div>
					<div className="route_views">
						<Routes>
							<Route path="/home" element={<Home />} />
							<Route path="/home/detail" element={<Detail />} />
							<Route path="/categories" element={<Categories />} />
							<Route path="/about" element={<About />} />
							<Route path="*" element={<Navigate to="/home" />} />
						</Routes>
					</div>
					<div className="quick_way">
						<div>这里不知道写什么~</div>
					</div>
				</div>
			</div>
		);
	}
}
