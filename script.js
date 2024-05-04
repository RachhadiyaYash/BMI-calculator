console.log("connected");

function countBmi() {
    let heightOfUser = document.getElementById("userHeight").value;
    let weightOfUser = document.getElementById("userWeight").value;
    let errorMassage = document.getElementById("error");
    let resultMassage = document.getElementById("resultTag");

    if (heightOfUser.trim() === "" || isNaN(heightOfUser)) {
        errorMassage.innerHTML = "please enter only number";
        errorMassage.style.color = "Red";
    } else {
        errorMassage.innerHTML = "";
    }

    if (weightOfUser.trim() === "" || isNaN(weightOfUser)) {
        errorMassage.innerHTML = "please enter only number";
    } else {
        errorMassage.innerHTML = "";
    }

    let bmi = (weightOfUser / ((heightOfUser * heightOfUser) / 10000)).toFixed(1);

    if (bmi < 18.6) {
        resultMassage.innerHTML = `Under Weight : <span>${bmi}</span>`;
        resultMassage.style.color = "blue";  
    } else if (bmi >= 18.6 && bmi < 24.9) {
        resultMassage.innerHTML = `Normal : <span>${bmi}</span>`;
        resultMassage.style.color = "Green";
    } else if (bmi > 25) {
        resultMassage.innerHTML = `Over Weight : <span>${bmi}</span>`;
      resultMassage.style.color = "red";
    } else {
        resultMassage.innerHTML = "";
    }
}
