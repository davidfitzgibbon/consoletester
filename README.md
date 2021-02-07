# consoletester
The tiniest test framework, just for the console

## Why?
Every week in the [rendezvous with cassidoo](https://cassidoo.co/newsletter/) newsletter there is a coding challenge. It's nice to have tiny tester ready to see if you can meet the challenge!

## Useage
You pass two arguements, one, your expected result, and the second your current test. `consoletester` will then return both variables in the console (handy to compare) and a stringified comparison of equality.

``` javascript
  const expected = true;
  const attempt = true;
  
  consoletester(expected, attempt)
  // {expected:...}, {result:...}
  // success
  
  
  const expected = true;
  const attempt = false;
  
  consoletester(expected, attempt)
  // {expected:...}, {result:...}
  // fail
```
You can even pass in arrays or objects

``` javascript
  const expected = { name: "Testy McTesterson"};
  const attempt = { name: "Testy McTesterson"};
  
  consoletester(expected, attempt)
  // {expected:...}, {result:...}
  // success
```

``` javascript
  const expected = { name: "Testy McTesterson"};
  const attempt = { name: "Wrongy McFalserson"};
  
  consoletester(expected, attempt)
  // {expected:...}, {result:...}
  // fail
```

## CodePen template
Wanna just get coding? There is [a CodePen tempalte ready to start working on the lastest challenge](
https://codepen.io/pen/?template=caf33254915b99e6031c7f92ac174771
)!
