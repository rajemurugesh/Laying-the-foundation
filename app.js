import React from "react";
import ReactDom from "react-dom/client";
import logo from "./assets/logo.jpg";
import user from "./assets/usericon.png"


/* Nested header element in React.createElement */
const header1 = React.createElement(
    'div',
    {class: 'title'},
    React.createElement('h1', {id:"heading"}, "Namaste React"),
    React.createElement('h2', {id:"main-heading"}, "Laying the foundation "),
    React.createElement('h2', {id:"sub-heading"}, "Nested Header Element using React.createElement(h1,h2,h3 inside a div with class)")
)

/* the same element using JSX */
const header = (
    <div className="title">
        <h1>Namaste React</h1>
        <h2>Laying the foundation</h2>
        <h3>Nested Header Element using React.createElement(h1,h2,h3 inside a div with class</h3>

    </div>
)


/* A functional component of the same with JSX */

function HeaderComponent () {
return (
    <div className="title">
        <h1>Namaste React</h1>
        <h2>Laying the foundation</h2>
        <h3>Nested Header Element using React.createElement(h1,h2,h3 inside a div with class</h3>
    </div>
)
}

/* Attributes pass into the tag in JSX */
const headerattribute =(
    <div className="title">
        <h1 id="heading" title="react">Namaste React</h1>
        <h2>Laying the foundation</h2>
        <h3>Nested Header Element using React.createElement(h1,h2,h3 inside a div with class</h3>

    </div>
)


/* Component Composition */
const Component = () => {
    return (
        <div>
            {header1}
            {header}
            {headerattribute}
            { HeaderComponent }
            {<HeaderComponent />}
            { <HeaderComponent></HeaderComponent>}

        </div>
    )
}

const Navbar = () => {
    return (
        <div className="heading-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <p className="logo-name">Namaste Dev React</p>
            </div>

            <div className="search">
                <input type="text" value="search" placeholder="search"/>
            </div>

            <div className="avatar">
                <div className="user-icon" value="user-icon"><i class="fa fa-user" aria-hidden="true" /></div>

            </div>

        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(header1);
// root.render(header);
root.render(<Navbar />);