const Rx = require('rxjs/Rx')
const Observable = Rx.Observable
const Subject = Rx.Subject

const promise = new Promise((resolve) => {
    setTimeout( () => {
        resolve(42)
    }, 1000)
})

promise.then( (value) => {
    console.log('Resolved to ' + value)
})


const observable = new Observable((observer) => {
    console.log('Getting to work')
    setTimeout(() => {
        observer.next(42)
    }, 1000)
    setTimeout(() => {
        observer.next(43)
    }, 2000)
    setTimeout(() => {
        observer.next(44)
    }, 3000)
    setTimeout(() => {
        observer.complete()
    }, 4000)
});

setTimeout(() => {
    observable.subscribe((val) => {
        console.log("We got a value: " + val)
    }),
        5000
})


let subject = new Subject();

setTimeout(() => {
    subject.next(42)
}, 2000)
setTimeout(() => {
    subject.next(43)
}, 3000)
setTimeout(() => {
    subject.next(44)
}, 4000)
setTimeout(() => {
    subject.complete()
}, 5000)

subject.subscribe((value) => {
    console.log('subject was updated to: ' + value)
})