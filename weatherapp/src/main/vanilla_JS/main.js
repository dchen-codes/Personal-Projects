function api(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=46285488828647eb832193959231504&q=${city}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.location);
        document.getElementById('temp_f').innerHTML = `${data.current.temp_f}\u00B0 F | ${fToC(data.current.temp_f).toFixed(1)}\u00B0 C`;
        document.getElementById('icon').src = `https://${data.current.condition.icon}`;
      })
      .catch(error => document.getElementById('temp_f').innerHTML = error);
  }

function fToC(fahrenheit) {
    return (fahrenheit-32) * (5/9);
}