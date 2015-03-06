import Ember from 'ember';

var classes = Ember.A([
  {
    subject: 'Javascript',
    courses: [
      {
        name: 'basic syntax',
        completed: true
      },
      {
        name: 'declaring variables',
        completed: true
      },
      {
        name: 'assigning variables',
        completed: true
      },
      {
        name: 'the console',
        completed: true
      },
      {
        name: 'adding values',
        completed: true
      },
      {
        name: 'simple math',
        completed: true
      },
      {
        name: 'understanding strings',
        completed: false
      },
      {
        name: 'creating objects',
        completed: false
      },
      {
        name: 'creating arrays',
        completed: false
      },
      {
        name: 'manipulating objects 1',
        completed: false
      },
      {
        name: 'manipulating arrays 1',
        completed: false
      },
      {
        name: 'reassigning properties in objects',
        completed: false
      },
      {
        name: 'adding properties in objects (reassigning)',
        completed: false
      },
      {
        name: 'understanding functions and why we need them',
        completed: false
      },
      {
        name: 'creating/calling simple functions',
        completed: false
      },
      {
        name: 'understanding function scope',
        completed: false
      },
      {
        name: 'creating functions with arguments',
        completed: false
      },
      {
        name: 'leveraging arguments',
        completed: false
      },
      {
        name: 'returning values from functions',
        completed: false
      },
      {
        name: 'manipulating arrays 2',
        completed: false
      },
      {
        name: 'using "delete"',
        completed: false
      },
      {
        name: 'assigning variables as a function',
        completed: false
      },
      {
        name: 'if/else',
        completed: false
      },
      {
        name: 'complex comparisons',
        completed: false
      },
      {
        name: 'using "typeof"',
        completed: false
      },
      {
        name: 'understanding loops',
        completed: false
      },
      {
        name: 'for loops',
        completed: false
      },
      {
        name: 'manipulating arrays 3 (sort, map, etc)',
        completed: false
      },
      {
        name: 'understanding callback functions',
        completed: false
      },
      {
        name: 'understanding prototype',
        completed: false
      },
      {
        name: 'creating "classes"',
        completed: false
      },
      {
        name: 'using "new"',
        completed: false
      },
      {
        name: 'using prototype to give classes functions',
        completed: false
      },
      {
        name: 'understanding closure',
        completed: false
      },
      {
        name: 'creating a function using closure',
        completed: false
      },
      {
        name: 'understanding recursion',
        completed: false
      },
      {
        name: 'creating a recursive function',
        completed: false
      },
      {
        name: 'XmlHttpRequest',
        completed: false
      },
      {
        name: 'json',
        completed: false
      },
      {
        name: 'asynchronous vs. synchronous',
        completed: false
      },
      {
        name: 'understanding promises',
        completed: false
      },
      {
        name: 'using promises',
        completed: false
      },
      {
        name: 'using multiple promises',
        completed: false
      },
      {
        name: 'what is a wrapper',
        completed: false
      }
    ]
  },
  {
    subject: 'The internet in general',
    courses: [
      {
        name: 'What is the internet',
        completed: false
      },
      {
        name: 'What is a domain',
        completed: false
      },
      {
        name: 'What is web server',
        completed: false
      },
      {
        name: 'How we serve web pages',
        completed: false
      },
      {
        name: 'How the browser interprets web pages',
        completed: false
      },
      {
        name: 'Linux vs. windows vs. osx',
        completed: false
      }
    ]
  },
  {
    subject: 'The Terminal',
    courses: [
      {
        name: 'What is the terminal and why do we need it',
        completed: false
      },
      {
        name: 'Navigating directories',
        completed: false
      },
      {
        name: 'Creating files',
        completed: false
      },
      {
        name: 'Removing files',
        completed: false
      },
      {
        name: 'cURL',
        completed: false
      }
    ]
  },
  {
    subject: 'Into to HTML',
    courses: [
      {
        name: 'What is HTML?',
        completed: false
      },
      {
        name: 'How we setup a file',
        completed: false
      },
      {
        name: 'tags',
        completed: false
      },
      {
        name: 'attributes',
        completed: false
      },
      {
        name: 'nesting elements',
        completed: false
      }
    ]
  },
  {
    subject: 'Intro to CSS',
    courses: [
      {
        name: 'What is CSS?',
        completed: false
      },
      {
        name: 'How we setup a file',
        completed: false
      },
      {
        name: 'classes vs. ids',
        completed: false
      },
      {
        name: 'using classes',
        completed: false
      },
      {
        name: 'using ids',
        completed: false
      },
      {
        name: 'using tags [NEED HTML]',
        completed: false
      },
      {
        name: 'basic styling',
        completed: false
      }
    ]
  },
  {
    subject: 'DOM Manipulation',
    courses: [
      {
        name: 'What is the DOM?',
        completed: false
      },
      {
        name: 'Why do we need the DOM?',
        completed: false
      },
      {
        name: 'Inspecting the DOM with JavaScript',
        completed: false
      },
      {
        name: 'Manipulating the DOM with JavaScript',
        completed: false
      }
    ]
  },
  {
    subject: 'Intro to Ember',
    courses: [
      {
        name: 'What is Ember?',
        completed: false
      },
      {
        name: 'Why do we need it?',
        completed: false
      },
      {
        name: 'How it works',
        completed: false
      },
      {
        name: 'Handlebars 1: Basics',
        completed: false
      },
      {
        name: 'Handlebars 2: Understanding bindings',
        completed: false
      },
      {
        name: 'Routes & controllers (depreciates in Ember 2.0 but still need to know)',
        completed: false
      },
      {
        name: 'Working with objects in Ember',
        completed: false
      },
      {
        name: 'Components',
        completed: false
      },
      {
        name: 'Handlebars 3: Logic',
        completed: false
      },
      {
        name: 'Handlebars 4: Attribute Bindings',
        completed: false
      },
      {
        name: 'Handlebars 5: Helpers',
        completed: false
      },
      {
        name: 'Computed properties',
        completed: false
      },
      {
        name: 'Observers',
        completed: false
      },
      {
        name: 'Hooks (init, destroy)',
        completed: false
      },
      {
        name: 'Feeding data to the route',
        completed: false
      },
      {
        name: 'Models',
        completed: false
      },
      {
        name: 'Using the Store',
        completed: false
      },
      {
        name: 'Adapters',
        completed: false
      },
      {
        name: 'Serializers',
        completed: false
      },
      {
        name: 'Nested & Advanced Routing',
        completed: false
      },
      {
        name: 'Testing',
        completed: false
      },
    ]
  },
  {
    subject: 'Ember CLI',
    courses: [
      {
        name: 'Basics',
        completed: false
      },
      {
        name: 'Generating',
        completed: false
      },
      {
        name: 'Blueprints',
        completed: false
      },
      {
        name: 'Testing',
        completed: false
      }
    ]
  },
  {
    subject: 'Intro to Node',
    courses: [
      {
        name: 'What is Node and why do we need it?',
        completed: false
      },
      {
        name: 'Understanding modules',
        completed: false
      },
      {
        name: 'Understanding "require"',
        completed: false
      },
      {
        name: 'Using "require"',
        completed: false
      },
      {
        name: 'What is Express/KOA and why do we need it?',
        completed: false
      },
      {
        name: 'What is routing?',
        completed: false
      },
      {
        name: 'What is middleware?',
        completed: false
      },
      {
        name: 'Testing',
        completed: false
      }
    ]
  },
  {
    subject: 'Utilities',
    courses: [
      {
        name: 'becoming a chrome developer tools expert',
        completed: false
      },
      {
        name: 'ember-cli',
        completed: false
      },
      {
        name: 'npm',
        completed: false
      },
      {
        name: 'bower',
        completed: false
      }
    ]
  }
]);

export default classes;
