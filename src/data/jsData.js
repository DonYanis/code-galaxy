const jsData = 
[
    {
        "id" : 1,
        "task" : "complete with the right html tag to include javascript in an html file",
        "code" : [
            "<blank>",
            "tbspc console.log('hello from console')",
            "</blank>"
        ],
        "choices" : ["javascript", "script", "code", "js"],
        "answers" : ["script","script"]
    },
    {
        "id" : 2,
        "task" : "Declare a constant x and display it in an alert box, then print it to the console",
        "code" : [
            "blank x = \"Hello World!\"",
            "blank(x)",
            "blank(x)"
        ],
        "choices" : ["let", "var", "const", "print", "printf", "console.log", "alert", "alertBox", "console.alert","writeln"],
        "answers" : ["const", "alert", "console.log"]
    },
    {
        "id" : 3,
        "task" : "Display in an alert box the value of x if it's greater than 4 and less than 9. Otherwise, if it's equal (both in type and value) to 0 or 1, display x+1",
        "code" : [
            "if (x > 4 blank x < 9) blank",
            "tbspc blank(x)",
            "} else if (x blank 0 blank x blank 1) blank",
            "tbspc blank(x + 1)",
            "}"
        ],
        "choices" : ["console.alert", "printf", "and", "or","then", "alert", "&&", "&", "|", "||", "+", "{", "}", "=", "==", "==="],
        "answers" : ["&&","{", "alert", "===", "||", "===", "{", "alert" ]
    },
    {
        "id": 4,
        "task": "Ternary condition : the variable should contain ",
        "code": [
            "const x = 10",
            "const result = x > 5 blank \"Greater than 5\" blank \"Less than or equal to 5\" "
        ],
        "choices": ["if", "else", ":", "!", "?", "test", "default", "other", "is", "isnot", "then"],
        "answers": ["?", ":"]
    },
    {
        "id": 5,
        "task": "Loops : calculate the sum of the numbers from 0 to 10",
        "code": [
            "blank sum = 0",
            "for (blank; blank; blank) {",
            "tbspc sum blank i",
            "}"
        ],
        "choices": ["++", "+=", "+", "const", "int", "let", "i+", "i++", "i+1", "i<11", "i<10", "i=0", "i", "int i", "int i=0", "let i=0"],
        "answers": ["let", "let i=0", "i<11", "i++", "+="]
    },
    {
        "id": 6,
        "task": "Loops : The same thing with the previous question but with a while loop",
        "code": [
            "blank sum = 0",
            "blank i = 1",
            "blank (i <= 10) {",
            "tbspc sum blank i",
            "tbspc blank",
            "}"
        ],
        "choices": ["i+1", "const", "let", "i++", "while", "repeat", "+=", "whenever", "doWhile"],
        "answers": ["let", "let", "while", "+=", "i++"]
    },
    {
        "id": 7,
        "task": "Functions: Write a function that returns the factorial of a number (recursive version)",
        "code": [
            "blank factorial(blank) {",
            "tbspc if (n === 0 blank n === 1) blank",
            "tbspctbspc blank 1",
            "tbspc blank",
            "tbspc else {",
            "tbspctbspc blank n * blank(n - 1)",
            "tbspc }",
            "}"
        ],
        "choices": ["define", "func", "or", "and", "&", "{", "||", "|", "&&", "}", "n", "int n","number n","return", "function", "factorial"],
        "answers": ["function", "n", "||", "{","return", "}", "return", "factorial"]
    },
    {
        "id": 8,
        "task": "The same thing but with an arrow function : ",
        "code": [
            "blank factorial = (blank) blank (n === 0 blank n === 1) blank 1 blank n * blank(n - 1)"
        ],
        "choices": ["define", "const", "or", "and", "&", "||", "|", "&&", ":", "?", "!","->", "=>", "n", "int n","number n","return", "function", "factorial"],
        "answers": ["const", "n", "=>", "||", "?", ":", "factorial"]
    },
    {
        "id": 9,
        "task": "Maths : Find in this order : the absolute value, smallest integer greater than or equal, largest integer less than or equal, rounded value, maximum and minimum value, x raised to the power y, square root, random number, ",
        "code": [
            "Math.blank(-5)",
            "Math.blank(5.3)",
            "Math.blank(5.8)",
            "Math.blank(5.49)",
            "Math.blank(5, 10, 3)",
            "Math.blank(5, 10, 3)",
            "Math.blank(2, 3)",
            "Math.blank(16)",
            "Math.blank()"
        ],
        "choices": ["abs", "absolute", "absoluteValue", "rounded", "round", "max", "maximum", "min", "minimum", "ceil", "upperBound", "lowerBound", "floor","raisedTo","power", "pow","sqr", "squareRoot", "sqrt", "random", "number"],
        "answers": ["abs", "ceil", "floor", "round", "max", "min", "pow", "sqrt", "random"]
    },
    {
        "id": 10,
        "task": "Arrays : In this task you should select the even numbers, multiply them by 2 then calculate the sum",
        "code": [
            "const numbers = [1, 2, 3, 4, 5]",
            "const result = numbers",
            "tbspc .blank(num => num % 2 === 0)",
            "tbspc .blank(num => num * 2)",
            "tbspc .blank((acc, curr) => acc + curr, 0)"
        ],
        "choices": ["filter", "select", "satisfy", "where", "iterate","apply", "map", "add", "sum", "reduce"],
        "answers": ["filter", "map", "reduce"]
    },
    {
        "id": 11,
        "task": "Strings : Get the words of this sentence, transform each one to upper case and make a an other sentence out from them but '-' between the words instead of a white space",
        "code": [
            "const sentence = \"The quick brown fox jumps over the lazy dog\"",
            "const result = sentence",
            "tbspc .blank(\" \")",
            "tbspc .blank(word => word.blank())",
            "tbspc .blank(\"-\")"
        ],
        "choices": ["split","cut","get","iterate","for", "map","upperCase", "toUpperCase", "link", "stringify", "join"],
        "answers": ["split", "map", "toUpperCase", "join"]
    },
    {
        "id": 12,
        "task": "Time : Increment the value of count each 1 second, stop this process after 5 seconds",
        "code": [
            "let count = 0",
            "const intervalId = blank(() => {",
            "tbspc count++",
            "}, blank)",
            "blank(() => {",
            "tbspc blank(intervalId)",
            "}, blank)"
        ],
        "choices": ["timeInterval", "new Time", "setInterval", "1s", "1000", "wait", "sleep", "setTimeout", "stopInterval", "clearInterval", "clearTime", "3s","3000"],
        "answers": ["setInterval","1000", "setTimeout", "clearInterval", "3000" ]
    },
    {
        "id": 13,
        "task": "DOM : select and change the text of this html element:  \n <p id=\"demo\">This is a demonstration.</p>",
        "code": [
            "const element = docoment.blank('blank')",
            "element.blank = 'text'"
        ],
        "choices": [ "getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "getElementsByTagNameNS", "getSelection", "querySelector", "querySelectorAll", "text" ,"innerText", "demo", ".demo", "#demo"],
        "answers": ["getElementById", "demo", "innerText"]
    },
    {
        "id": 14,
        "task": "DOM : select and change the text of this html element:  \n <p class=\"demo\">This is a demonstration.</p>",
        "code": [
            "const elements = docoment.blank('blank')",
            "elements[0].blank = 'text'"
        ],
        "choices": ["getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "getElementsByTagNameNS", "getSelection", "querySelector", "querySelectorAll", "text" ,"innerText", "demo", ".demo", "#demo"],
        "answers": ["getElementsByClassName", "demo", "innerText"]
    },
    {
        "id": 15,
        "task": "DOM : select and change the text of this html element:  \n <p class=\"demo\">This is a demonstration.</p>",
        "code": [
            "const element = docoment.blank('blank')",
            "element.blank = 'text'"
        ],
        "choices": ["getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "getElementsByTagNameNS", "getSelection", "querySelector", "querySelectorAll", "text" ,"innerText", "demo", ".demo", "#demo"],
        "answers": ["querySelector", ".demo", "innerText"]
    },
    {
        "id": 16,
        "task": "DOM : what do you think about this ?",
        "code": [
            "<div id=\"container\">",
            "tbspc <p class=\"paragraph\">First paragraph</p>",
            "tbspc <p class=\"paragraph\">Second paragraph</p>",
            "tbspc <p id=\"special\">Special paragraph</p>",
            "</div>",
            "\n",

            "const paragraphs = docoment.blank('blank')",
            "const special = docoment.querySelector('blank')",
            "const container = docoment.blank('container')",
            "element.blank = '<h1>Hello</h1>'"
        ],
        "choices": ["getElementById", "getElementsByName", "getElementsByTagName", "getSelection", "querySelector", "querySelectorAll", "text" ,"innerText","innerHTML","paragraph", ".paragraph", "#paragraph", "special", ".special", "#special"],
        "answers": ["querySelectorAll", ".paragraph", "#special", "getElementById", "innerHTML"]
    },
    {
        "id": 17,
        "task": "CSS : Change the background color of the box , the width and style the border",
        "code": [
            "const box = document.blank('.box')",
            "box.blank.blank = 'blue'",
            "box.blank.width = '200px'",
            "box.blank.blank = '2px solid black'"
        ],
        "choices": ["querySelector","getElementsByClassName", "css", "style", "styles", "backgroundColor","background", "borderStyle", "border"],
        "answers": ["querySelector", "style", "backgroundColor", "style", "style", "border"]
    },
    {
        "id": 18,
        "task": "create a paragraph element with some text and append it to the html element with id of container",
        "code": [
            "const paragraph = document.blank('blank')",
            "paragraph.textContent = 'New paragraph'",
            "document.blank('container').blank(paragraph)"
        ],
        "choices": ["newElement","createElement","htmlElement", "p", "<p>", "<p></p>", "getElementById", "querySelector","getElement", "appendChild","appendElement"],
        "answers": ["createElement", "p", "getElementById", "appendChild"]
    },
    {
        "id": 19,
        "task": "In this task the goal is to change the style of an element if a certain button is clicked by adding the class 'active' to the element or removing it from the element ",
        "code": [
            "const targetElement = document.getElementById('targetElement')",
            "const toggleButton = document.getElementById('toggleButton')",
            "\n",
            "toggleButton.blank('blank', function() {",
            "tbspc targetElement.blank.blank('active')",
            "})"
        ],
        "choices": ["events", "addEventListener", "listen", "onclick", "click", "mouseClick", "classes", "classList","add", "toggleClass", "toggle", "addOrRemove", "class"],
        "answers": ["addEventListener", "click", "classList", "toggle"]
    },
    {
        "id": 20,
        "task": "Forms : Get the username and the password after submitting the form, but prevent the page from reloading ",
        "code": [
            "const form = document.getElementById('myForm');",
            "",
            "form.blank('blank', function(event) {",
            "",
            "tbspc event.blank();",
            "",
            "tbspc const username = document.blank('input[name=\"username\"]').blank;",
            "tbspc const password = document.blank('input[name=\"password\"]').blank;",
            "});"
        ],
        "choices": ["events", "addEventListener", "listen","onsubmit","submitting", "submit","stopReload", "preventDefault","noRelaod", "querySelector","getElement", "get", "value", "target", "text"],
        "answers": ["addEventListener", "submit", "preventDefault", "querySelector", "value", "querySelector", "value" ]
    }
]

export default jsData