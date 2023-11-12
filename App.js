import React from "react"
import ReactDOM from "react-dom"

const heading=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1",class:"child1"},
            [
                React.createElement(
                    "h2",
                    {id:"upper"},
                    "I'm h1 tag!"
                ),
                React.createElement(
                    "h2",
                    {id:"lower"},
                    "I'm h2 tag!!"
                )
            ]),
            React.createElement(
                "div",
                {id:"child2",class:"child2"},
                [
                    React.createElement(
                        "h3",
                        {id:"upper"},
                        "I'm h3 tag!"
                    ),
                    React.createElement(
                        "h4",
                        {id:"lower"},
                        "I'm h4 tag!!"
                    )
                ])
    ]
    );
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);