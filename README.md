# Follow this guide to create fully functional demo:

0. Run npm start.
1. Create simple App function with hello world h1.
2. See changes!
3. Grab template for main container and crate Widget function to render it.
4. Render Widget inside App - nothing special yet. 
5. Add props.children rendering inside Widget.
6. Add h1 inside as widgets children, see changes.
7. Create Title component, add title props to it. Use template.
8. Render Title inside widget. Pass "title" prop.
9. Create Today component, use template and props: dayName, date, temp.
10. Render Today inside Widget below Title, pass props.
11. Create NextDays component, use template and render props.children
inside it.
12. Add NextDays below Today.
13. Transform App into class, add renderNextDay method and return
correct template from it.
14. Call renderNextDay inside NextDays component.

15. Delete all mock data, create state with weather array.
16. Prepare renderNextDay method to accept day object with name, date
and temp properties. Pass empty object for now.
17. Create method to extract today weather (first item from weather
array). Use it in render function. Correct error by returning empty object
if no item exist in state.weather.
18. Create renderNextDays(), iterate through state.weather (from
first item to the end of the table, use .slice()) and call 
renderNextDay for each element.
19. Use renderNextDays() inside NextDays component.
20. Add componentDidMount and call api, update state after response.
21. Add key to items in list.
22. Add loading info if you wish.

Styles downloaded from: http://codepen.io/jlalovi/pen/bIyAr .
