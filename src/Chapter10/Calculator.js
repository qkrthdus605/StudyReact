import React from 'react';
import TemperatureInput from './TemperatureInput';

//물이 끓는지 아닌지 리턴
function BoilingVerdict(props){
    if(props.celcius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

//온도 변환 함수
function toCelcius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius){
    return (celcius * 9 / 5) + 32; 
}

//실제 온도 변환 
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            scale: 'c',
            temperature: ''
        }
    }
    //각각 온도가 변환되었을 때 처리
    handleCelciusChange = (temperature) => {
        this.setState({scale: 'c', temperature: temperature});
    }
    handleFahrenheit = (temperature) => {
        this.setState({scale: 'f', temperature: temperature});
    }

    render(){
        const { scale, temperature } = this.state;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput
                    scale='C'
                    temperature={celcius}
                    onTemperatureChange={this.handleCelciusChange} />
                
                <TemperatureInput
                    scale='F'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheit} />

                <BoilingVerdict
                    celcius={parseFloat(celcius)} />
            </div>
        )
    }
}

export default Calculator;