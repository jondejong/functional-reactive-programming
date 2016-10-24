# Looping Example
## The Problem

Given an array of JSON such as:

```
[
    { 
      "city" : "AGAWAM", 
      "loc" : [ -72.622739, 42.070206 ], 
      "pop" : 15338, 
      "state" : "MA", 
      "_id" : "01001" 
    },
    ...
]
```

Return an array in which exists one entry per state. Each entry shall also contain the name of that state's most populous city and that city's population.

