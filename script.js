document.getElementById("myButton").addEventListener("click", calculate);

function calculate(waterUsageDict, cropYieldDict, crop, acres){
    alert("hello");
    document.getElementById("outputValue").textContent = "cool.";
    return waterUsageDict.crop * cropYieldDict.crop * acres;
}

const cropWaterUsage = {
    // Source: chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://hess.copernicus.org/articles/15/1577/2011/hess-15-1577-2011.pdf
    // Measurements in m^3/ton
    corn : 1222,
    wheat : 1827,
    soy: 2145,
    potatoes: 224,
    rice: 1673
}

const cropYieldsPerAcre = {
    // Source: https://goodineverygrain.ca/2021/08/26/how-many-pounds-of-grain-can-one-acre-produce/
    // Measurements in tons/acre
    corn: 4.14,
    wheat: 2.3,
    soy: 1.27,
    potatoes: 10,
    rice: 3.69
}

let cropForm = document.getElementById("form");

cropForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let fieldSize = document.getElementById("fieldSize");
    let cropType = document.getElementById("cropType");
  
    if (fieldSize.value == "" || cropType.value == "") {
      alert("Ensure you input a value in both fields!");
    } 
    else {
      // perform operation with form input
      alert("This form has been successfully submitted!");
      console.log(
        `This form has a field size of ${fieldSize.value} and crop type of ${cropType.value}`
      );
    }
  });