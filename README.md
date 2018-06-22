

# Create a fancy burger menu using reactjs-popup

### Demo : https://codesandbox.io/s/k2x7l5jy27
### Complete Demo with react-router :  https://codesandbox.io/s/lpo41x20kq

> This article is a step by step tutorial to create a simple burger menu for your website by using reactjs-popup

![](https://cdn-images-1.medium.com/max/1600/1*ttcLA5BrtUAXSBo6YfoQoA.gif)


[Reactjs-popup](https://react-popup.netlify.com/)  is a new and simple react popup component built using react fragments which is one of the new features that comes with react 16. And it can handle multiple use cases.By using this tiny react popup component you can create a Tooltips, Modals and Menus.

By the end of this article you will be able to create your custom burger menu with reactjs-popup.

> Ready!! Let’s get started.

#### Step 1: Create the burger Icon component.

We will start by building a burger icon component,

As you see we pass the ‘open’ prop to the component so we can permute the icon class name as the preview example explains

Burger icon css

burger Icon state

You can find some good examples for burger icon with animation  [here](https://jonsuh.com/hamburgers/)

#### Step 2: Customize CSS Menu

Our menu will be a simple list, so let’s take the reactjs-popup home page menu and use it as an example.

As you see this menu is a simple ul element, nothing special.

#### Step 3:integrate all stuff with reactjs-popup

All we need to do in this part is to import the reactjs-popup component and set the burger menu as a trigger prop for the popup component and the menu as the popup children. simple, is it ? magic !!

Thanks to the ‘function as a children pattern’ the trigger can access to the popup state easily. we need also to pass props to the burger component like the following.

Adding some custom css and this is the final result.

final result

If you read this article from your smartphone , you can see the burger button to launch the menu in  [reactjs-popup home page.](https://react-popup.netlify.com/)

