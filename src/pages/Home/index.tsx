import WeatherCard from "../../components/WeatherCard";

import "./Home.css"

export default function Home() {
  return (
	<div className="home-page-conatiner">
		<div className="home-page-conatiner__title">
  		<h1>Home</h1>
	  	<p>Cheque a previsão do tempo em SP</p>
		</div>
		<WeatherCard/>
		<div className="background-image"></div>
	</div>
	);
}