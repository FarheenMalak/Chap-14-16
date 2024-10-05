       // 1. Declare an empty array using JS literal notation
        let studentNamesLiteral = [];

        // 2. Declare an empty array using JS object notation
        let studentNamesObject = new Array();

        // 3. Declare and initialize a strings array
        let stringArray = ["John", "Sarah", "Mike"];

        // 4. Declare and initialize a numbers array
        let numbersArray = [1, 2, 3, 4, 5];

        // 5. Declare and initialize a boolean array
        let booleanArray = [true, false, true, false];

        // 6. Declare and initialize a mixed array
        let mixedArray = ["John", 25, true, { course: "Math" }, [1, 2, 3]];

        // 7. Declare and initialize an array with education qualifications
        let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

        // Display each qualification on a new line in the browser
        document.write("<h2>Educational Qualifications in Pakistan:</h2>");
        for (let i = 0; i < educationQualifications.length; i++) {
            document.write(educationQualifications[i] + "<br>");
        }

        // 8. Program to store 3 student names and scores, and display their scores & percentages
        let studentNames = ["John", "Sarah", "Mike"];
        let scores = [450, 480, 470];
        let totalMarks = 500;

        console.log("Student Scores and Percentages:");
        for (let i = 0; i < studentNames.length; i++) {
            let percentage = (scores[i] / totalMarks) * 100;
            console.log(`${studentNames[i]} scored ${scores[i]} with a percentage of ${percentage}%`);
        }

        // 9. Program to manipulate an array of color names
        let colors = ["Red", "Green", "Blue"];
        console.log(colors);

        // a. Add color to the beginning
        let newColorStart = prompt("What color would you like to add to the beginning?");
        colors.unshift(newColorStart);
        console.log(colors);

        // b. Add color to the end
        let newColorEnd = prompt("What color would you like to add to the end?");
        colors.push(newColorEnd);
        console.log(colors);

        // c. Add two colors to the beginning
        colors.unshift("Purple", "Pink");
        console.log(colors);

        // d. Delete the first color
        colors.shift();
        console.log(colors);

        // e. Delete the last color
        colors.pop();
        console.log(colors);

        // f. Add color at a specific index
        let indexAdd = parseInt(prompt("At which index would you like to add a color?"));
        let colorNameAdd = prompt("Enter the color name:");
        colors.splice(indexAdd, 0, colorNameAdd);
        console.log(colors);

        // g. Delete colors from a specific index
        let indexDelete = parseInt(prompt("At which index would you like to delete color(s)?"));
        let deleteCount = parseInt(prompt("How many colors would you like to delete?"));
        colors.splice(indexDelete, deleteCount);
        console.log(colors);

        // 10. Sort student scores in ascending order
        let sortedScores = [420, 350, 480, 390];
        sortedScores.sort((a, b) => a - b);
        console.log(sortedScores);

        // 11. Copy elements from cities array to selectedCities array
        let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
        let selectedCities = cities.slice(1, 4); // Copy from index 1 to 3
        console.log(selectedCities);

        // 12. Create a single string from the array using join method
        let arr = ["This", " is", " my", " cat"];
        let sentence = arr.join("");
        console.log(sentence);

        // 13. Reverse an array (Last In First Out)
        let stack = [];
        stack.push("First");
        stack.push("Second");
        stack.push("Third");

        console.log("Stack in reverse order:");
        while (stack.length > 0) {
            console.log(stack.pop()); // Displays elements in reverse order
        }

        // 14. Store phone manufacturers and display a dropdown menu
        let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
        document.write("<h2>Phone Manufacturers:</h2>");
        document.write("<select>");
        for (let i = 0; i < manufacturers.length; i++) {
            document.write(`<option>${manufacturers[i]}</option>`);
        }
        document.write("</select>");
