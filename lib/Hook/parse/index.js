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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            },
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var GUID_1 = __importDefault(require('./GUID'))
var Timing = __importStar(require('./methods/timing'))
var Count = __importStar(require('./methods/count'))
var Assert = __importStar(require('./methods/assert'))
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
  // Create an ID
  var id = staticID || (0, GUID_1['default'])()
  // Parse the methods
  switch (method) {
    case 'clear': {
      return {
        method: method,
        id: id,
      }
    }
    case 'count': {
      var label = typeof data[0] === 'string' ? data[0] : 'default'
      if (!label) return false
      return __assign(__assign({}, Count.increment(label)), { id: id })
    }
    case 'time':
    case 'timeEnd': {
      var label = typeof data[0] === 'string' ? data[0] : 'default'
      if (!label) return false
      if (method === 'time') {
        Timing.start(label)
        return false
      }
      return __assign(__assign({}, Timing.stop(label)), { id: id })
    }
    case 'assert': {
      var valid = data.length !== 0
      if (valid) {
        var assertion = Assert.test.apply(
          Assert,
          __spreadArray([data[0]], data.slice(1), false)
        )
        if (assertion) {
          return __assign(__assign({}, assertion), { id: id })
        }
      }
      return false
    }
    case 'error': {
      var errors = data.map(function (error) {
        try {
          return error.stack || error
        } catch (e) {
          return error
        }
      })
      return {
        method: method,
        id: id,
        data: errors,
      }
    }
    default: {
      return {
        method: method,
        id: id,
        data: data,
      }
    }
  }
}
exports['default'] = Parse
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnREFBeUI7QUFFekIsdURBQTBDO0FBQzFDLHFEQUF3QztBQUN4Qyx1REFBMEM7QUFFMUM7Ozs7R0FJRztBQUNILFNBQVMsS0FBSyxDQUNaLE1BQWUsRUFDZixJQUFXLEVBQ1gsUUFBaUI7SUFFakIsZUFBZTtJQUNmLElBQU0sRUFBRSxHQUFHLFFBQVEsSUFBSSxJQUFBLGlCQUFJLEdBQUUsQ0FBQTtJQUU3QixvQkFBb0I7SUFDcEIsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2FBQ0gsQ0FBQTtTQUNGO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsNkJBQ0ssS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FDekIsRUFBRSxJQUFBLElBQ0g7U0FDRjtRQUVELEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxTQUFTLENBQUMsQ0FBQztZQUNkLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQixPQUFPLEtBQUssQ0FBQTthQUNiO1lBRUQsNkJBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FDckIsRUFBRSxJQUFBLElBQ0g7U0FDRjtRQUVELEtBQUssUUFBUSxDQUFDLENBQUM7WUFDYixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQTtZQUUvQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0saUJBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQUMsQ0FBQTtnQkFDeEQsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsNkJBQ0ssU0FBUyxLQUNaLEVBQUUsSUFBQSxJQUNIO2lCQUNGO2FBQ0Y7WUFFRCxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUMzQixJQUFJO29CQUNGLE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUE7aUJBQzVCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sS0FBSyxDQUFBO2lCQUNiO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFBO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTtnQkFDRixJQUFJLE1BQUE7YUFDTCxDQUFBO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFFRCxxQkFBZSxLQUFLLENBQUEifQ==
