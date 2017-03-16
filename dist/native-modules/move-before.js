export function moveBefore(array, itemMatcherFn, siblingMatcherFn) {
  var removedItem = remove(array, itemMatcherFn);
  var nextIndex = array.findIndex(siblingMatcherFn);
  array.splice(nextIndex >= 0 ? nextIndex : array.length, 0, removedItem);
}

function remove(array, matcherFn) {
  var index = array.findIndex(matcherFn);
  if (index >= 0) {
    return array.splice(index, 1)[0];
  }
}