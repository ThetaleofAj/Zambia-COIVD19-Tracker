import React from 'react';

//PROVINCE TABLES
const Table =(props)=>{
    return(
        <div className="TableArea">
             <table className="Table1">
                <tr>
                    <th>Province</th>
                    <th>Infected</th>
                    <th>Deaths</th>
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "LS").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "LS").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "LS").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "CO").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "CO").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "CO").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "LP").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "LP").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "LP").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "CE").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "CE").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "CE").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "EA").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "EA").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "EA").map(province => <td>{province.deaths}</td>)}
                </tr>
            </table>

            <table className="Table2">
                <tr>
                    <th>Province</th>
                    <th>Infected</th>
                    <th>Deaths</th>
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "SO").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "SO").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "SO").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "NO").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "NO").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "NO").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "WE").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "WE").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "WE").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "NW").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "NW").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "NW").map(province => <td>{province.deaths}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "MU").map(province => <td>{province.name}</td>)}
                {props.object.filter(data=>data.provinceCode === "MU").map(province => <td>{province.cases}</td>)}
                {props.object.filter(data=>data.provinceCode === "MU").map(province => <td>{province.deaths}</td>)}
                </tr>
            </table>

        </div>
           


    )
}
export default Table;