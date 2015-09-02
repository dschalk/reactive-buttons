The included index.html file is ready to go. Just load it into a browser as a file or with a web server.
If you modify the code, you will need to run the following code from your terminal:

```javascript
npm install
webpack
```
"npm install" installs a "node_modules" directory. After that, all you need to run is "webpack". Webpack loads everything you need into a file named "bundle.js" which is installed in "index.html". After that, you are good to go.

If you move "index.html" to a new location, be sure to take the script file "bundle.js" with it.

A development server is included in this repository, so you can view the buttons on port 8080 by entering:

```javascript
webpack-dev-server
```
Commentary is included with the running app. You can see the buttons at [http://schalk.ninja](http://schalk.ninja) or see them in action in a larger site at [Game of Score](http://machinegun.ninja).

   Here is the commentary out of context:

   If we created a form with select buttons, we would still need an additional hack to remove highlighting from all buttons when a user entered a group name not included in the buttons. And then we would have to do something to make buttons light up when a user entered a name that is included, such as 'GroupA' or 'solo'. Michel Weststrate's mobservable project does many things. Here it provides the means to easily create rollover buttons with ordinary rollover effects along with more sophisticated functionality.

   The movement from MVC frameworks to Facebook's React to Mr. Weststrate's mobservable-React hybrid seems to portend a progression into a future hybrid not only free from Flux and its progeny, but possibly free even from React's 'state' object, which at first appears to be essential. Now it could be that Facebook's website needs Flux, and would flounder if it were to substitute mobservable for its dispatchers,stores, state object, and Flux. I base my opinions mainly on my own experiences.

   My websockets-react project isn't handling much traffic, but it is fairly complex. The more I convert over to mobservable, the easier it gets to follow code logic and hence the easier it is to add and modify features. I haven't noticed an deterioration in performance, and I suspect that my [Game of Score](http://machinegun.ninja) site could handle heavier loads than the earlier version which held more tightly to Facebook's patterns.  As I move things out of the 'state' object and into mobservable objects, I remove the associated 'setState' code, along with the getter code, and install methods in mobservable-encapsulated objects that cause the application to take care of itself automatically. That is what I did with these buttons.

   I was able to perform 10,000,000 computations in less than 250 milliseconds in browsers running in a run-of-the-mill desktop computer. Each computation added a number to the Fibonacci sequence until a little past fib(1475) when the series becomes Infinity, Infinity, ...  Here is the method which produces the sequence:
   ```javascript
   data.fib = (x) => {
     let n = 1*x;
     switch (n) {
       case 1:
         return 0;
       case 2:
         return 1;
       case 3:
         return 1;
     }
     if ( n > 3) {
         let ar = [2,1];
         let rf = mobservable.makeReactive(1);
         rf.observe(function(a,b) {
           ar = [a+b,a];
         });
         let a = Date.now();
         for (let k=4; k<n; k+=1) {
           rf(ar[0]);
         }
         let b = Date.now();
         data.t = b - a;
         return ar[0]; }
         else return "Enter an integer greater than 0";
   };
 ```
  When a reactive entity is updated, its previous value is still available. When the new value in 'ar' is 'a+b', I still have access to 'a', so rf(a+b) updates 'ar' to [a+b+a, a+b]. 'a+b+c' is the argument for the next computation, which is written:
  ```javascript
  rf(ar[0]) = [a+b+a+a+b, a+b+a]
  ```
  This is reminiscent of Haskell's state monad, which carries the current state along with the most recent state in an (a,a2) tupple. The similarity grows stronger if mobservable functions and methods are kept pure except when wrapped in the sideEffect(function) function. That would be analogous to Haskell developers confining all side effects to the IO Monad in main. Haskell doesn't require this, but the GHC compiler isn't as understanding as V8; there's no room for surprises.

  With mobservable, there is no need to explicitly designate observers, as there would be with RxJS and Bacon. I used RxJS for a while in my Game of Score project, and it required quite a bit of code.

  The buttons shown here work fine with React's state and props objects left empty. You might wonder why I use React at all. Mobservable doesn't rely on React. Well, this code is a snippet from my websockets-react project. The complete code is available at [https://github.com/dschalk/websockets-react](https://github.com/dschalk/websockets-react) An explanation of the project is at [Game of Score Tutorial](https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score). My server is a modified Haskell Wai-Websockets server. Like mobservable, it accomplishes much in a very simple and elegant manner.

  I use 'react_mixin' in this demonstration, but it isn't necessary. I used it to grab a React mixin out of 'node_modules' to conveniently support autoFocus ('autofocus' in regular HTML). Otherwise, I think I would have to use a React 'ref' to find the 'select' dom node. After the page loads, you can just start entering a number. Then press <ENTER> and the corresponding Fibonacci number appears.

##Reactive Methods

  Every time React renders the B2 component, reactive functions merely mentioned in the render function are executed. The variable 'data.x' is not involved in the method 'g', which computes sequential Fibinacci numbers, yet incrementing x causes the next fibinacci number to be displayed. In fact, just moving the mouse pointer in or out of the 'Value of data.x" button causes the sequence to increment. You dont's have to click the button.

  Rolling over any rollover button or entering text causes the sequence to progress, unless the rollover or text entry doesn't change anything. It is reassuring to see that if a rollover button is already selected, rolling over it or clicking it to select an already-selected group does not increase the Fibinacci number. That means there is no unnecessary rendering so we don't need the PureRenderMixin. With mobservable, state might render unnecessarily, but as I incorporate mobservable in the Game of Score app, the state object keeps shrinking. I don't think I will have anything left in 'state' when I am done. My buttons used to be part of the React state object. You can see here how nicely they function outside of the React 'state' object.

  The line 'let g = this.data.g' in 'render' is all it takes to invoke the automatic incrementing of the Fibonacci series. Note that 'g' is not called and its argument is not modified (that is, not until g modifies it). Being aware of this behavior facilitates writing concise code and helps to avoid magical bugs.  

  The line 'let increaseX = this.data.increaseX' is also present in 'render()', but rendering does not trigger its execution. The relevant difference between 'increaseX' and 'g' from a practical perspective is that 'g' is defined inside of the data object but 'increaseX' is incorporated into 'data' externally with with the code: 'data.increaseX = ...'. Another way of looking at this is to see that 'g' was inside of 'data' when it was encapsulated, but 'increaseX' was tacked on after encapsulation. The precise explanation for this behavior can be found in the details of the code.
