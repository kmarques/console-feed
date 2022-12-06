'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var Methods_1 = __importDefault(require('../definitions/Methods'))
var parse_1 = __importDefault(require('./parse'))
var Transform_1 = require('../Transform')
var optionsDefault = { encode: true, async: true }
function runImmediately(f) {
  f()
}
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */
function Hook(console, callback, optionsIn, limit) {
  if (optionsIn === void 0) {
    optionsIn = true
  }
  var options = (function () {
    // Support old call style, where third argument is just `encode`
    if (typeof optionsIn === 'boolean') {
      optionsIn = { encode: optionsIn }
    }
    if (limit) {
      optionsIn.limit = limit
    }
    // Set defaults
    optionsIn = Object.assign({}, optionsDefault, optionsIn)
    return optionsIn
  })()
  var TargetConsole = console
  var Storage = {
    pointers: {},
    src: {
      npm: 'https://npmjs.com/package/console-feed',
      github: 'https://github.com/samdenty99/console-feed',
    },
  }
  var _loop_1 = function (method) {
    var NativeMethod = TargetConsole[method]
    // Override
    TargetConsole[method] = function () {
      // Pass back to native method
      NativeMethod.apply(this, arguments)
      // Parse arguments and send to transport
      var args = [].slice.call(arguments)
      // setTimeout to prevent lag, unless disabled
      var maybeSetTimeout = options.async ? setTimeout : runImmediately
      maybeSetTimeout(function () {
        var parsed = (0, parse_1['default'])(method, args)
        if (parsed) {
          var encoded = parsed
          if (options.encode) {
            encoded = (0, Transform_1.Encode)(parsed, options.limit)
          }
          callback(encoded, parsed)
        }
      })
    }
    // Store native methods
    Storage.pointers[method] = NativeMethod
  }
  // Override console methods
  for (
    var _i = 0, Methods_2 = Methods_1['default'];
    _i < Methods_2.length;
    _i++
  ) {
    var method = Methods_2[_i]
    _loop_1(method)
  }
  TargetConsole.feed = Storage
  return TargetConsole
}
exports['default'] = Hook
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvSG9vay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLG1FQUE0QztBQUU1QyxrREFBMkI7QUFFM0IsMENBQXFDO0FBU3JDLElBQU0sY0FBYyxHQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFBO0FBRWpFLFNBQVMsY0FBYyxDQUFDLENBQWE7SUFDbkMsQ0FBQyxFQUFFLENBQUE7QUFDTCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQXdCLElBQUksQ0FDMUIsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsU0FBdUMsRUFDdkMsS0FBYztJQURkLDBCQUFBLEVBQUEsZ0JBQXVDO0lBR3ZDLElBQU0sT0FBTyxHQUFnQixDQUFDO1FBQzVCLGdFQUFnRTtRQUNoRSxJQUFJLE9BQU8sU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxTQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUE7U0FDbEM7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNULFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1NBQ3hCO1FBQ0QsZUFBZTtRQUNmLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDeEQsT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUVKLElBQU0sYUFBYSxHQUFHLE9BQXdCLENBQUE7SUFDOUMsSUFBTSxPQUFPLEdBQVk7UUFDdkIsUUFBUSxFQUFFLEVBQUU7UUFDWixHQUFHLEVBQUU7WUFDSCxHQUFHLEVBQUUsd0NBQXdDO1lBQzdDLE1BQU0sRUFBRSw0Q0FBNEM7U0FDckQ7S0FDRixDQUFBOzRCQUdRLE1BQU07UUFDYixJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFMUMsV0FBVztRQUNYLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRztZQUN0Qiw2QkFBNkI7WUFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFFbkMsd0NBQXdDO1lBQ3hDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBRXJDLDZDQUE2QztZQUM3QyxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQTtZQUNuRSxlQUFlLENBQUM7Z0JBQ2QsSUFBTSxNQUFNLEdBQUcsSUFBQSxrQkFBSyxFQUFDLE1BQXdCLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3BELElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksT0FBTyxHQUFZLE1BQWlCLENBQUE7b0JBQ3hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsT0FBTyxHQUFHLElBQUEsa0JBQU0sRUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBWSxDQUFBO3FCQUNuRDtvQkFDRCxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBRUQsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFBOztJQTNCekMsMkJBQTJCO0lBQzNCLEtBQW1CLFVBQU8sRUFBUCxZQUFBLG9CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQXJCLElBQUksTUFBTSxnQkFBQTtnQkFBTixNQUFNO0tBMkJkO0lBRUQsYUFBYSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7SUFFNUIsT0FBTyxhQUFhLENBQUE7QUFDdEIsQ0FBQztBQTdERCwwQkE2REMifQ==
