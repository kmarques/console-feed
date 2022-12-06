'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
exports.__esModule = true
/**
 * Serialize a Map into JSON
 */
exports['default'] = {
  type: 'Map',
  lookup: Map,
  shouldTransform: function (type, obj) {
    return obj && obj.constructor && obj.constructor.name === 'Map'
  },
  toSerializable: function (map) {
    var body = {}
    map.forEach(function (value, key) {
      var k = typeof key == 'object' ? JSON.stringify(key) : key
      body[k] = value
    })
    return {
      name: 'Map',
      body: body,
      proto: Object.getPrototypeOf(map).constructor.name,
    }
  },
  fromSerializable: function (data) {
    var body = data.body
    var obj = __assign({}, body)
    if (typeof data.proto === 'string') {
      // @ts-ignore
      obj.constructor = {
        name: data.proto,
      }
    }
    return obj
  },
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RyYW5zZm9ybS9NYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU1BOztHQUVHO0FBQ0gscUJBQWU7SUFDYixJQUFJLEVBQUUsS0FBSztJQUNYLE1BQU0sRUFBRSxHQUFHO0lBQ1gsZUFBZSxZQUFDLElBQVMsRUFBRSxHQUFRO1FBQ2pDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFBO0lBQ2pFLENBQUM7SUFDRCxjQUFjLFlBQUMsR0FBUTtRQUNyQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFFYixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxFQUFFLEdBQUc7WUFDOUIsSUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7WUFDNUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ25ELENBQUE7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLFlBQUMsSUFBYTtRQUNwQixJQUFBLElBQUksR0FBSyxJQUFJLEtBQVQsQ0FBUztRQUNyQixJQUFJLEdBQUcsZ0JBQVEsSUFBSSxDQUFFLENBQUE7UUFFckIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2xDLGFBQWE7WUFDYixHQUFHLENBQUMsV0FBVyxHQUFHO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDakIsQ0FBQTtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0NBQ0YsQ0FBQSJ9
