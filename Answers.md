# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

A: React JS is a javascript library used to build user interfaces on the front end. It solves the problem of expensive DOM manipulation(in performance terms) for modern web applications with a lot of user interaction by updating the DOM using the virtual DOM.

1. What does it mean to think in react?

A: It means to think about complex web applications by breaking them down into small reusable pieces(called components). It also involves thinking about the way data is used and handled using 'state' and 'props'.

1. Describe state.

A: State are variables declared within a component and are used to hold on to and manage values that change in our application.

1. Describe props.

A: props, short for properties (like parameters passed into functions) are used to pass data from the parent component to the child components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A: Side effects are changes made to our application or components beyond the sccope described in our function, like fetching data from an API or manually changing the DOM. We use the useEffect hook to manage side effects.
