
const findMyState = () => {
    const statusLat = document.querySelector('.statusLatitude')
    const statusLong = document.querySelector('.statusLongitude')
    const statusCity = document.querySelector('.statusCity')
    const statusState = document.querySelector('.statusState')

    const success = (position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const long = position.coords.longitude;


        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`

        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            statusLat.textContent = data.latitude
            statusLong.textContent = data.longitude
            statusCity.textContent = data.city
            statusState.textContent = data.principalSubdivision
            console.log(data);
        })
    }

    const error = () => {
        statusState.textContent = 'Unable to retrieve your location';
    }


    navigator.geolocation.getCurrentPosition(success, error)
}

document.querySelector('.find-state').addEventListener('click', findMyState);