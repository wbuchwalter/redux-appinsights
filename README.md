[Redux](https://github.com/reactjs/redux) middleware for Application Insights on Azure

### Installation
**Prerequisite:** You need to have Application Insights correctly configured in your application.

`npm i redux-appinsights`

Then simply apply the middleware to your store:

``` JavaScript
import { insightsMonitor } from 'redux-appinsights' 

const store = createStore(rootReducer,  applyMiddleware(
  insightsMonitor
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

If you only want to track an action, but don't need it's payload, set `trackPayload` to `false`.

Your actions will now show up in Application Insights:  
  
![Application Insights](https://raw.githubusercontent.com/wbuchwalter/redux-appinsights/master/insights.png)
