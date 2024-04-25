const cssData = [
    {
        "id": 1,
        "task": "Complete the CSS code to create a linear gradient effect going from top to bottom on an element with a starting color of blue and an ending color of white:",
        "code": [
            "div {",
            "tbspc background: linear-gradient(to bottom, blank , blank );",
            "}"
        ],
        "choices": ["white", "black", "red", "yellow","blue"],
        "answers": ["blue","white"]
    },
    {
        "id": 2,
        "task": "Complete the CSS code to create a box shadow effect around an element with a black shadow color, a distance of 10 pixels horizontally and vertically, and a blur of 5 pixels:",
        "code": [
            "div {",
            "tbspc blank : 10px 10px 5px blank ;",
            "}"
        ],
        "choices": ["black", "white", "gray", "transparent", "box-shadow", "shadow-style", "shadow"],
        "answers": ["box-shadow", "black"]
    },
    {
        "id": 3,
        "task": "Complete the CSS code to animate an element with a 360-degree clockwise rotation over 2 seconds:",
        "code": [
            "@blank rotate {",
            "tbspc from { transform: rotate(0deg); }",
            "tbspc to { transform: rotate(blank deg); }",
            "}",
            "div {",
            "tbspc blank: rotate 2s linear infinite;",
            "}"
        ],
        "choices": ["360", "270", "180", "90", "animation", "keyframes", "animate"],
        "answers": ["keyframes", "360", "animation"]
    },
    {
        "id": 4,
        "task": "Complete the CSS code to create a transition effect on the opacity of an element with a transition duration of 0.5 seconds:",
        "code": [
            "div {",
            "tbspc opacity: 0;",
            "tbspc blank : opacity 0.5s ease;",
            "}"
        ],
        "choices": ["transition", "transform", "animation", "translate"],
        "answers": ["transition"]
    },
    {
        "id": 5,
        "task": "Complete the CSS code to create a 45-degree rotation effect on an element:",
        "code": [
            "div {",
            "tbspc transform: blank (45deg);",
            "}"
        ],
        "choices": ["rotate", "scale", "skew", "translate"],
        "answers": ["rotate"]
    },
    {
        "id": 6,
        "task": "Complete the CSS code to create a transition effect on the background color of an element with a transition duration of 1 second:",
        "code": [
            "div {",
            "tbspc background-color: red;",
            "tbspc blank : background-color 1s ease;",
            "}"
        ],
        "choices": ["transition", "transform", "animation", "translate"],
        "answers": ["transition"]
    },
    {
        "id": 7,
        "task": "Complete the CSS code to create a scaling effect on an element with a scale factor of 1.5:",
        "code": [
            "div {",
            "tbspc blank: blank(1.5 );",
            "}"
        ],
        "choices": ["effect", "transform", "transition", "scale", "scaling", "animate"],
        "answers": ["transform", "scale"]
    },
    {
        "id": 8,
        "task": "Complete the CSS code to create a transition effect on the font size of a text with a transition duration of 0.3 seconds:",
        "code": [
            "p {",
            "tbspc font-size: 16px;",
            "tbspc blank : font-size 0.3s ease;",
            "}"
        ],
        "choices": ["transition", "transform", "animation", "translate"],
        "answers": ["transition"]
    },
    {
        "id": 9,
        "task": "Complete the CSS code to create a 90-degree rotation and a 50 pixels right translation effect on an element:",
        "code": [
            "div {",
            "tbspc transform: blank(90deg) blank (50px, 0);",
            "}"
        ],
        "choices": ["translate", "scale", "skew", "rotate", "rotaion", "translation"],
        "answers": ["rotate", "translate"]
    },
    {
        "id": 10,
        "task": "Complete the CSS code to create a transition effect on the position of an element with a transition duration of 0.5 seconds:",
        "code": [
            "div {",
            "tbspc position: relative;",
            "tbspc top: 0;",
            "tbspc left: 0;",
            "tbspc blank : top 0.5s ease, left 0.5s ease;",
            "}"
        ],
        "choices": ["transition", "transform", "animation", "translate"],
        "answers": ["transition"]
    },
    {
        "id": 11,
        "task": "Complete the CSS code to horizontally align the child elements of a flexbox container at the center:",
        "code": [
            ".container {",
            "tbspc display: flex;",
            "tbspc blank: blank ;",
            "}"
        ],
        "choices": ["center", "flex-start", "flex-end", "space-between", "space-around", "justify-content", "align-items"],
        "answers": ["justify-content", "center"]
    },
    {
        "id": 12,
        "task": "Complete the CSS code to vertically align the child elements of a flexbox container at the bottom:",
        "code": [
            ".container {",
            "tbspc display: flex;",
            "tbspc blank: blank ;",
            "}"
        ],
        "choices": ["flex-start", "center", "flex-end", "baseline", "stretch","justify-content", "align-items", "vertical-align"],
        "answers": ["align-items","flex-end"]
    },
    {
        "id": 13,
        "task": "Complete the CSS code to create equal spacing between the child elements of a flexbox container, with additional space before the first element and after the last element:",
        "code": [
            ".container {",
            "tbspc display: flex;",
            "tbspc blank: blank ;",
            "}"
        ],
        "choices": ["space-between", "space-around", "center", "flex-start", "flex-end", "justify-content", "align-items"],
        "answers": ["justify-content", "space-between"]
    },
    {
        "id": 14,
        "task": "Complete the CSS code to align the child elements of a flexbox container using elastic spacing, taking into account the extra space:",
        "code": [
            ".container {",
            "tbspc blank : flex;",
            "tbspc blank: blank ;",
            "}"
        ],
        "choices": ["space-between", "space-around", "center", "flex-start","display","flex-end", "justify-content", "align-items"],
        "answers": ["display","justify-content", "space-around"]
    },
    {
        "id": 15,
        "task": "Complete the CSS code to set the direction of layout for the child elements of a flexbox container from top to bottom:",
        "code": [
            ".container {",
            "tbspc display: flex;",
            "tbspc flex-direction: blank ;",
            "}"
        ],
        "choices": ["column", "row", "column-reverse", "row-reverse"],
        "answers": ["column"]
    },
    {
        "id": 16,
        "task": "Complete the CSS code to align the child elements of a flexbox container at the bottom and right:",
        "code": [
            ".container {",
            "tbspc display: flex;",
            "tbspc justify-content: blank ;",
            "tbspc align-items: blank ;",
            "}"
        ],
        "choices": ["flex-end", "center", "flex-start", "baseline", "stretch"],
        "answers": ["flex-end", "flex-end"]
    },
    {
        "id": 17,
        "task": "Complete the CSS code to reverse the order of child elements of a flexbox container horizontally:",
        "code": [
            ".container {",
            "tbspc display: flex;",
            "tbspc flex-direction: blank ;",
            "}"
        ],
        "choices": ["row", "column", "row-reverse", "column-reverse"],
        "answers": ["row-reverse"]
    },
    {
        "id": 18,
        "task": "Complete the CSS code to align the child elements of a flexbox container so that they are stretched across the entire height of the container:",
        "code": [
            ".container {",
            "tbspc display: flex;",
            "tbspc align-items: blank ;",
            "}"
        ],
        "choices": ["stretch", "center", "flex-start", "flex-end", "baseline"],
        "answers": ["stretch"]
    },
    {
        "id": 19,
        "task": "Complete the CSS code to draw a five-pointed star using positioning (absolute/relative) and transformation (rotate) properties:",
        "code": [
            ".star {",
            "tbspc position: blank;",
            "tbspc width: 0;",
            "tbspc height: 0;",
            "tbspc border-right: 50px solid transparent;",
            "tbspc border-bottom: 35px solid yellow;",
            "tbspc border-left: 50px solid transparent;",
            "tbspc blank: rotate(45deg);",
            "}",
            ".star:before {",
            "tbspc content: '';",
            "tbspc blank : absolute;",
            "tbspc top: 0;",
            "tbspc left: -40px;",
            "tbspc width: 0;",
            "tbspc height: 0;",
            "tbspc border-right: 50px solid transparent;",
            "tbspc border-bottom: 35px solid yellow ;",
            "tbspc border-left: 50px solid blank ;",
            "tbspc transform: rotate(-90deg);",
            "}"
        ],
        "choices": ["gold", "yellow", "orange", "position","white","transparent","realtive","absolute","fixed","transform","transition","animate"],
        "answers": ["realtive","transform", "position","transparent"]
    },
    {
        "id": 20,
        "task": "Complete the CSS code to create a custom dropdown menu effect. When the user hovers over the button, the menu content should fade in.",
        "code": [
            ".dropdown {",
            "tbspc position: relative;",
            "tbspc display: inline-block;",
            "}",
            ".dropdown-content {",
            "tbspc display: none;",
            "tbspc blank : absolute;",
            "tbspc background-color: #f9f9f9;",
            "tbspc min-width: 160px;",
            "tbspc box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);",
            "tbspc padding: 12px 16px;",
            "tbspc z-index: 1;",
            "}",
            ".dropdown:hover .dropdown-content {",
            "tbspc blank : block;",
            "tbspc opacity: 0;",
            "tbspc transition: opacity 0.5s ease;",
            "}",
            ".dropdown-content a {",
            "tbspc color: black;",
            "tbspc padding: 12px 16px;",
            "tbspc text-decoration: blank ;",
            "tbspc display: block;",
            "}",
            ".dropdown-content a:hover {",
            "tbspc blank : #ddd;",
            "}"
        ],
        "choices": ["display","background-color","position","none","justify-content","color","text-decoration","block","opacity","hover","transition","padding","z-index","black","white"],
        "answers": ["position","display","none","background-color"]
    }
]


export default cssData