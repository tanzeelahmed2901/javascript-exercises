# React Todo App

## Objectives

- Make use of `React.useState` to set and get state
- Learn how to map state to props
- Learn how to update state via functions passed as props
- Learn where to put state in our component tree
- Gain some experience writing JSX
- Write some stateful and stateless components to see the benefits / use-cases for each
- Compose atomic components together into more complex components
- See unidirectional data flow in action

## The Task

![todo app](../../img/todo.png)

Build a simple Todo App using CodePen

- Create a new codepen from this [template](https://codepen.io/jcwrightson/pen/YzNOeWg)
- Create a component to render a single todo
- Create a component to render all todos
- Create a component to manage `state`
- Create a function to toggle `todo.complete`
- Pass state and update functions as `props` to child components
- Create a component to add a single todo
- _Stretch_: Style with CSS
- _Bonus_: Add delete todo functionality
- _Bonus_: Add update todo functionality

### Recommended State Shape

```json
{
  "todos": [
    {
      "id": 1,
      "task": "Walk the Dog",
      "complete": false
    },
    {
      "id": 2,
      "task": "Feed the Cat",
      "complete": true
    }
  ]
}
```

## Running the solution (Instructor)

- Create a new codepen from this [template](https://codepen.io/jcwrightson/pen/YzNOeWg)
- Copy and paste the contents of `../solutions/react-1/solution.js` into the `js` box, and `../solutions/react-1/solution.css` into the `css` box
