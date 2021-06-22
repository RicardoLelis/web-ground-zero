// console.log("Working!");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const placeOfBirth = document.getElementById("place-of-birth");
const gender = document.getElementsByClassName("gender");
const form = document.getElementById("form");

function getData(event) {
    let selectedGender;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].id;
        }
    }

    const name = `${lastName.value}, ${firstName.value} - Sex: ${selectedGender}, Born in: ${placeOfBirth.value}`;
    console.log(name);
    // return name;
    event.preventDefault();
}

form.addEventListener('submit', getData)

// const user = getData();

// console.log(user);
