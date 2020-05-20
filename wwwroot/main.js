var xhr = new XMLHttpRequest();
xhr.addEventListener("load", transferComplete);
xhr.addEventListener("error", transferFailed);
var url = "http://localhost:5001/WeatherForecast/GetF"

function postData(){
    xhr.open("POST", url);
    var currentDate = new Date().yyyymmdd();
    var tempC = document.querySelector("#tempC").value;
    console.log(tempC);
    var weather = {"Date":currentDate, "Summary":"first daily weather"};
    weather.TemperatureC = Number(tempC);
    console.log(weather.Date);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(weather));
}

function transferComplete(evt){
    console.log("Success");
    console.log(xhr.response);
    document.querySelector("#tempF").value = xhr.response;
}

function transferFailed(evt){
    console.log("Someting went wrong.");
    console.log(xhr.response);
}

Date.prototype.yyyymmdd = function(delimiter) {
    if (delimiter === undefined){
      this.delimiter = '-'
    }
    else{
      this.delimiter = delimiter;
    }
    var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = this.getDate().toString();
  
    return [this.getFullYear() + this.delimiter, mm.length===2 ? '' : '0', mm + this.delimiter, dd.length===2 ? '' : '0', dd].join(''); // padding
  };