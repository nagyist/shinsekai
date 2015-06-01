import angular from 'angular';
import shinsekai from '../../src';

const moduleName = 'shinsekai-example.random';

angular.module(moduleName, [shinsekai]);

angular.module(moduleName).constant('size', 100);
angular.module(moduleName).constant('width', 800);
angular.module(moduleName).constant('height', 800);
angular.module(moduleName).constant('delay', 2000);
angular.module(moduleName).constant('count', Infinity);

angular.module(moduleName).factory('circles', ($interval, size, delay, count) => {
  const n = 10,
        circles = [];
  $interval(() => {
    if (circles.length < n) {
      circles.push({});
    }
    for (const circle of circles) {
      circle.x = Math.random() * size;
      circle.y = Math.random() * size;
      circle.r = Math.random() * 9 + 1;
      circle.color = `hsl(${Math.random() * 360},100%,50%)`;
      circle.strokeColor = `hsl(${Math.random() * 360},100%,50%)`;
      circle.opacity = Math.random();
      circle.duration = Math.random() + 0.5;
      circle.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return circles;
});

angular.module(moduleName).factory('ellipses', ($interval, size, delay, count) => {
  const n = 10,
        ellipses = [];
  $interval(() => {
    if (ellipses.length < n) {
      ellipses.push({});
    }
    for (const ellipse of ellipses) {
      ellipse.x = Math.random() * size;
      ellipse.y = Math.random() * size;
      ellipse.rx = Math.random() * 9 + 1;
      ellipse.ry = Math.random() * 9 + 1;
      ellipse.color = `hsl(${Math.random() * 360},100%,50%)`;
      ellipse.strokeColor = `hsl(${Math.random() * 360},100%,50%)`;
      ellipse.opacity = Math.random();
      ellipse.duration = Math.random() + 0.5;
      ellipse.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return ellipses;
});

angular.module(moduleName).factory('rects', ($interval, size, delay, count) => {
  const n = 10,
        rects = [];
  $interval(() => {
    if (rects.length < n) {
      rects.push({});
    }
    for (const rect of rects) {
      rect.x = Math.random() * size;
      rect.y = Math.random() * size;
      rect.width = Math.random() * 15 + 5;
      rect.height = Math.random() * 15 + 5;
      rect.color = `hsl(${Math.random() * 360},100%,50%)`;
      rect.strokeColor = `hsl(${Math.random() * 360},100%,50%)`;
      rect.opacity = Math.random();
      rect.duration = Math.random() + 0.5;
      rect.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return rects;
});

angular.module(moduleName).factory('texts', ($interval, size, delay, count) => {
  const n = 10,
        texts = [];
  $interval(() => {
    if (texts.length < n) {
      texts.push({
        text: 'imai'
      });
    }
    for (const text of texts) {
      text.x = Math.random() * size;
      text.y = Math.random() * size;
      text.color = `hsl(${Math.random() * 360},100%,50%)`;
      text.opacity = Math.random();
      text.duration = Math.random() + 0.5;
      text.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return texts;
});

angular.module(moduleName).factory('lines', ($interval, size, delay, count) => {
  const n = 10,
        lines = [];
  $interval(() => {
    if (lines.length < n) {
      lines.push({});
    }
    for (const line of lines) {
      line.x1 = Math.random() * size;
      line.y1 = Math.random() * size;
      line.x2 = Math.random() * size;
      line.y2 = Math.random() * size;
      line.color = `hsl(${Math.random() * 360},100%,50%)`;
      line.opacity = Math.random();
      line.duration = Math.random() + 0.5;
      line.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return lines;
});

angular.module(moduleName).factory('paths', ($interval, size, delay, count) => {
  const n = 5,
        paths = [];
  $interval(() => {
    if (paths.length < n) {
      const points = [];
      for (let j = 0; j < 3; ++j) {
        points.push([size / 2, size / 2]);
      }
      paths.push({
        points: points
      });
    }
    for (const path of paths) {
      for (const point of path.points) {
        point[0] = Math.random() * size;
        point[1] = Math.random() * size;
      }
      path.color = `hsl(${Math.random() * 360},100%,50%)`;
      path.opacity = Math.random();
      path.duration = Math.random() + 0.5;
      path.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return paths;
});

angular.module(moduleName).factory('polygons', ($interval, size, delay, count) => {
  const n = 5,
        polygons = [];
  $interval(() => {
    if (polygons.length < n) {
      const points = [];
      for (let j = 0; j < polygons.length + 3; ++j) {
        points.push([size / 2, size / 2]);
      }
      polygons.push({
        points: points
      });
    }
    for (const polygon of polygons) {
      for (const point of polygon.points) {
        point[0] = Math.random() * size;
        point[1] = Math.random() * size;
      }
      polygon.color = `hsl(${Math.random() * 360},100%,50%)`;
      polygon.opacity = Math.random();
      polygon.duration = Math.random() + 0.5;
      polygon.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return polygons;
});

angular.module(moduleName).factory('polylines', ($interval, size, delay, count) => {
  const n = 5,
        polylines = [];
  $interval(() => {
    if (polylines.length < n) {
      const points = [];
      for (let j = 0; j < polylines.length + 3; ++j) {
        points.push([size / 2, size / 2]);
      }
      polylines.push({
        points: points
      });
    }
    for (const polyline of polylines) {
      for (const point of polyline.points) {
        point[0] = Math.random() * size;
        point[1] = Math.random() * size;
      }
      polyline.color = `hsl(${Math.random() * 360},100%,50%)`;
      polyline.opacity = Math.random();
      polyline.duration = Math.random() + 0.5;
      polyline.delay = Math.random() * 0.5;
    }
  }, delay, count);
  return polylines;
});

angular.module(moduleName).directive('random', (Path, Scale) => {
  return {
    restrict: 'E',
    templateUrl: 'random.html',
    scope: {
    },
    controllerAs: 'random',
    controller: class {
      constructor(size, width, height, circles, ellipses, rects, lines, texts, paths, polygons, polylines) {
        this.size = size;
        this.width = width;
        this.height = height;
        this.circles = circles;
        this.ellipses = ellipses;
        this.rects = rects;
        this.lines = lines;
        this.texts = texts;
        this.paths = paths;
        this.polygons = polygons;
        this.polylines = polylines;
        this.xScale = new Scale()
          .domain(0, size)
          .range(0, width);
        this.yScale = new Scale()
          .domain(0, size)
          .range(height, 0);
      }

      path(points) {
        const path = new Path(this.xScale.scale(points[0][0]), this.yScale.scale(points[0][1]));
        for (let i = 1; i < points.length; ++i) {
          path.lineTo(this.xScale.scale(points[i][0]), this.yScale.scale(points[i][1]));
        }
        return path.close().toString();
      }

      points(points) {
        return points.map(p => `${this.xScale.scale(p[0])},${this.yScale.scale(p[1])}`).join(' ');
      }

      initialPath(points) {
        return this.path(points.map(() => [0, 0]));
      }

      initialPoints(points) {
        return this.points(points.map(() => [0, 0]));
      }
    }
  };
});

export default moduleName;