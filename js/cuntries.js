const loadCuntries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCuntries(data))
}
loadCuntries()

const displayCuntries = cuntries => {
    const divContainar = document.getElementById('cuntries');
    cuntries.forEach(cuntry => {
        const div = document.createElement('div');
        div.classList.add('cuntry');
        div.innerHTML = `
        <h3>${cuntry.name.official}</h3>
        <p>${cuntry.capital}</p>
        <button onclick="loadCuntryByName('${cuntry.name}')">Details</button>
        `;
        divContainar.appendChild(div);
    });
}

const loadCuntryByName = name => {
    console.log(name)
}