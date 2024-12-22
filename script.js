let sectionOne = document.querySelector("#section-1");

sectionOne.innerHTML = `<p>
    this is a sample paragraph.
</p>
`;

let sampleArr = ["the quick brown fox;", "jumps over the lazy dog."];

for (each of sampleArr) {
    console.log(each);
    sectionOne.innerHTML += `<p>${each}</p>`;
}

// form stuff
let userForm = document.querySelector("#user-form");

userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log("form triggerd");


    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm-password");
    // let submitBtn = document.querySelector("submit-btn");

    let shortUsername = false;
    let emptyUsername = false;
    let notEmail = false;
    let passwordNotMatch = false;


    if (username.value.length < 12) {
        shortUsername = true;
        console.log("Username too short");
    }


    if (username.value.trim() == "") {
        emptyUsername = true;
        console.log("Empty username");
    }

    // REDUNDANT: HTML input email has simple check
    // if(!email.value.trim().search("@")){
    //     notEmail = true;
    //     console.log("Invalid Email")
    // }

    if (password.value.trim() !== confirmPassword.value.trim()) {
        passwordNotMatch = true;
        console.log("Password does not match");
    }

})