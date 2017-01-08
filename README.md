# About

This is repo with example of simple react application. This app fetches data
from fake service and displays in in form of mobile application.
If you want to create app by yourself, follow guide, if not - see App.ready.js to
see how it is implemented.

Enjoy!

# Guide

0. Run:
```
npm install
npm start
```
1. Create simple `App()` function with `h1` element.
2. See changes!
3. Grab template for main container and crate `Widget` function to render it.
4. Render `Widget` inside `App` - nothing special yet. 
5. Add `props.children` rendering inside `Widget`.
6. Add `h1` inside `App()` as widgets children, see changes.
7. Create `Title` component, add `title` props to it. Use template.
8. Render `Title` inside `Widget` in `App()`. Pass `title` prop.
9. Create `Today` component, use template and props: `dayName`, `date`, `temp`.
10. Render `Today` inside `Widget` below `Title`, pass props.
11. Create `NextDays` component, use template and render `props.children`
inside it.
12. Add `NextDays` below `Today`.
13. Transform `App()` into `class`, add `renderNextDay` method and return
correct template from it.
14. Call `this.renderNextDay()` inside `NextDays` in `App` component.
15. Delete all mock data, create state with weather `array`.
16. Prepare `renderNextDay` method to accept `day` object with `name`, `date`
and `temp` properties. Pass empty object for now.
17. Create method to extract today weather (it is stored in first item from weather
array). Use it in render function. *Correct error* by returning empty object
if no item exist in `this.state.weather`.
18. Create `renderNextDays()`, iterate through `this.state.weather` (from
first item to the end of the table, use `.slice(1)`) and call 
`renderNextDay` for each element.
19. Use `renderNextDays()` inside `NextDays` component in `App`.
20. Add `componentDidMount` and call `api`, update `state` after response.
21. Add `key` to items in list.
22. Add loading info if you wish.

# Notes

* Styles downloaded from: http://codepen.io/jlalovi/pen/bIyAr .
* Application based on `create-react-app`.
