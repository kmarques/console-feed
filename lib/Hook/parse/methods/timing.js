'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.stop = exports.start = void 0
var state_1 = require('../../store/state')
var dispatch_1 = __importDefault(require('../../store/dispatch'))
var actions_1 = require('../../store/actions')
function start(label) {
  ;(0, dispatch_1['default'])((0, actions_1.timeStart)(label))
}
exports.start = start
function stop(label) {
  var timing =
    state_1.state === null || state_1.state === void 0
      ? void 0
      : state_1.state.timings[label]
  if (timing && !timing.end) {
    ;(0, dispatch_1['default'])((0, actions_1.timeEnd)(label))
    var time = state_1.state.timings[label].time
    return {
      method: 'log',
      data: [''.concat(label, ': ').concat(time, 'ms')],
    }
  }
  return {
    method: 'warn',
    data: ["Timer '".concat(label, "' does not exist")],
  }
}
exports.stop = stop
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLGtFQUEyQztBQUMzQywrQ0FBd0Q7QUFFeEQsU0FBZ0IsS0FBSyxDQUFDLEtBQWE7SUFDakMsSUFBQSxxQkFBUSxFQUFDLElBQUEsbUJBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFGRCxzQkFFQztBQUVELFNBQWdCLElBQUksQ0FBQyxLQUFhO0lBQ2hDLElBQU0sTUFBTSxHQUFHLGFBQUssYUFBTCxhQUFLLHVCQUFMLGFBQUssQ0FBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDcEMsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ3pCLElBQUEscUJBQVEsRUFBQyxJQUFBLGlCQUFPLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNoQixJQUFBLElBQUksR0FBSyxhQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUF6QixDQUF5QjtRQUVyQyxPQUFPO1lBQ0wsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsQ0FBQyxVQUFHLEtBQUssZUFBSyxJQUFJLE9BQUksQ0FBQztTQUM5QixDQUFBO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsQ0FBQyxpQkFBVSxLQUFLLHFCQUFrQixDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBZkQsb0JBZUMifQ==
