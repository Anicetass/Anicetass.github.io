// dark light theme
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').innerHTML = formattedTime;
}

updateClock();

setInterval(updateClock, 1000);

// form
function calculateAverage(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
    }
    let avg=sum/numbers.length;
    let color="orange";
    if (avg<5) {
        color="red"
    }
    else if (avg>=8) {
        color="green"
    }
    return [color, avg];
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName=document.getElementById("first-name-id").value;
    const lastName=document.getElementById("last-name-id").value;
    const email=document.getElementById("email-id").value;
    const phone=document.getElementById("phone-id").value;
    const adress=document.getElementById("address-id").value;
    const number1=document.getElementById("num1-id").value;
    const number2=document.getElementById("num2-id").value;
    const number3=document.getElementById("num3-id").value;
    const number4=document.getElementById("num4-id").value;
    const number5=document.getElementById("num5-id").value;
    const numbers=[number1, number2, number3, number4, number5];
    const formAns=[firstName, lastName, email, phone, adress, numbers];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    console.log(formAns);

    const outputDiv=document.getElementById("output-id")
    outputDiv.innerHTML= `
    <div class="form-output">
    <p><b>${firstName} ${lastName} (${email})<b>: <span style="color:${calculateAverage(numbers)[0]}"> ${calculateAverage(numbers)[1]}</span></p>
    <p>${document.getElementById("first-name-id").getAttribute("placeholder")}: ${firstName}\n<p>
    <p>${document.getElementById("last-name-id").getAttribute("placeholder")}: ${lastName}\n<p>
    <p>${document.getElementById("email-id").getAttribute("placeholder")}: ${email}\n<p>
    <p>${document.getElementById("phone-id").getAttribute("placeholder")}: ${phone}\n<p>
    <p>${document.getElementById("address-id").getAttribute("placeholder")}: ${adress}\n<p>
    <p>${document.getElementById("num1-id").getAttribute("placeholder")}: ${number1}\n<p>
    <p>${document.getElementById("num2-id").getAttribute("placeholder")}: ${number2}\n<p>
    <p>${document.getElementById("num3-id").getAttribute("placeholder")}: ${number3}\n<p>
    <p>${document.getElementById("num4-id").getAttribute("placeholder")}: ${number4}\n<p>
    <p>${document.getElementById("num4-id").getAttribute("placeholder")}: ${number5}\n<p>
    </div>
    `
    }
);