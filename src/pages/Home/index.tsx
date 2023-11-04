import WeatherCard from "../../components/WeatherCard";

import "./Home.css"

export default function Home() {
  return (
	<div className="background-image">
		<h1>Home</h1>
		<p>Cheque a previsão do tempo em SP</p>
		<WeatherCard/>
	</div>
	);
}