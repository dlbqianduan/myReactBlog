import "./App.scss";
import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LeftSide from "./components/left-size/index.jsx";
import Home from "./pages/home/index.jsx";
import Categories from "./pages/categories/index.jsx";
import About from "./pages/about/index.jsx";
import Detail from "./pages/home/detail/index.jsx";
import { articleList } from "./utils/articleList";
import on from "./utils/on";

export default class App extends Component {
	state = {
		searchResult: [],
	};
	searchWrapRef = React.createRef();
	search(e) {
		const {
			keyCode,
			target: { value },
		} = e;
		if (keyCode === 13) {
			const searchResult = [];
			articleList.forEach((ele) => {
				if (ele.title.includes(value)) {
					searchResult.push(ele.title);
				}
			});
			this.setState({ searchResult });
		}
	}
	onInput(e) {
		if (!e.target.value) {
			this.setState({
				searchResult: [],
			});
		}
	}
	componentDidMount() {
		on(document, "mouseup", (e) => {
			if (!this.searchWrapRef.current.contains(e.target)) {
				this.setState({ searchResult: [] });
			}
		});
	}
	render() {
		const { searchResult } = this.state;
		return (
			<div className="app">
				<LeftSide></LeftSide>
				<div className="right_side">
					<div className="right_nav_side">
						<span className="breadcrumb">
							{"这里啥也没有" || window.location.pathname}
						</span>
						<div className="search_wrap" ref={this.searchWrapRef}>
							<input
								placeholder="请输入搜索内容"
								onKeyUp={(e) => {
									this.search(e);
								}}
								onInput={(e) => {
									this.onInput(e);
								}}
							/>
							{searchResult.length ? (
								<div className="search_result_list">
									{searchResult.map((ele, index) => {
										return (
											<div className="search_result_item" key={index}>
												<svg
													t="1652778788239"
													className="icon"
													viewBox="0 0 1024 1024"
													version="1.1"
													xmlns="http://www.w3.org/2000/svg"
													p-id="3388"
													width="128"
													height="128"
												>
													<path
														d="M748.307692 157.538462a118.153846 118.153846 0 0 1 118.153846 118.153846v433.230769a196.923077 196.923077 0 0 1-196.923076 196.923077H275.692308a118.153846 118.153846 0 0 1-118.153846-118.153846V275.692308a118.153846 118.153846 0 0 1 118.153846-118.153846h472.615384z m0 47.261538H275.692308a70.892308 70.892308 0 0 0-70.656 65.063385L204.8 275.692308v512a70.892308 70.892308 0 0 0 65.063385 70.656L275.692308 858.584615h393.846154a149.661538 149.661538 0 0 0 149.464615-141.942153L819.2 708.923077V275.692308a70.892308 70.892308 0 0 0-65.063385-70.656L748.307692 204.8z"
														fill="#666666"
														p-id="3389"
													></path>
													<path
														d="M841.728 645.907692v47.261539h-125.479385c-32.571077 0-59.352615 24.930462-62.227692 56.792615l-0.236308 5.671385v130.402461h-47.261538v-130.363077a109.725538 109.725538 0 0 1 103.030154-109.568l6.695384-0.196923h125.479385zM533.661538 555.323077a23.630769 23.630769 0 0 1 3.820308 46.946461l-3.820308 0.315077h-212.676923a23.630769 23.630769 0 0 1-3.820307-46.946461l3.820307-0.315077h212.676923z m159.507693-163.446154a23.630769 23.630769 0 0 1 3.820307 46.946462l-3.820307 0.315077H320.984615a23.630769 23.630769 0 0 1-3.820307-46.946462l3.820307-0.315077h372.184616z"
														fill="#666666"
														p-id="3390"
													></path>
												</svg>
												{ele}
											</div>
										);
									})}
								</div>
							) : null}
						</div>
					</div>
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
