The included index.html file is ready to go. Just load it into a browser as a file or with a web server.
If you modify the code, you will need to run the following code from your terminal:

```javascript
npm install
webpack
```
"npm install" installs a "node_modules" directory. After that, all you need to run is "webpack". Webpack loads everything you need into a file named "bundle.js" which is installed in "index.html". After that, you are good to go. 

A development server is included in this repository, so you can view the buttons on port 8080 by entering:

```javascript
webpack-dev-server
```
Commentary is included with the running app. You can see the buttons in action in a larger site at [Gane if Score](http://machinegun.ninja).

   Here is the commentary out of context:
   
   If we created a form with select buttons, we would still need an additional hack to remove highlighting from all buttons when a user entered a group name not included in the buttons. And then we would have to do something to make buttons light up when a user entered a name that is included, such as 'GroupA' or 'solo'. Michel Weststrate's mobservable project showcases a major advancement in front-end website development. 
   
   The movement from MVC frameworks to Facebook's React to Mr. Weststrate's mobservable-React hybrid seems to portend a progression into a future hybrid not only free from Flux and its progeny, but possibly free even from React's 'state' object, which at first appears to be essential. Now it could be that Facebook's website needs Flux, and would flounder if it were to substitue mobservable for its dispatchers, stores, state object , and Flux. My websockets-react project isn't handling much traffic, but it is fairly complex. The more I convert over to  mobservable, the more smoothly it seems to run. As I move things out of the 'state' object and into mobservable objects, I remove the associated 'setState' code, along with the getter code, and install a function that causes the application to take care of itself. That is what I did with these buttons. 
  
  With mobservable, there is no need to designate listeners, as there would be with RxJS and Bacon. The buttons shown here work fine with React's state and props objects left empty. You might wonder why I use React at all. Mobservable doesn't rely on React. Well, this code is a snippet from my websockets-react project. The complete code is available at <a style={{color: 'red'}} href="https://github.com/dschalk/websockets-react">https://github.com/dschalk/websockets-react</a>. An explanation of the project is at <a style={{color: 'red'}} href="https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score">https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score</a>. My server is a modified Haskell Wai-Websockets server. Like mobservable, it does much in a very simple and elegant manner. 

  'react_mixin' is not necessary for the buttons. I used it to grab a React mixin out of 'node_modules' to support autoFocus ('autofocus' in regular HTML).

  It appears that every time React renders the B2 component, reactive functions merely mentioned in the render function are executed. The variable 'data.x' is not involved in the method 'g', which computes sequential Fibinacci numbers, yet incrementing x causes the next fibinacci number to be displayed. In fact, just moving the mouse pointer in or out of the 'Value of data.x" button causes the sequence to increment. You dont's have to click the button.
  
  Rolling over any roll-over button or entering text causes the sequence to progress, unless the roll-over or text entry doesn't change anything. It is reassuring to see that if a roll-over button is already selected, rolling over it or clicking it to select an already-selected group does not increase the Fibinacci number. That means there is no unnecessary rendering.

  The line 'let g = this.data.g' in 'render' is all it takes to invoke this behavior. Note that 'g' is not called and its argument is not modified (that is, not until g modifies it). Being aware of this behavior facilitates writing concise code and avoiding magical bugs.  
                                                   
  The line 'let increaseX = this.data.increaseX' is also present in 'render()', but rendering does not trigger its execution. The relevant difference between 'increaseX' and 'g' from a practical perspective is that 'g' is defined inside of the data object but 'increaseX' is incorporated into 'data' externally with with the code: 'data.increaseX = ...'. Another way of looking at this is to see that 'g' was inside of 'data' when it was encapsulated, but 'increaseX' was tacked on after encapsulation. The precise explanation for this behavior can be found in the details of the code.
