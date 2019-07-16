## App Setup
Step1: ng new [AppName] --style=scss --routing --prefix myprefix

## Install Bootstrap
Step3: npm install bootstrap --save
Step4: Open angular.json
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],  ----- [or] -------

There are many ways to do that. The simpest method is by using the [src/styles.css]file and adding the following code:
URL: https://www.techiediaries.com/angular-bootstrap-ui/
@import "~bootstrap/dist/css/bootstrap.css";

## Icon & Jquery CDN Link
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body>
	<app-root></app-root>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

## Run-Test
cmd: ng test
## Clean Coding Practices 
![Clean Coding Practices](https://user-images.githubusercontent.com/30646609/61302428-61c24280-a803-11e9-90f9-1c8509404ab5.JPG)

## Testing Definition
What is automated testing?
Practice of writing code test our code. and run those code in automated

## Type OF Test?
![Test-Types](https://user-images.githubusercontent.com/30646609/61301897-7ce08280-a802-11e9-8575-68909af4a94f.JPG)

## Test Example Code
![Testing-Example](https://user-images.githubusercontent.com/30646609/61301883-78b46500-a802-11e9-9871-7f192524cb49.JPG)

## Unit Test:
   Test a Component in isolation, without external resources (e.g file system, database, API endpoints)
   Unit tests: component
   Easiest to write
   SuperFast
   Don't give us much confidence
   
 ## Unit Test Code Sample
   ![Images For Unit testing](https://user-images.githubusercontent.com/30646609/61302456-6c7cd780-a803-11e9-904e-14b881c1b49c.JPG)
 ## Unit Test Image 
   ![Images For Unit testing - Fake Service](https://user-images.githubusercontent.com/30646609/61302471-730b4f00-a803-11e9-9bfa-b56bb73bc0cd.JPG)

## Integration 
   Test a component with external resources (e.g file system, database, API endpoint)
   Integration tests: component + template
   
## Integration Test Code Sample
   ![Images For Integration testing](https://user-images.githubusercontent.com/30646609/61302362-46efce00-a803-11e9-8c57-48c74ee6dfe2.JPG)
   
## Integration Test Image 
   ![Images For Integration testing- Realservice](https://user-images.githubusercontent.com/30646609/61302394-5242f980-a803-11e9-8d56-f7d494273fbf.JPG)

## Ent-to-End
   Test the entire application as a whole.
   More  Confidence
   Very slow
   Very fragile


