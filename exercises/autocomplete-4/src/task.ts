import { isPromise, wait } from './utils/promise';

export interface CancellablePromise<T> extends PromiseLike<T> {
  cancelled?: boolean;
}
/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task<T>(genFn: () => IterableIterator<any>): CancellablePromise<T> {
  let p = new Promise<T>((resolve) => {
    let iterator = genFn(); // Get the iterator
    let value: any;
    // TODO: implement your solution here
    function nextStep(lastPromiseVal: any) {
      let itResult = iterator.next(lastPromiseVal);
      if (itResult.done && typeof itResult.value === 'undefined') {
        console.log('done');
        resolve(value as T)
        return
      } else {
        value = itResult.value;
        if (isPromise(value)) {
          // value is a Promise
          value.then((promiseResut: any) => {
            if (!p.cancelled)
              nextStep(promiseResut)
          })
        } else {
          // value is not a Promise
          nextStep(value)
          console.log('not a Promise')
        }
      }
    }
    nextStep(undefined)
  }) as CancellablePromise<T>;

  p.cancelled = false
  return p;
}

task(function*() {
  yield wait(600).then(() => {
    console.log('600 done');
  })
  yield wait(300).then(() => {
    console.log('300 done');
  })
})