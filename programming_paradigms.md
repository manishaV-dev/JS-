
## What is a Programming Paradigm?
Programming paradigms are different ways or styles in which a given program or programming language can be organized. Each paradigm consists of certain structures, features, and opinions about how common programming problems should be tackled.

## Popular Programming Paradigms :-

    1.Imperative Programming : Imperative programming consists of sets of detailed instructions that are given to the computer to execute in a given order. 
    It's called "imperative" because as programmers we dictate exactly what the computer has to do, in a very specific way.
    Imperative programming focuses on describing how a program operates, step by step.

    example: Say you want to bake a cake. Your imperative program to do this might look like this 

        1- Pour flour in a bowl
        2- Pour a couple eggs in the same bowl
        3- Pour some milk in the same bowl
        4- Mix the ingredients
        5- Pour the mix in a mold
        6- Cook for 35 minutes
        7- Let chill

    example 2 : filter an array of numbers to only keep the elements bigger than 5. Our imperative code might look like this:

        const nums = [1,4,3,6,7,8,9,2]
        const result = []

        for (let i = 0; i < nums.length; i++) {
              if (nums[i] > 5) result.push(nums[i])
        }
        console.log(result) // Output: [ 6, 7, 8, 9 ]


    2. Procedural Programming :- Procedural programming is a derivation of imperative programming, adding to it the feature of functions 
    (also known as "procedures" or "subroutines").
    In procedural programming, the user is encouraged to subdivide the program execution into functions, as a way of improving modularity and organization.

    example :
            function pourIngredients() {
                    - Pour flour in a bowl
                    - Pour a couple eggs in the same bowl
                    - Pour some milk in the same bowl
            }
          function mixAndTransferToMold() {
                    - Mix the ingredients
                    - Pour the mix in a mold
            }

          function cookAndLetChill() {
                    - Cook for 35 minutes
                    - Let chill
            }

          pourIngredients()
          mixAndTransferToMold()
          cookAndLetChill()
