const addNewPlanet = e =>{ 
    e.preventDefault(); 

    const name = document.getElementById('name').value; 
    const mass = document.getElementById('mass').value; 
    const radius = document.getElementById('radius').value; 
    const period = document.getElementById('period').value; 
    const semi_major_axis = document.getElementById('semi_major_axis').value; 
    const temperature = document.getElementById('temperature').value; 
    const distance_light_year = document.getElementById('distance_light_year').value; 
    const host_star_mass = document.getElementById('host_star_mass').value; 
    const host_star_temperature = document.getElementById('host_star_temperature').value; 
    const image = document.getElementById('image').value; 
    

    const option = { 
        headers:{ 
            "Content-Type": "application/json" 
        }, 
        method: "POST", 
        body: JSON.stringify({ 
            name: name,
            mass: mass,
            radius: radius,
            period: period,
            semi_major_axis: semi_major_axis,
            temperature: temperature,
            distance_light_year: distance_light_year,
            host_star_mass: host_star_mass,
            host_star_temperature: host_star_temperature,
            image: image}), 
        redirect: "follow" 
    }     
      
    // fetching data 
    fetch(`/planets/`, option) 
        .then(async res => await res.redirected)
        .then(async () => await window.location.assign(`/planets/all`)) 
        .catch(err => alert('Something happen wrong!')); } 
        
       