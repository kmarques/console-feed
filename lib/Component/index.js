'use strict'
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var React = __importStar(require('react'))
var react_1 = require('@emotion/react')
var default_1 = __importDefault(require('./theme/default'))
var elements_1 = require('./elements')
var Message_1 = __importDefault(require('./Message'))
// https://stackoverflow.com/a/48254637/4089357
var customStringify = function (v) {
  var cache = new Set()
  return JSON.stringify(v, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // Circular reference found, discard key
        return
      }
      // Store value in our set
      cache.add(value)
    }
    return value
  })
}
var getTheme = function (props) {
  return {
    variant: props.variant || 'light',
    styles: __assign(
      __assign({}, (0, default_1['default'])(props)),
      props.styles
    ),
    method: null,
  }
}
var Console = /** @class */ (function (_super) {
  __extends(Console, _super)
  function Console() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      theme: getTheme(_this.props),
      prevStyles: _this.props.styles,
      prevVariant: _this.props.variant,
    }
    return _this
  }
  Console.getDerivedStateFromProps = function (props, state) {
    if (
      props.variant !== state.prevVariant ||
      JSON.stringify(props.styles) !== JSON.stringify(props.prevStyles)
    ) {
      return {
        theme: getTheme(props),
        prevStyles: props.styles,
        prevVariant: props.variant,
      }
    }
    return null
  }
  Console.prototype.render = function () {
    var _this = this
    var _a = this.props,
      _b = _a.filter,
      filter = _b === void 0 ? [] : _b,
      _c = _a.logs,
      logs = _c === void 0 ? [] : _c,
      searchKeywords = _a.searchKeywords,
      logFilter = _a.logFilter,
      _d = _a.logGrouping,
      logGrouping = _d === void 0 ? true : _d
    if (searchKeywords) {
      var regex_1 = new RegExp(searchKeywords)
      var filterFun = logFilter
        ? logFilter
        : function (log) {
            try {
              return regex_1.test(customStringify(log))
            } catch (e) {
              return true
            }
          }
      // @ts-ignore
      logs = logs.filter(filterFun)
    }
    if (logGrouping) {
      // @ts-ignore
      logs = logs.reduce(function (acc, log) {
        var prevLog = acc[acc.length - 1]
        if (
          prevLog &&
          prevLog.amount &&
          prevLog.method === log.method &&
          prevLog.data.length === log.data.length &&
          prevLog.data.every(function (value, i) {
            return log.data[i] === value
          })
        ) {
          prevLog.amount += 1
          return acc
        }
        acc.push(__assign(__assign({}, log), { amount: 1 }))
        return acc
      }, [])
    }
    return React.createElement(
      react_1.ThemeProvider,
      { theme: this.state.theme },
      React.createElement(
        elements_1.Root,
        null,
        logs.map(function (log, i) {
          // If the filter is defined and doesn't include the method
          var filtered =
            filter.length !== 0 &&
            log.method &&
            filter.indexOf(log.method) === -1
          return filtered
            ? null
            : React.createElement(Message_1['default'], {
                log: log,
                key: log.id || ''.concat(log.method, '-').concat(i),
                linkifyOptions: _this.props.linkifyOptions,
              })
        })
      )
    )
  }
  return Console
})(React.PureComponent)
exports['default'] = Console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEI7QUFDOUIsd0NBQThDO0FBRzlDLDREQUFvQztBQUVwQyx1Q0FBaUM7QUFDakMsc0RBQStCO0FBRS9CLCtDQUErQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUMvQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLHdDQUF3QztnQkFDeEMsT0FBTTthQUNQO1lBQ0QseUJBQXlCO1lBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDakI7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU87SUFDakMsTUFBTSx3QkFDRCxJQUFBLG9CQUFNLEVBQUMsS0FBSyxDQUFDLEdBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FDaEI7SUFDRCxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsRUFQaUMsQ0FPakMsQ0FBQTtBQUVGO0lBQXNCLDJCQUErQjtJQUFyRDtRQUFBLHFFQTRGQztRQTNGQyxXQUFLLEdBQUc7WUFDTixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0IsVUFBVSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM3QixXQUFXLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1NBQ2hDLENBQUE7O0lBdUZILENBQUM7SUFyRlEsZ0NBQXdCLEdBQS9CLFVBQWdDLEtBQUssRUFBRSxLQUFLO1FBQzFDLElBQ0UsS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsV0FBVztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDakU7WUFDQSxPQUFPO2dCQUNMLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTzthQUMzQixDQUFBO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQUEsaUJBc0VDO1FBckVLLElBQUEsS0FNQSxJQUFJLENBQUMsS0FBSyxFQUxaLGNBQVcsRUFBWCxNQUFNLG1CQUFHLEVBQUUsS0FBQSxFQUNYLFlBQVMsRUFBVCxJQUFJLG1CQUFHLEVBQUUsS0FBQSxFQUNULGNBQWMsb0JBQUEsRUFDZCxTQUFTLGVBQUEsRUFDVCxtQkFBa0IsRUFBbEIsV0FBVyxtQkFBRyxJQUFJLEtBQ04sQ0FBQTtRQUVkLElBQUksY0FBYyxFQUFFO1lBQ2xCLElBQU0sT0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBRXhDLElBQU0sU0FBUyxHQUFHLFNBQVM7Z0JBQ3pCLENBQUMsQ0FBQyxTQUFTO2dCQUNYLENBQUMsQ0FBQyxVQUFDLEdBQUc7b0JBQ0YsSUFBSTt3QkFDRixPQUFPLE9BQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7cUJBQ3hDO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNWLE9BQU8sSUFBSSxDQUFBO3FCQUNaO2dCQUNILENBQUMsQ0FBQTtZQUVMLGFBQWE7WUFDYixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUM5QjtRQUVELElBQUksV0FBVyxFQUFFO1lBQ2YsYUFBYTtZQUNiLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQzFCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUVuQyxJQUNFLE9BQU87b0JBQ1AsT0FBTyxDQUFDLE1BQU07b0JBQ2QsT0FBTyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTTtvQkFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUssRUFBRSxDQUFDLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBckIsQ0FBcUIsQ0FBQyxFQUN2RDtvQkFDQSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTtvQkFFbkIsT0FBTyxHQUFHLENBQUE7aUJBQ1g7Z0JBRUQsR0FBRyxDQUFDLElBQUksdUJBQU0sR0FBRyxLQUFFLE1BQU0sRUFBRSxDQUFDLElBQUcsQ0FBQTtnQkFFL0IsT0FBTyxHQUFHLENBQUE7WUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7U0FDUDtRQUVELE9BQU8sQ0FDTCxvQkFBQyxxQkFBYSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDcEMsb0JBQUMsZUFBSSxRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQztnQkFDZiwwREFBMEQ7Z0JBQzFELElBQU0sUUFBUSxHQUNaLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFDbkIsR0FBRyxDQUFDLE1BQU07b0JBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Z0JBRW5DLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ3ZCLG9CQUFDLG9CQUFPLElBQ04sR0FBRyxFQUFFLEdBQUcsRUFDUixHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxVQUFHLEdBQUcsQ0FBQyxNQUFNLGNBQUksQ0FBQyxDQUFFLEVBQ25DLGNBQWMsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FDekMsQ0FDSCxDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQ0csQ0FDTyxDQUNqQixDQUFBO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBNUZELENBQXNCLEtBQUssQ0FBQyxhQUFhLEdBNEZ4QztBQUVELHFCQUFlLE9BQU8sQ0FBQSJ9
