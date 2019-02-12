# ominii web
Web frontend Tweet clone app. This project was developed during the OmniStack Week by RocketSeat. 

**What this web app does** - Provides an user friendly UI to list all posts published, add new posts and like posts. to do it so, it must consumes [this API](https://github.com/grglucastr/ominii-api).

This web app was developed in React with the help of ``` create-react-app ``` which you can see more details [here](https://github.com/facebook/create-react-app)

## Contents
*  [Requirements](#requirements)
*  [Installing and Runing](#install-run)
*  [Components over view](#components-over-view)
*  [Contribution](#contribution)

## <a name="requirements"></a>Requirements

This is just a frontend app, you need to run its server first. So please, check it out the [ominii API](https://github.com/grglucastr/ominii-api) download it and run it. Otherwise you won't be able to use the application as whole.

Believe me, this is temporary. We are working hard to get this done in a single Docker Image. 

## <a name="install-run"></a>Installing and Runing

1.  **Install via npm:**

Download and install all dependencies
```bash
npm install
```

2.  **Run the API:**
```bash
npm start
```

Access from yout browser the [localhost:3001](http://localhost:3001)

## <a name="components-over-view"></a>Components over view

The app itself is very simple. It contains only 4 custom containers and its hierachy is organized as described in tree below.

```
ominii-web
└─┬ App/App
  ├── pages/Login/Login
  ├─┬ pages/Timeline/Timeline
  │ └── components/Tweet/Tweet
  ├── react-router-dom/Route
  ├── react-router-dom/Router
  └── react-router-dom/Switch
```