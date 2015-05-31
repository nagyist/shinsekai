import angular from 'angular';

class Path {
  constructor(x, y) {
    this.d = `M${x},${y}`;
  }

  lineTo(x, y) {
    this.d += `L${x},${y}`;
    return this;
  }

  close() {
    this.d += 'Z';
    return this;
  }

  toString() {
    return this.d;
  }
}

angular.module('shinsekai.path', []).factory('Path', () => {
  return Path;
});

export default 'shinsekai.path';
