import HomeButton from "./HomeButton";
import CurrentWeather from "./CurrentWeather";

const MyHeader = (data) => {

    return (
        <div className="MyHeader">
        <h2>{data.headerText}</h2>
        <CurrentWeather/>
        {data.headerText === "Multi-Game-Box" ? <></> : <HomeButton/>}
        </div>
    );
}

export default MyHeader;