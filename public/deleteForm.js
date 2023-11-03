const deletePlanet = e =>{ 
    e.preventDefault(); 
    
    const id = document.getElementById('id').innerHTML;
    console.log(id);

    

    const option = {  
        method: "DELETE", 
        //redirect: "follow" 
    }     
      
    // fetching data 
    fetch(`/planets/deletePlanet/${id}`, option) 
        .then(console.log(id))
        .then(async res => await res.redirected)
        .then(async () => await window.location.assign(`/planets/all`)) 
        .catch(err => alert('Something happen wrong!')); } 
        
       