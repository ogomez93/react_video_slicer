This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

See [demo](http://ogomez93.github.io/react_video_slicer)

## This project was developed using

- Windows 10 Home
- Git >= v2.17.1.windows.2
- Yarn >= v1.12.3
- Node.JS >= v8.11.3

## To set up locally

- Pull branch `master`
- Run `yarn`
- Run `yarn start` to launch the app
- Run `yarn test` to test the app

## Notes

#### The app was originally conceived to handle multiple videos. That's why the videos state is an array and not just an object.

#### AutoPlay updates store, but functionality is not developed yet

#### These components need to be tested:
- ClipForm
- ClipItem
- ClipList
  - FullVideo
  - ClipList
  - index
- EditItemDialog
- Main
- SearchBar
- VideoControls
- VideoPlayer 
