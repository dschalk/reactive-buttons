The included index.html file is ready to go. Just load it into a browser as a file or with a web server.
If you modify the code, you will need to run the following code from your terminal:

ISSUE: No longer works:
```javascript
npm install
webpack
```
ISSUE: Backwards compatibility problem.

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

##Fibonacci Numbers

The 1477th number in the Fibonacci sequence is the biggest number browsers can display.

fib(1477) =  1.3069892237633987e+308 <br />
fib(1478) = Infinity<br />

To get a feel for how much overhead is entailed in working inside a number created by:
```javascript
let rf = mobservable.makeReactive(1)
```
I compared an algorithm using raw numbers to an algorithm using a mobservable reactive number created by rf = "mobservable.makeReactive(1)". A variable "xx" is updated by "rf.observe(function(a,b) {xx = a + b})". "xx" gets automatically updated each time a for loop runs rf(xx) so, for example, if the loop cycles 9 times, a() is the 9th number in the Fibonacci series.    

```javascript
mobservable fib(100000000) elapsed time 2019 milliseconds
```
 and
 ```javascript
 ordinary fib(100000000) elapsed time 815 milliseconds.
 ```
 In Firefox, I got 1452 and 380 milliseconds and on Opera, 1816 and 815 milliseconds. Repeated computations after the first two or three did not differ significantly from one another. There seemed to be some caching taking place, although on Chrome and Opera, the first ordinary computation was much faster than the subsequent ordinary computations. The data was gathered on a run-of-the-mill Ubuntu 14.04 desktop box.
 All of this was done mainly for amusement, but it did provide some reassurance that using mobservabale to access current and most recent state will not entail a performance hit. A user requesting fib(1477) won't notice the extra 2 or 3 microseconds involved in getting it through a sequence of mobservable reactive numbers.

   I was able to perform 10,000,000 computations in less than 250 milliseconds in browsers running in a run-of-the-mill desktop computer. Each computation added a number to the Fibonacci sequence until fib(1478) when the series becomes Infinity, Infinity, ...  Here is the method which produces the sequence:
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
         let xx = 2;
         let k = 0;
         let rf = mobservable.makeReactive(1);
         rf.observe(function(a,b) {
           xx = a+b;
         });
         let a = Date.now();
         for (k=4; k<n; k+=1) {
           rf(xx);
         }
         let b = Date.now();
         data.t = b - a;
         return xx; }
         else return "Enter an integer greater than 0";
   };
 ```
  When a reactive entity is updated, its previous value is still available. When the new value in 'ar' is 'a+b', I still have access to 'a', so rf(a+b) updates 'ar' to [a+b+a, a+b]. 'a+b+c' is the argument for the next computation, which is written:
  ```javascript
  rf(ar[0]) = [a+b+a+a+b, a+b+a]
  ```
  This is reminiscent of Haskell's state monad, which carries the current state along with the most recent state in an (a,a2) tupple. The similarity grows stronger if mobservable functions and methods are kept pure except when wrapped in the mobservable sideEffect(function) function. That would be analogous to Haskell developers confining all side effects to the IO Monad in main. Haskell doesn't require this, but the GHC compiler isn't as understanding as V8. GHC has no room for surprises. I wonder if there would be any practical use for mobservable monads.

  I compared the version using mobservable reactive fibonacci numbers to one using raw javascript. Raw javascript ripped through the sequence three or four times faster than the mobservabale version, but with fast computations like these, there is no performance hit involved in using mobservable reactive numbers.  A user requesting fib(1477) won't notice the extra 2 or 3 microseconds involved in getting it through a sequence of mobservable reactive numbers. Here is the code for the plain Javascript version:

  ```javascript
  data.fib2 = (x) => {
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
        let k = 0;
        let temp;
        let a;
        let b;
        let rf = function() {
          temp = a;
          a = a + b;
          b = temp;
        }
        let a = Date.now();
        for (k=4; k<n; k+=1) {
          rf();
        }
        let b = Date.now();
        data.t2 = b - a;
        return ar[0]; }
        else return "Enter an integer greater than 0";
  };
  ```
##Reactive Methods

When React renders the the main component (B2), reactive functions merely mentioned in the render function are executed. The variable 'data.x' is not involved in the method 'g', which computes sequential Fibonacci numbers, yet incrementing x causes the next fibonacci number to be displayed. In fact, Rolling over any rollover button, clicking any button, or entering text causes the sequence to progress, unless the rollover, click, or text entry doesn't change anything. This is reassuring evidence that no unnecessary rendering is taking place.


The line 'let g = this.data.g' in 'render' is all it takes to invoke this ultra-sensitive behavior. Note that 'g' is not called and its argument is not modified (that is, not until g modifies it). Being aware of this automatic behavior facilitates writing concise code (it doesn't get more concise than not having to write anything), and avoiding magical bugs (things seeming to happen spontaneously).

  The line 'let increaseX = this.data.increaseX' is also present in 'render()', but rendering does not trigger its execution. The relevant difference between 'increaseX' and 'g' from a practical perspective is that 'g' is defined inside of the data object but 'increaseX' is incorporated into 'data' externally with with the code: 'data.increaseX = ...'. Another way of looking at this is to see that 'g' was inside of 'data' when it was encapsulated, but 'increaseX' was tacked on after encapsulation. The precise explanation for this behavior can be found in the details of the code.

  The buttons shown here work fine with React's state and props objects left empty. You might wonder why I use React at all. Mobservable doesn't rely on React. Well, this code is a snippet from my websockets-react project. The complete code is available at [https://github.com/dschalk/websockets-react](https://github.com/dschalk/websockets-react) An explanation of the project is at [Game of Score Tutorial](https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score). My server is a modified Haskell Wai-Websockets server. Like mobservable, it accomplishes much in a very simple and elegant manner.

  I use 'react_mixin' in this demonstration, but it isn't necessary. I used it to grab a React mixin out of 'node_modules' to conveniently support autoFocus ('autofocus' in regular HTML). Otherwise, I think I would have to use a React 'ref' to find the 'select' dom node. After the page loads, you can just start entering a number. Then press <ENTER> and the corresponding Fibonacci number appears.
