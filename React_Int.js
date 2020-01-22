
Q14: What are the different phases of ReactJS component lifecycle?

There are four different phases of React component’s lifecycle:

Initialization: In this phase react component prepares setting up the initial state and default props.

Mounting: The react component is ready to mount in the browser DOM. This phase covers componentWillMount and componentDidMount lifecycle methods.

Updating: In this phase, the component get updated in two ways, sending the new props and updating the state. This phase covers shouldComponentUpdate, componentWillUpdate and componentDidUpdate lifecycle methods.

Unmounting: In this last phase, the component is not needed and get unmounted from the browser DOM. This phase include componentWillUnmount lifecycle method.
-----------------------------------------------------------------------------------

Q15: What are the lifecycle methods of ReactJS?

componentWillMount: Executed before rendering and is used for App level configuration in your root component.
componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur.
componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.
shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.
componentWillUpdate: Executed before re-rendering the component when there are pros & state changes confirmed by shouldComponentUpdate which returns true.
componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.
componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.


---------------------------------------------

Q18: What are React Hooks?
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.


-----------------------------
Q17: What are advantages of using React Hooks?

Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.

Hooks don’t work inside classes (because they let you use React without classes). By using them, we can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, we will use built-in hooks like useEffect .


-------------------

Q19: What is useState() in React?
useState is one of build-in react hooks. useState(0) returns a tuple where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state.

We can use the setCounter method to update the state of count anywhere - In this case we are using it inside of the setCount function where we can do more things; the idea with hooks is that we are able to keep our code more functional and avoid class based components if not desired/needed.

---------------------

Q20: What is StrictMode in React?

React's StrictMode is sort of a helper component that will help you write better react components, you can wrap a set of components with <StrictMode /> and it'll basically:

Verify that the components inside are following some of the recommended practices and warn you if not in the console.
Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
Help you prevent some side effects by identifying potential risks.

------------------------------------

Q22: What is prop drilling and how can you avoid it?
When building a React application, there is often the need for a deeply nested component to use data provided by another component that is much higher in the hierarchy. The simplest approach is to simply pass a prop from each component to the next in the hierarchy from the source component to the deeply nested component. This is called prop drilling.

The primary disadvantage of prop drilling is that components that should not otherwise be aware of the data become unnecessarily complicated and are harder to maintain.

To avoid prop drilling, a common approach is to use React context. This allows a Provider component that supplies data to be defined, and allows nested components to consume context data via either a Consumer component or a useContext hook.


-------------------------------------------------------------------------

Q.1) Name Life Cycle Method  and their purpose
A.)  

Render Phase
---------------------------------------------------------

1) constructor :  this run only once in the during the inital phase. the job of constructor is to set intial state and this is only place where 
				  you can do that this is only place where you can say "this.state = {} " after this you have to use this "this.setState = {}" if you want 
				  change the state so constructor is pretty simple 					

2) static getDerivedStateFromProps  :  "No access to 'this' "
	
									  This is actully a replacement of an old method called "componentWillReceivedProps" which is going to depreciated soon compared
									  to that method this method is actully static it run right after the constructor it has role in initial render and also read render face
									  the job of this method as it name suggests, job of this method it's tries to get the derive state from the change in props so the props changes
									  you need to set the state accordingly now it is static method why is a static method that is also a question interviwer would asked why would you have
									  something static it is beacause you don't want user to access "this" keyword directly inside the method because static method are actully class method
									  not instace methods which means you know i do you cannot do like this dot "this." some method name and so you cannot execute that so you cannot directly
									  "setState" using "this.setState()" so its protects you from doing all kind of mistakes so how does it actully change a state well you would return the new state
									  and it does it if you returned all which means there is no change in the state and this method is rarely used.

3) render   : "Don't used setState here"
			
			  Next Life cycles method after you get your state from props is "render" there everybody return their JSX. this is only method which mandatory to have what you cannot 
			  do in this method is you cannot "setState" here otherwise you go in an infinite loop.		



4) componentDidMount : This method run when components actully mounted and use of this method is something using let say some "Third-Party-Library" and such so basically you can notify that okay
					   "Dom is Ready" now you can make changes accordingly	



Re-Render Phase
--------------------------------------------------------

1) static getDerivedStateFromProps
2) shouldComponentsUpdate
3) getSnapshotBeforeRender : "Pre Commit Phase"
							 getSnapshotBeforeRender hook is get snapshot before update we can call it free commit phase render doesn't mean it has rendered mount really happend
							 after this method so just before its get rendered you need to if you need to do something then you can do it here. this actully replacing another method
							 that was previously their componet "componentWillUpdate" and reason for this particular method is react recently introduced lazy loading or async rendering
							 you call it so sometimes there is delay between if you render a component and in its next face so let's say if user does something in between like "scoll" or change
							 size of the "Window" then you need to remember where the scroll was before so you can do something after the render so you can remember the scroll position, text position
							 etc.
4) ComponentDidUpdate



Un-Mounting Phase
--------------------------------------------------------
ComponentWillUnMount : 


2) Why do we used Arrow function in React
Ans:In React you can have onclick handled which is not actully a class method it's actually a class property so you have to differentiate between what is method and what is property
Click handled looks like methods which they are not so now you can answer is correctly. arrow function don't have its own this so it would take this from its lexical scope.


//It is Class property
loginhandle = () => {
	
}

//It is Class Method
render() {
	return(
	)
}


3). How to prevent Components from re-rendering ?

