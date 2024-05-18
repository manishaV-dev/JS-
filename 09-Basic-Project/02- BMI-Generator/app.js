const form = document.querySelector('form');
// will give empty value when 1st time page load so assign it in function
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault(); // use for- to prevent the value to show in URL when you submit the form

    //  this give you value in string to change wrap all in parenthesis and use parseINT
    //  const height = document.querySelector("#height").value;

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === ' ' || height < 0 || isNaN(height)){
        result.textContent = `Please provide valid height ${height}`
    }else if (weight === ' ' || weight < 0 || isNaN(weight)){
        result.textContent = `Please provide valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show result
        // result.textContent = `Your BMI is ${bmi}`;

        if(bmi <= 18.6){
            result.textContent = `Your BMI is ${bmi} and you are underweight 🙁`
        }else if(bmi > 18.6 && bmi<= 24.9){
            result.textContent = `Your BMI is ${bmi} and you are healthy 😊`
        }else{
            result.textContent = `Your BMI is ${bmi} and you are overweight 😥`
        }

    }
})