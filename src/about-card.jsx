import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard(){
    return <div class="scroll"  >
        <Card id="about-card" class="text-white overflow-auto card about-card bg-dark">
            <Card.Title><h1 class="heading-about">About Me</h1></Card.Title>
            <hr class="hr"></hr>
            <Card.Subtitle class="paragraph-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Card.Subtitle>

<Card.Title class="heading-skills"><h1 >Skills</h1></Card.Title>
<hr class="hr"></hr>
<Card.Subtitle class=""><h6 class="paragraph-content">Porgramming Languaes : Python, Java, C/C++</h6>
<h6 class="paragraph-content">Development : Android, Java EE, MySQL</h6></Card.Subtitle>
<blockquote class="blockquote mb-0  quote">
      <p class="quote-content" ><img class="quote-icon-left" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk1LjMzM3B4IiBoZWlnaHQ9Ijk1LjMzMnB4IiB2aWV3Qm94PSIwIDAgOTUuMzMzIDk1LjMzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTUuMzMzIDk1LjMzMjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMC41MTIsNDMuOTM5Yy0yLjM0OC0wLjY3Ni00LjY5Ni0xLjAxOS02Ljk4LTEuMDE5Yy0zLjUyNywwLTYuNDcsMC44MDYtOC43NTIsMS43OTMNCgkJCWMyLjItOC4wNTQsNy40ODUtMjEuOTUxLDE4LjAxMy0yMy41MTZjMC45NzUtMC4xNDUsMS43NzQtMC44NSwyLjA0LTEuNzk5bDIuMzAxLTguMjNjMC4xOTQtMC42OTYsMC4wNzktMS40NDEtMC4zMTgtMi4wNDUNCgkJCXMtMS4wMzUtMS4wMDctMS43NS0xLjEwNWMtMC43NzctMC4xMDYtMS41NjktMC4xNi0yLjM1NC0wLjE2Yy0xMi42MzcsMC0yNS4xNTIsMTMuMTktMzAuNDMzLDMyLjA3Ng0KCQkJYy0zLjEsMTEuMDgtNC4wMDksMjcuNzM4LDMuNjI3LDM4LjIyM2M0LjI3Myw1Ljg2NywxMC41MDcsOSwxOC41MjksOS4zMTNjMC4wMzMsMC4wMDEsMC4wNjUsMC4wMDIsMC4wOTgsMC4wMDINCgkJCWM5Ljg5OCwwLDE4LjY3NS02LjY2NiwyMS4zNDUtMTYuMjA5YzEuNTk1LTUuNzA1LDAuODc0LTExLjY4OC0yLjAzMi0xNi44NTFDNDAuOTcxLDQ5LjMwNywzNi4yMzYsNDUuNTg2LDMwLjUxMiw0My45Mzl6Ii8+DQoJCTxwYXRoIGQ9Ik05Mi40NzEsNTQuNDEzYy0yLjg3NS01LjEwNi03LjYxLTguODI3LTEzLjMzNC0xMC40NzRjLTIuMzQ4LTAuNjc2LTQuNjk2LTEuMDE5LTYuOTc5LTEuMDE5DQoJCQljLTMuNTI3LDAtNi40NzEsMC44MDYtOC43NTMsMS43OTNjMi4yLTguMDU0LDcuNDg1LTIxLjk1MSwxOC4wMTQtMjMuNTE2YzAuOTc1LTAuMTQ1LDEuNzczLTAuODUsMi4wNC0xLjc5OWwyLjMwMS04LjIzDQoJCQljMC4xOTQtMC42OTYsMC4wNzktMS40NDEtMC4zMTgtMi4wNDVjLTAuMzk2LTAuNjA0LTEuMDM0LTEuMDA3LTEuNzUtMS4xMDVjLTAuNzc2LTAuMTA2LTEuNTY4LTAuMTYtMi4zNTQtMC4xNg0KCQkJYy0xMi42MzcsMC0yNS4xNTIsMTMuMTktMzAuNDM0LDMyLjA3NmMtMy4wOTksMTEuMDgtNC4wMDgsMjcuNzM4LDMuNjI5LDM4LjIyNWM0LjI3Miw1Ljg2NiwxMC41MDcsOSwxOC41MjgsOS4zMTINCgkJCWMwLjAzMywwLjAwMSwwLjA2NSwwLjAwMiwwLjA5OSwwLjAwMmM5Ljg5NywwLDE4LjY3NS02LjY2NiwyMS4zNDUtMTYuMjA5Qzk2LjA5OCw2NS41NTksOTUuMzc2LDU5LjU3NSw5Mi40NzEsNTQuNDEzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />                       Imagination is everything. It is the preview of life's coming attractions.                                           <img class="quote-icon-right" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk4LjgyOXB4IiBoZWlnaHQ9Ijk4LjgyOXB4IiB2aWV3Qm94PSIwIDAgOTguODI5IDk4LjgyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTguODI5IDk4LjgyOTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik05Ni43Niw0MS42MDNDOTEuNTExLDIyLjgzMSw3OC41NjIsOS4yMDQsNjUuOTc1LDkuMjA0Yy0xLjAxMSwwLTIuMDIxLDAuMDg4LTMuMDA1LDAuMjYyDQoJCQljLTAuNTU4LDAuMDk4LTEuMDQ2LDAuNDI2LTEuMzQ4LDAuOTAyYy0wLjMwMSwwLjQ3OS0wLjM4NiwxLjA2MS0wLjIzMywxLjYwNWwyLjU5MSw5LjI2OGMwLjI1LDAuODk1LDEuMTEzLDEuNSwyLjAxLDEuNDU5DQoJCQlsMC4yMDYtMC4wMDRjNC42NjgsMCwxMy4xOTksNi45OTYsMTcuNTQ4LDIyLjU0NWMwLjE3MiwwLjYxNywwLjMzNSwxLjI0OCwwLjQ5MiwxLjkwNmMtNC44ODItMi40MTYtMTAuNzA2LTIuOTc1LTE1Ljk4LTEuNTA2DQoJCQlDNTYuMzU4LDQ4Ljk3LDQ5LjM4OCw2MS4zNTYsNTIuNzE0LDczLjI1MmMyLjY5Niw5LjYzOSwxMS41NjMsMTYuMzczLDIxLjU2MywxNi4zNzNjMi4wMzcsMCw0LjA3MS0wLjI4MSw2LjA0Ni0wLjgzNA0KCQkJYzcuODQ2LTIuMTkzLDEzLjc0NS04LjcwNywxNi42MTEtMTguMzM4Qzk5LjUyMSw2MS43NjQsOTkuNDU2LDUxLjI0OSw5Ni43Niw0MS42MDN6Ii8+DQoJCTxwYXRoIGQ9Ik0xNC4wODgsOS4yMDZjLTEuMDA5LDAtMi4wMiwwLjA4Ni0zLjAwMywwLjI2Yy0wLjU1NywwLjA5Ni0xLjA0NiwwLjQyNi0xLjM0NywwLjkwMg0KCQkJYy0wLjMwMSwwLjQ3OS0wLjM4NiwxLjA2MS0wLjIzNCwxLjYwNWwyLjU5Miw5LjI2OGMwLjI1LDAuODk1LDEuMDk3LDEuNSwyLjAxLDEuNDU5bDAuMjA0LTAuMDA0DQoJCQljNC42NjgsMCwxMy4yLDYuOTk2LDE3LjU0OSwyMi41NDVjMC4xNzMsMC42MjEsMC4zMzYsMS4yNTIsMC40OTIsMS45MDZjLTQuODg0LTIuNDE2LTEwLjcwNi0yLjk3NS0xNS45OC0xLjUwNg0KCQkJQzQuNDc1LDQ4Ljk3LTIuNDk3LDYxLjM1NiwwLjgzMSw3My4yNTJjMi42OTYsOS42MzksMTEuNTYzLDE2LjM3MywyMS41NjMsMTYuMzczYzIuMDM3LDAsNC4wNzEtMC4yODEsNi4wNDctMC44MzQNCgkJCWM3Ljg0NS0yLjE5MywxMy43NDQtOC43MDcsMTYuNjExLTE4LjMzOGMyLjU4Ni04LjY4OSwyLjUyMi0xOS4yMDUtMC4xNzUtMjguODUyQzM5LjYyNSwyMi44MzEsMjYuNjc4LDkuMjA2LDE0LjA4OCw5LjIwNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /></p>
      <footer class="blockquote-footer">Albert Einstein</footer>
    </blockquote>
        </Card>

    </div>
}

export default AboutCard;