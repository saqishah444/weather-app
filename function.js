let inputcityname = document.getElementById("inputcity");
        let btn = document.getElementById("btn");
        let area = document.getElementById("area");
        let region = document.getElementById("region");
        let country = document.getElementById("country");
        let temperature = document.getElementById("temperature");
        let condition = document.getElementById("condition");
        let weathericon = document.getElementById("weathericon");
        let windspeed = document.getElementById("windspeed");
        let reelfeel = document.getElementById("reelfeel");
        let humidity = document.getElementById("humidity");
        let loader = document.getElementById("loader");
        
        inputcityname.addEventListener("keyup",function(event){
            if(event.key == "Enter"){
                weatherapi();
            }  
        });

        btn.addEventListener("click", function () {
            weatherapi();
        });
       
        function weatherapi (){

            if(inputcityname.value.trim() == ""){
                alert("Please enter your City Name");
                return;
            }
            loader.classList.remove("d-none");
            
            let inputcity = inputcityname.value;
            fetch(`http://api.weatherapi.com/v1/current.json?key=b4b831c87a684b8cb7b110246252107&q=${inputcity}&aqi=no`)
                .then(function (response) {
                    return response.json();
                }).then(function (data) {
                    console.log(data);
                    temperature.innerText = data.current.temp_c + "°C";
                    condition.innerText = data.current.condition.text;
                    weathericon.src = data.current.condition.icon;
                    area.innerText = data.location.name;
                    region.innerText = data.location.region;
                    country.innerText = data.location.country;
                    windspeed.innerText = data.current.wind_kph;
                    realfeel.innerText = data.current.feelslike_c;
                    humidity.innerText = data.current.humidity;



                }).catch(function () {
                    alert("city name not found");
                    inputcityname.value = "";
                }).finally(function(){
                    loader.classList.add("d-none");
                })
                
        }


