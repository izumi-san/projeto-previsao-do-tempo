import BackgroundImage from "../BackgroundCardImage";
import "./WeatherCard.css";

export default function WeatherCard() {
	return (
	  <div className="weather-card__container">
			<div className="weather-card__img">
			  <BackgroundImage url="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg" />
			</div>
		</div>
	)
}