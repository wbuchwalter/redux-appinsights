[Redux](https://github.com/reactjs/redux) middleware for Application Insights on Azure

### Installation
**Prerequisite:** You need to have Application Insights correctly configured in your application.

`npm i redux-appinsights`

Then simply apply the middleware to your store:

``` JavaScript
import { insightsMonitor } from 'redux-appinsights' 

const store = createStore(rootReducer,  applyMiddleware(
  insightsMonitor() //or insightsMonitor(params), see Configuration
));
```


### Usage

You need to opt-in the actions you want to log. To do so, simply append your action like so:

``` JavaScript
{
  type: 'ADD_TODO',
  payload: 'Hello World!',
  meta: {
    appInsights: { trackPayload: true}
  }
}
```

If you only want to track an action, but don't need it's payload, set `trackPayload: false`.
If you omit to set `trackPayload` it will be set to `true` by default.

Your actions will now show up in Application Insights:  
  
![Application Insights](https://raw.githubusercontent.com/wbuchwalter/redux-appinsights/master/insights.png)

### Configuration
You can pass a configuration object to the middleware:

``` JavaScript
const params = {
  globals: {
    env: 'dev'
  },
  exclude: ['meta']
};

const store = createStore(rootReducer,  applyMiddleware(
  insightsMonitor(params)
));

```

#### Globals  

These are properties that you want to be added on every action that you track, for example, the environment on which the action occured.

#### Exclude

Your actions might contains things that you don't want to track, such as `meta`. Simply add them to the `exclude` array in the configuration object (this only applies to top-level member of your actions).


