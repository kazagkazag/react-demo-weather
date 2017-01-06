import React, {Component} from 'react';
import './App.css';
import getData from "./api";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weather: []
        };
    }

    componentDidMount() {
        getData(response => {
            this.setState({
                weather: response
            });
        });
    }

    getTodayWeather() {
        return this.state.weather[0] || {};
    }

    renderNextDays() {
        return this.state.weather.map(this.renderNextDay);
    }

    renderNextDay(day) {
        return (
            <li key={day.date}>
                <a href="#43">
                    <p className="next-days-date">
                        <span className="day">
                            {day.name}
                        </span>
                        <span className="day-date scnd-font-color">
                            {day.date}
                        </span>
                    </p>
                    <p className="next-days-temperature">
                        {day.temp}
                    </p>
                </a>
            </li>
        )
    }

    render() {
        const todayWeather = this.getTodayWeather();

        return (
            <Widget>
                <Title title="Toruń"/>
                <Today
                    dayName={todayWeather.name}
                    date={todayWeather.date}
                    temp={todayWeather.temp}
                />
                <NextDays>
                    {this.renderNextDays()}
                </NextDays>
            </Widget>
        );
    }
}

function Widget(props) {
    return (
        <div className="weather block clear">
            {props.children}
        </div>
    )
}

function Title(props) {
    return (
        <h2 className="titular">
            {props.title}
        </h2>
    );
}

function Today(props) {
    return (
        <div className="current-day">
            <p className="current-day-date">
                {props.dayName} {props.date}
            </p>
            <p className="current-day-temperature">
                {props.temp}
            </p>
        </div>
    );
}

function NextDays(props) {
    return (
        <ul className="next-days">
            {props.children}
        </ul>
    );
}

export default App;
