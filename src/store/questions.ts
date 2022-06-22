const questions = [
    {
        id: '1',
        question: 'What is GIT?',
        category: 'fundamentals',
        answers: ['Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.', 'Simply put, Git is a version control system that lets you manage and keep track of your source code history.']
    },
    {
        id: '2',
        question: 'what is callstack?',
        category: 'javascript',
        answers: ["The call stack is a LIFO (Last In, First Out) stack. The event loop continuously checks the call stack to see if there's any function that needs to run. While doing so, it adds any function call it finds to the call stack and executes each one in order."]
    },
    {
        id: '3',
        question: 'what is shadow dom?',
        category: 'javascript',
        answers: ["TShadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM."]
    },
    {
        id: '4',
        question: 'What is hoisting?',
        category: 'javascript',
        answers: ["JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared."]
    },
    {
        id: '5',
        question: 'What is a stub?',
        category: 'nodejs',
        answers: ['Stubbing and verification for node.js tests. Enables you to validate and override behaviour of nested pieces of code such as methods, require() and npm modules or even instances of classes. This library is inspired on node-gently, MockJS and mock-require.']
    }
];

export default questions;