# [ng-progress](https://github.com/sessionbird/ng-progress)

Simple CSS progress bars. See demo.

## Usage

### Regular CSS

The projects contains build css files. Those are generated from SASS. Integrate the files with

```html
<link rel="stylesheet" href="ng-progress/css/barber-shop.css">
```

### SCSS

If you're using SCSS in your project then you can include just the styles for the spinners that you want by adding the following to your main file:

```scss
@import '../bower_components/ng-progress/scss/progress/barber-shop',
        '../bower_components/ng-progress/scss/progress/loading-bar';
```

## Themes

The css themes are based on [PACE](https://github.com/HubSpot/pace). All themes are build with standard SCSS. The following themes are available:

 - Barber Shop
 - Big Counter
 - Bounce
 - Center-Atom
 - Center-Circle
 - Center-Simple
 - Corner-Indicator
 - Fill-Left
 - Flash
 - Flat-Top
 - Loading Bar
 - MacOSX
 - Minimal

## Example

```html
<div class="barber-shop fullscreen pace pace-active">
  <div class="pace-progress" data-progress="50" data-progress-text="50%" style="-webkit-transform: translate3d(50%, 0px, 0px); -ms-transform: translate3d(50%, 0px, 0px); transform: translate3d(50%, 0px, 0px);">
      <div class="pace-progress-inner"></div>
  </div>
  <div class="pace-activity"></div>
</div>

<link rel="stylesheet" href="../dist/css/barber-shop.css">
```

To combine it with your Javascript code, switch the `50` with your variable. An binding for [Angular JS](https://angularjs.org/) is shipped with this project. You could integrate a progress bar as follows:

```html
  <input ng-model="progress" type="text" />

  <div ng-progress theme="loading-bar" ng-model="progress" style="width: 800px; height: 80px; position: relative;"></div>
  <link rel="stylesheet" href="../dist/css/progress.css">

  <style type="text/css"></style>
  <script src="../lib/ng-progress.js"></script>
  <script type="text/javascript">
  angular.module("progress-app", ["angular-progress"])
    .controller("ctrl", function($scope) {
      $scope.progress = 50;
    });
  </script>
```

No fancy progress detection takes place. Just bind it to an integer variable and you are done.

## Credits

The css is based on [PACE](https://github.com/HubSpot/pace)

## Contributing

See [CONTRIBUTING.md](https://github.com/sessionbird/ng-progress/blob/master/CONTRIBUTING.md) for details.


