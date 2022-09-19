 //  src="https://maps.google.com/maps?q=gopalganj&t=&z=13&ie=UTF8&iwloc=&output=embed"
    // var apikey=`4110264d18e298a272daebaad1d4ef0c';
    // let url=`https://api.openweathermap.org/data/2.5/weather?q=gopalganj&appid=4110264d18e298a272daebaad1d4ef0c`
    function getData(){
        let city=document.getElementById('query').value;
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4110264d18e298a272daebaad1d4ef0c`

        fetch(url).then(function(res){
            return res.json();
            
            // console.log(data);
        }).then(function(res){
            console.log(res)
            append(res)
        })
        .catch(function(err){
            console.log(err)
        })

      
    }
    function append(data){
    let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        
    let cont=document.getElementById('cont');
    cont.innerHTML=null;
       let h2=document.createElement('h2');
       h2.innerText=data.name;
       let temp=document.createElement('p')
       temp.innerText=`Min temp:- ${data.main.temp_min}`;
       let tempp=document.createElement('p')
       tempp.innerText=`Max temp:- ${data.main.temp_max}`;
       let wind=document.createElement('p')
       wind.innerText=`Wind:- ${data.wind.speed}`;
       let cloud=document.createElement('p')
      cloud.innerText=`cloud:- ${data.clouds.all}`;
      let box=document.createElement("div")
      box.style.display='flex'
      box.style.justifyContent='space-around'
       let sunrise=document.createElement('p')
       sunrise.innerText=`Humidity:- ${data.main.humidity}`;
       let img=document.createElement('img')
       img.setAttribute('class','img')
       img.src='data:image/jpeg;base64,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';
       box.append(img,sunrise)
    //    p.createElement('img')
    //    img.src='data:image/jpeg;base64,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'
      
       let sunset=document.createElement('p')
       sunset.innerText=`Pressure:- ${data.main.pressure}`;
       cont.append(h2,temp,tempp,wind,cloud,sunset,box)
       let iframe=document.getElementById('gmap_canvas');
    iframe.src=url;
    getmore(data.coord.lat,data.coord.lon)
    }
    function getmore(lat,lon){
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=weekly&appid=4110264d18e298a272daebaad1d4ef0c`)
.then(function(res){
return res.json()
})
.then(function(res){
    weekly(res)
    
})
}
var c=0;
function weekly(data){
    data.daily.map(function(el){
      let div=document.createElement("div")
        let image= document.createElement("img")
     if("Clear"==el.weather[0].main){
         image.src="https://i.pinimg.com/originals/36/ae/97/36ae97d84e54e35b1530b94f99121328.png"
     }
     if("Clouds"==el.weather[0].main){
         image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cartoon_cloud.svg/1280px-Cartoon_cloud.svg.png"
     }
     if("Rain"==el.weather[0].main){
         image.src="https://www.clipartmax.com/png/full/309-3092531_free-rain-cloud-clip-art-raining-free-clipart-cloud-rain-animation-transparent.png"
     }
     let min=document.createElement("p")
  min.innerText=(el.temp.min-273.15).toFixed(2)
  let max=document.createElement("p")
  max.innerText=(el.temp.max-273.15).toFixed(2)
  let counter=document.createElement("p")
  counter.innerText=c++
div.append(counter,image,max,min)
       document.querySelector(".weekly").append(div)
    })
}
//     function getLocation(){
//         navigator.geolocation.getCurrentPosition(success)
//         function success(pos) {
//   const crd = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// //   getWeatheronLocation(crd.latitude,crd.longitude);
// }
//   }
//     getLocation();
    // let url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4110264d18e298a272daebaad1d4ef0c`
    // image.pngimage.pngimage.pngimage.pngimage.pngimage.pngimage.pngimage.png
    // function getWeatheronLocation(lat,long){
    //     let city=document.getElementById('query').value;
    //     let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4110264d18e298a272daebaad1d4ef0c`

    //     fetch(url).then(function(res){
    //         return res.json();
            
    //         // console.log(data);
    //     }).then(function(res){
    //         console.log(res)
    //         append(res)
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })

      
    // }
    