const sortAZ = () => {
  usersData.sort((a, b) => a.username.localeCompare(b.username));
  setAllUsers(usersData);
}

const sortZA = () => {
  usersData.sort((a, b) => b.username.localeCompare(a.username));
  setAllUsers(usersData);
}

const getUsers = async() => {
  const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
  );
  return response.json();
};

const usersData = [];

const setUserHTML = user => `
  <div class="user" id="">
      <div class="photo_data">
      <img class="user_icon" src="./data/user_icon.svg">
          <div class="user_data">
              <div class="nick">
                  <h1 onclick="location.href='./User_page.html'" class="txt_nick">
                      ${user.username}
                  </h1>
              </div>
              <div class="contacts">
                  <li>${user.email}</li>
                  <li>${user.company.name}</li>
              </div>
          </div>
      </div>
      <div class="user_btn">
      <button onclick="location.href='./User_page.html'" class="go_profile">Go to profile</button>
      </div>
  </div>
`

const list = document.querySelector('.users_list');
const setAllUsers = users => {
  let usersHTML = '';
  const searchInput = document.querySelector(".search").value.toLowerCase();
  users.filter(user => {
    if (user.username.toLowerCase().includes(searchInput)) {
      usersHTML += setUserHTML(user);
    }
  })
  list.innerHTML = usersHTML;
};

const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", () => {
  setAllUsers(usersData);
})

const actions = async() => {
  const users = await getUsers();
  users.forEach(user => {
    usersData.push(user);
  })
  setAllUsers(usersData);
  sortAZ();
};

actions();