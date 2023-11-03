async function apiFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const getAll = async () => {
    const data = await apiFetch('http://localhost:8080/planets');
    data.forEach((element) => {
        displayAllData(element);
        //console.log("hehe", element);
    });
}
function displayAllData(data){
    let parent = document.getElementById('parent');
    let newUl = document.createElement('ul');
    let name = document.createElement('li');
    let mass = document.createElement('li');
    let radius = document.createElement('li');
    let period = document.createElement('li');
    let semi_major_axis = document.createElement('li');
    let temperature = document.createElement('li');
    let distance_light_year = document.createElement('li');
    let host_star_mass = document.createElement('li');
    let host_star_temperature = document.createElement('li');
    name.innerHTML = data.name;
    mass.innerHTML = data.mass;
    radius.innerHTML = data.radius;
    period.innerHTML = data.period;
    semi_major_axis.innerHTML = data.semi_major_axis;
    temperature.innerHTML = data.temperature;
    distance_light_year.innerHTML = data.distance_light_year;
    host_star_mass.innerHTML = data.host_star_mass;
    host_star_temperature.innerHTML = data.host_star_temperature;
    newUl.appendChild(name);
    newUl.appendChild(mass);
    newUl.appendChild(radius);
    newUl.appendChild(period);
    newUl.appendChild(semi_major_axis);
    newUl.appendChild(temperature);
    newUl.appendChild(distance_light_year);
    newUl.appendChild(host_star_mass);
    newUl.appendChild(host_star_temperature);
    parent.appendChild(newUl);
}

getAll();