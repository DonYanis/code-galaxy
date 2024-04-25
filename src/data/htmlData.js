const htmlData = 
[
    {
        "id": 1,
        "task": "Add the missing tag.",
        "code": ["blank ", "<html>", "tbspc blank ", "tbspc tbspc<title>Page Title</title>", "tbspc</body>", "</html>"],
        "choices": ["<header>", "<head>", "<body>", "<title>", "<!DOCTYPE html>"],
        "answers": ["<!DOCTYPE html>","<body>"]
    },
    {
        "id": 2,
        "task": "Complete the page title tag.",
        "code": ["tbspc<!DOCTYPE html>", "<html>", "tbspc<head>", "tbspc tbspc blank ", "tbspc</head>", "tbspc tbspc<body></body>", "tbspc </html>"],
        "choices": ["<title>Your title here</title>", "<titre></titre>", "<h1>Your title here</h1>", "<head>Your title here</head>"],
        "answers": ["<title>Your title here</title>"]
    },
    {
        "id": 3,
        "task": "Insert the title tag with the text Welcome to our site! as large as possible.",
        "code": ["<!DOCTYPE html>", "<html>", "tbspc<head>", "tbspc tbspc <title>Page Title</title>","tbspc</head>", "tbspc<body>", "tbspc tbspc blank ", "tbspc </body>", "</html>"],
        "choices": ["<h1>Welcome to our site!</h1>", "<h2>Welcome to our site!</h2>", "<h3>Welcome to our site!</h3>", "<h4>Welcome to our site!</h4>"],
        "answers": ["<h1>Welcome to our site!</h1>"]
    },
    {
        "id": 4,
        "task": "Add a tag with an introductory paragraph.",
        "code": ["<!DOCTYPE html>", "<html>", "tbspc <head>", "tbspc tbspc<title>Page Title</title>", "tbspc</head>", "tbspc<body>", "tbspc blank ", "tbspc</body>", "</html>"],
        "choices": ["<paragraph>Your paragraph here</paragraph>","<p>Your paragraph here</p>",  "</p>Introductory text</p>", "<h1>Your paragraph here</h1>"],
        "answers": ["<p>Your paragraph here</p>"]
    },
    {
        "id": 5,
        "task": "Insert the image tag with the src attribute pointing to \"image.jpg\" and the alt attribute with an appropriate description.",
        "code": ["<!DOCTYPE html>", "<html>", "tbspc <head>", "tbspc tbspc<title>Page Title</title>", "tbspc</head>", "tbspc<body>", "tbspc blank ", "tbspc</body>", "</html>"],
        "choices": ["<img src=\"image.jpg\">", "<img src=\"image.jpg\" alt=\"Image Description\">", "<img alt=\"Image Description\">", "<image src=\"image.jpg\" alt=\"Image Description\">"],
        "answers": ["<img src=\"image.jpg\" alt=\"Image Description\">"]
    },
    {
        "id": 6,
        "task": "Complete the <a> tag to create a link to \"https://example.com\" with the text \"Click here\".",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "</html>"
        ],
        "choices": ["<a href=\"https://example.com\">Click here</a>", "<a>Click here</a>", "<a>https://example.com</a>", "<link href=\"https://example.com\">Click here</link>"],
        "answers": ["<a href=\"https://example.com\">Click here</a>"]
    },
    {
        "id": 7,
        "task": "Add an unordered list with three list items containing fruits of your choice.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "</html>"
        ],
        "choices": ["<ul><li>Fruit 1</li><li>Fruit 2</li><li>Fruit 3</li></ul>", "<ol><li>Fruit 1</li><li>Fruit 2</li><li>Fruit 3</li></ol>", "<li><ul>Orange</ul><ul>Apple</ul><ul>Banana</ul></li>", "<ul><li>Car</li><li>Bus</li><li>Bike</li></ul>"],
        "answers": ["<ul><li>Fruit 1</li><li>Fruit 2</li><li>Fruit 3</li></ul>"]
    },
    {
        "id": 8,
        "task": "Insert a table with two rows and two columns filled with dummy data.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "</html>"
        ],
        "choices": ["<tb><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></tb>", "<table><td><td>A</td><td>B</td></td><td><td>C</td><td>D</td></td></table>", "<table><tr><tr>Apple</tr><tr>Orange</tr></tr><tr><tr>Banana</tr><tr>Pear</tr></tr></table>","<table><tr><td>Data 1</td><td>Data 2</td></tr><tr><td>Data 3</td><td>Data 4</td></tr></table>"],
        "answers": ["<table><tr><td>Data 1</td><td>Data 2</td></tr><tr><td>Data 3</td><td>Data 4</td></tr></table>"]
    },
    {
        "id": 9,
        "task": "Complete the form with tags for a text field with a placeholder and a submit button",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "</html>"
        ],
        "choices": ["<form><input type=\"text\" name=\"name\" placeholder=\"Your name\"></form>","<form><input type=\"text\" name=\"name\" placeholder=\"Your name\"><button type=\"submit\">Send</button></form>", "<form><input type=\"text\" name=\"name\"><button type=\"submit\">Submit</button></form>", "<form><input type=\"text\" name=\"name\"><input type=\"submit\" value=\"Send\"></form>"],
        "answers": ["<form><input type=\"text\" name=\"name\" placeholder=\"Your name\"><button type=\"submit\">Send</button></form>"]
    },
    {
        "id": 10,
        "task": "Add an HTML comment inside your code.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "tbspc</html>"
        ],
        "choices": ["<!-- Your comment here -- >", "<-- Comment -- >", "<!- HTML Comment -- >", "<!DOCTYPE html>"],
        "answers": ["<!-- Your comment here -- >"]
    },
    {
        "id": 11,
        "task": "Insert the tag for the site's footer.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "tbspc</html>"
        ],
        "choices": ["<footer>Your footer content here</footer>", "</footer></footer>", "<pied>© 2024</pied>", "<foot>Your footer content here</foot>"],
        "answers": ["<footer>Your footer content here</footer>"]
    },
    {
        "id": 12,
        "task": "Add an id \"main-content\" to the main content of the page.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "tbspc</html>"
        ],
        "choices": ["<div id=\"content\"></div>", "<div id=\"main\"></div>", "<div id=\"content-main\"></div>", "<div id=\"primary\"></div>"],
        "answers": ["<div id=\"main-content\"></div>", "<div id=\"content-main\"></div>"]
    },
    {
        "id": 13,
        "task": "Assign the id \"nav-bar\" to the navigation bar.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "tbspc</html>"
        ],
        "choices": ["<nav id=\"navigation\"></nav>", "<nav id=\"bar\"></nav>", "<nav id=\"nav-bar\"></nav>", "<nav id=\"menu\"></nav>"],
        "answers": ["<nav id=\"nav-bar\"></nav>"]
    },
    {
        "id": 14,
        "task": "Set an id \"side-panel\" for the sidebar.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "tbspc</html>"
        ],
        "choices": ["<div id=\"side-panel\"><div>", "<div id=\"sidebar\"></div>", "<div id=\"side-panel\"></div>", "<div id=\"side-panel\"></vid>"],
        "answers": ["<div id=\"side-panel\"></div>"]
    },
    {
        "id": 15,
        "task": "Give the div element a class name of container",
        "code": ["tbspc<!DOCTYPE html>", 
        "tbspc tbspc<html>", 
        "tbspc <head>", "tbspc<title>Galerie d'images</title>", 
        "tbspc</head>",
        "tbspc<body>", "tbspcblank ", "tbspc<div class=\"section\"></div>", "tbspc<div class=\"section\"></div>", "tbspcblank ", "tbspc</body>", "tbspc</html>"],     
        "choices": ["<div class=\"content\"></div>", "<div className=\"container\">   ","<div class=\"container\"></div>", "<div class=\"container\">","<div class=\"box\"></div>", "<div class=\"part\"></div>","<//div>","</div>"],
        "answers": ["<div class=\"container\">", "</div>"]
        },
        {
        "id": 16,
        "task": "Define the main wrapper identifier for a container encompassing the main content of the page.",
        "code": ["tbspc<!DOCTYPE html>", 
        "tbspc tbspc<html>", 
        "tbspc <head>", "tbspc<title>Galerie d'images</title>", 
        "tbspc</head>",
        "tbspc<body>", "tbspcblank ", "tbspc</body>", "tbspc</html>"],    
        "choices": ["<div identifier=\"main-wrapper\"></div>", "<div main-id=\"main-wrapper\"></div>", "<div id=\"main-wrapper\"></div>", "<div id=\"main\"></div>"],
        "answers": ["<div id=\"main-wrapper\">"]
        },
    {
        "id": 17,
        "task": "Add an id \"footer-content\" to the footer content.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "tbspc<p>", 
            "tbspc blank  " ,
            "tbspc Here </p>", 
            "tbspc</body>", 
            "tbspc</html>"
        ],
        "choices": ["<div identifier=\"footer-content\"></div>", "<div id=\"footer-content\"><div>", "<div id=\"content-footer\"></div>", "<div id=\"footer-content\">/div>"],
        "answers": ["<div id=\"footer-content\"></div>"]
    },
    {
        "id": 18,
        "task": "Create a complete HTML structure for a blog page with a header containing a title, a navigation bar, a main content with at least one article, and a sidebar containing widgets.",
        "code": [
            "<!DOCTYPE html>", 
            "<html>", 
            "tbspc <head>", 
            "tbspc tbspc <title>Page Title</title>", 
            "tbspc</head>",
            "tbspc<body>", 
            "<header>",
            "tbspc<h1>Blog Title</h1>",
            "tbspcblank",
            "tbspctbspc<ul>",
            "tbspctbspctbspc<li><a href=\"#\">Home</a></li>",
            "tbspctbspctbspc<li><a href=\"#\">Articles</a></li>",
            "tbspctbspctbspc<li><a href=\"#\">About</a></li>",
            "tbspctbspc</ul>",
            "tbspc</nav>",
            "blank",
            "blank",
            "tbspc<article>",
            "tbspctbspc<h2>Article Title</h2>",
            "tbspctbspc<p>Article Content...</p>",
            "tbspc</article>",
            "</main>",
            "<aside>",
            "tbspc<h3>Widgets</h3>",
            "tbspcblank",
            "tbspctbspc<li>Widget 1</li>",
            "tbspctbspc<li>Widget 2</li>",
            "tbspc</ul>",
            "blank",         
            "tbspc</body>", 
            "tbspc</html>"
        ],
        "choices": ["</nav>","<nav>","<header>", "</header>", "<main>", "<li>", "<ul>", "<ol>", "</aside>", "</side>", "<aside>"],
        "answers": ["<nav>", "</header>", "<main>", "<ul>", "</aside>"]
    },
    {
        "id": 19,
        "task": "Create a registration form with fields for name, email and password.",
        "code": [
            "<!DOCTYPE html>",
            "<html>",
            "tbspc <head>",
            "tbspc tbspc <title>Page Title</title>",
            "tbspc</head>",
            "tbspc<body>",
            "<blank blank=\"register.php\" blank=\"post\">",
            "tbspc<label for=\"name\">Name :</label>",
            "tbspc<input type=\"text\" id=\"name\" name=\"name\">",
            "tbspc<label for=\"email\">E-mail :</label>",
            "tbspc<input type=\"email\" id=\"email\" name=\"email\">",
            "tbspc<label for=\"password\">Password :</label>",
            "tbspc<input type=\"password\" id=\"password\" name=\"password\">",
            "tbspc<button blank=\"submit\">Sign up</button>",
            "</form>",
            "tbspc</body>",
            "tbspc</html>"
            ],
            "choices": ["<form>", "option", "method", "role","form", "action", "function", "type"],
            "answers": ["form", "action", "method", "type"]
         },
        {
        "id": 20,
        "task": "Create an image gallery with three images of your choice.",
        "code": ["tbspc<!DOCTYPE html>",
        "tbspc tbspc<html>",
        "tbspc <head>", "tbspc<title>Image Gallery</title>",
        "tbspc</head>",
        "tbspc<body>", 
        "tbspc<div>",
        "tbspctbspc<blank blank=\"pic1.jpg\" blank=\"Pic 1\">",
        "tbspctbspc<blank blank=\"pic2.jpg\" blank=\"Pic 2\">",
        "tbspctbspc<blank blank=\"pic3.jpg\" blank=\"Pic 3\">",
        "tbspc</div>",
        "tbspc</body>", "tbspc</html>"],
        "choices": ["img","image","file","alt","src","desc","from","to","pic"],
        "answers": ["img","src","alt","img","src","alt","img","src","alt"]
        },


]            



export default htmlData