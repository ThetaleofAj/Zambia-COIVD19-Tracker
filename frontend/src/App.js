import React,{useEffect,useState} from 'react';
import {ComposableMap, Geographies, Geography} from "react-simple-maps"
import {scaleQuantile} from "d3-scale"
import ReactTooltip from 'react-tooltip'
import Table from './Components/Table';
import Chart from './Components/Chart';
import logo from './images/title.png';
import gradient from './images/gradient.png';

//MAP DETAILS
const geoUrl = ('./zambia.topo.json');
const PROJECTION_CONFIG = {
  scale:2500,
  center: [27.8493,-13.1339],
  
};

function App() {
  //CALLING DATA FROM API
  const url = "http://andyson2.pythonanywhere.com/api/province/"
  const zambiaurl = "http://andyson2.pythonanywhere.com/api/zambia"
  const [tooltipContent, setTooltipContent] = useState('');
  const [data, setData] = useState([]);
  const [zambiaData, setzambiaData] = useState([]);

  const getzambiaData = async ()=>{
    const response = await fetch(zambiaurl);
    const responseJson = await response.json();
    setzambiaData(responseJson);
  };
  useEffect(()=>{
    getzambiaData();
  },[]);

  const getData = async ()=>{
    const response = await fetch(url);
    const responseJson = await response.json();
    setData(responseJson);
  };
  useEffect(()=>{
    getData();
  },[]);

//MAP COLOUR SCALE
const colorScale = scaleQuantile().domain(data.map(d=>d.cases)).range([
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618"
  ]);

//MAP TOOLTIP SETUP
  const onMouseEnter= (geo,object = {value:'NA'}) => {
    return () =>{
      setTooltipContent(`${geo.properties.name} Province: ${object.cases} cases as of latest update`);
    };
   };

  const onMouseLeave= () =>{
    setTooltipContent("");
  } 

  
  return (
    <div>
      <div className="TitleDiv"><img className="Title" src={logo}/></div>
      <div className="map">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap data-tip="" projectionConfig={PROJECTION_CONFIG} projection="geoMercator" height={500}>
        <Geographies geography={geoUrl}>
          {({geographies}) => 
            geographies.map(geo => {
              const object = data.find(province => province.provinceCode === geo.id);
              return (
                <Geography key={geo.rsmKey} geography={geo} 
                onMouseEnter={onMouseEnter(geo,object)}
                onMouseLeave={onMouseLeave}
                style={{
                  default: {
                    outline: "none"
                  },
                  hover: {
                    fill: "#000000",
                    transition: 'all 250ms',
                    outline: "none"
                  },
                  pressed: {
                    outline: "none"
                  }
                }}
                strokeWidth="0.6" stroke="#000000"
                fill={object ? colorScale(object.cases) : "#EEE"} />
              )
            }
               )
          }
        </Geographies>
      </ComposableMap>
      </div>
      <p className="key">Chloropeth repsents number of cases for each province</p>
      <img className="gradient" src={gradient}/>
      <div className="CardArea">
      <div className="CardFirst">
                <h3 className="Card1">Infected</h3>
                <div className="details">
                <p className="today">Today: {zambiaData.map((data)=>data.casesToday)}</p>
                <p>Cumulative: {zambiaData.map((data)=>data.casesTotal)}</p>
            </div>
        </div>
        <div className="CardSecond">
            <h3 className="Card2">Recovered</h3>
            <div className="details">
                <p className="today">Today: {zambiaData.map((data)=>data.recoveriesToday)}</p>
                <p>Cumulative: {zambiaData.map((data)=>data.recoveriesTotal)}</p>
            </div>
        </div>
        <div className="CardThird">
            <h3 className="Card3">Deaths</h3>
            <div className="details">
                <p className="today">Today: {zambiaData.map((data)=>data.deathsToday)}</p>
                <p>Cumulative: {zambiaData.map((data)=>data.deathsTotal)}</p>
            </div>
        </div>
        <div className="CardFourth">
            <h3 className="Card4">Vaccinated</h3>
            <div className="details">
                <p className="today">First Dose: {zambiaData.map((data)=>data.VaccinationFirst)}</p>
                <p>Second Dose: {zambiaData.map((data)=>data.VaccinationSecond)}</p>
            </div>
        </div>
      </div>
      <h1 className="TableTitle">PROVINCES</h1>
      <Table object={data}/>
      <h1 className="ChartTitle">STATISTICS</h1>
      <p className="key1">Graph represents number of cases as of 14 June</p>
      <Chart/>
      <footer>
        <p>All data displayed is from <a href="https://www.moh.gov.zm/">Ministry of Health Zambia</a></p>
        <p>For contact <a href="https://amjwebsite.netlify.app/">AMJWEBSITE</a></p>
        <p>© 2021 ZAMBIA COVID19 TRACKER</p>
      </footer>
    </div>
  );
}

export default App;
