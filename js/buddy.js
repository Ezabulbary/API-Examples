const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = user => {
    const buddies = user.results;
    const buddiesContainer = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.first} email: ${buddy.email}`;
        buddiesContainer.appendChild(p);
    }
}