1) shouldComponetUpdate()
2) PureComponent : it's only work on class components
3) React.memo :  It's only work for function components, this work on newer version of react and uses a techniques called memoization if you rendering the same things if your inputs are the same the output would be the same so in that case what should you do


-----------------------------------------------------------------------

Qa. Why can't you update state directly without setState()?

"setState" always trigger re-rendering of the components beacause you do want to re-render when they come when state has changed so that your view is updated that is also one of the
reason why when you actully use a set state inside you create a copy of the state first then modify that and then pass it to the set state and directly setting this state that wont't really
do that and that is why you're not allowed to actully update the state directly.. 

-----------------------------------------------------------------------

Qa. How many ways you can conditionally render in react ?

=> you can use If Statement

if(isLiar) {
	retrun <PantsOnFire />
}
return <YouAreNice />

=> second way condtional operator his liar is true then it would render PantsofFir

{
	isLiar ? (
	<PantsOnFire />
	) : (
	<YouAreNice />
	)
}

-----------------------------------------------------------------------

What is fragment ? why we used in react ?

=> A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

=> whenever you render a components you are only render single child you can have a tree so you can have a child with that within a child but you cannot do this at the moment
   direclty inside react where you are acutlly returning multiple child children

    <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>

      or 

       <>
        <td>Hello</td>
        <td>World</td>
      </>


-----------------------------------------------------------------------

Qa. How to do code-spliting in react ?

when the react code can pass to the bundler basically create a single bundle which is usually very large it bundle your entire application into one single file and that can be problematic
if you have a huge project so your intial load when you only load the application of the first time that could be very huge and there are cases where users may only visit few pages do you need
all the pages to be loaded if they're gonna only visit few pages so react introduced a way to split the code into multple bundles and so react introduce dynamic import and also call lazy loading
and this is how it is works so you can use react lazy to import a particular components which means this will be seprate bundle your main app is loaded now this is actully loading
asynchronsly so while is loading you need to have provide some sort of fallback component which will render a loader or something so that your code doesn't break

<Suspense fallback={<div>Loading...</div>}>
	<LazyComp />
</Suspense>

suspense is another thing that react introduce along with lazy.

-----------------------------------------------------------------------

Qa. what is redux middleware ?

Ans: the concept of middleware is you add another layer in the middle of your middle layer right so that that it does something in the middle before going to third step so let's
look at the redux 

UI => ----- Post ---------- => Server => DB

UI => ---- action -------  => reducer => store


you have UI Which dispatches some action let's say if you want to save some data to this to the server that case you would make a post request and it save some data
to the server at the same time your Redux would have an action that reaches a reducer that updates your local state and this both needs to be in sync your local state and server side rendering now
there are some cases where the update to the server might fail in that case what really happens your store already update with new state but you're now DB is behind beacause post really failed
and that would be a problem beacuse as soon as it dispatch an action it goes directly to the store while a post is an asynchornus so solution is "Middleware", as concept first sends the post
request that goes to the server and when there is a response coming back a postive response say hey now i finished updated the DB and update the local store so that your database and local store is always in sync. 

-----------------------------------------------------------------------


Difference between redux-saga and redux-thunk?

they both are middle layer both redux middleware, they both do same thing but little differently.

Both Redux Thunk and Redux Saga take care of dealing with side effects. In very simple terms, applied to the most common scenario (async functions, specifically AJAX calls) Thunk allows Promises" to deal with them, Saga uses Generators. Thunk is simple to use and Promises are familiar to many developers, Saga/Generators are more powerful but you will need to learn them. When Promises are just good enough, so is Thunk, when you deal with more complex cases on a regular basis, Saga gives you better tools.

In Sage you can actully cancel action so I want to dispatch beacuase you're catching it you can actully cancel it

Specifically, while dealing with the simple and effective Redux philosophy (actions (literal objects) fed into reducers (pure functions)), you can deal with side effects with Thunk that is more limited but easy to grasp (Promise.then().error()), or with Saga that requires you to face the (powerful) notion that you can do more complex things with those actions.

-----------------------------------------------------------------------

Qa. How to Optimize a React app?

Ask Question
- Describe the application or how big is application. or what does it do and whcih verion of react we are using..
- what kind of performance issues, it slow or it is crashing

if they say let assume any kind of react application so then answer:-


first you need to profiler to app and then run the app to see which area of app behaving badly make sure you disable other plugins. beacuse it can interfare in the perfomance
, one of the biggest problem with the speed could be you might be rendering components that are not suppose to be re-rendering for exemple
if you are not chaining a state but you're still setting the same state over and over that would update the virtual dom but you don't need to do that so as we looked at in the previous
videos you can stop re-rendering of certain componets by using should componets update lifecycle methods or if you have newer version you can used react memo or react pure components

if you packet size is huge and it's taking too long to load then you can used lazy loading,  you can lazay.laod certain routes that user may be using later on may not be even using it
you may find out the apis are slow so there may be some improvement needed on the server side

 or may teams are inexperience using wrong method to update state of some of them may be updating state directly instead of creating a copy of it, it is also possible that all you assest
 are loading slowely a lot of time if you have videos and images in your application and they may be loading slowly beacuse of the location where this assets are stored and you can easily find out
 in a profiler.  may be using present for the presnetational components like button and things like that you may be using classes. if you make them funtion that may improve your application.

-----------------------------------------------------------------------

Default Prop: 
You can define default values for your props by assigning to the special defaultProps property:
The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component. The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.


-----------------------------------------------------------------------
Dynamic imports :
the dynamic import() syntax allows us to load modules on demand by using promises or the async/await syntax, an example/implementation for this would be:
import('./Module').then(Module => Module.method());


