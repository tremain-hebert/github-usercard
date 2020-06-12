/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
.get('https://api.github.com/users/tremain-hebert')
  .then((res) => {
    console.log(`Here is the users GitHub Card: `, res);
    let builtCard = buildCard(res);
    cards.appendChild(builtCard);
  })
  .catch((err) => {
    console.log(`There was an error: `, err);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = [ 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

for (let i=0; i<followersArray.length; i++){
axios
.get(`https://api.github.com/users/${followersArray[i]}`)
  .then((res) => {
    console.log(`Here is the users GitHub Card: `, res);
    cards.appendChild(buildCard(res));
  })
  .catch((err) => {
    console.log(`There was an error: `, err);
  });
};
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function buildCard(url) {
  let newCard = document.createElement('div');
  let userImg = document.createElement('img');
  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let profileLink = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  
  //Classes
  profileLink.setAttribute('href', `${url.data.url}`);
  userImg.setAttribute('src', url.data.avatar_url);
  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');



  //Content
  name.textContent = `${url.data.name}`;
  userName.textContent = `${url.data.login}`;
  location.textContent = `Location: ${url.data.location}`;
  profile.textContent = `Profile: `;
  profileLink.textContent = `${profileLink.href}`;
  followers.textContent = `Followers: ${url.data.followers}`;
  following.textContent = `Following: ${url.data.following}`;
  bio.textContent = `Bio: ${url.data.bio}`;
  
  
  //Append
  newCard.appendChild(userImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  
  return newCard;
}

let cards = document.querySelector('.cards');



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
