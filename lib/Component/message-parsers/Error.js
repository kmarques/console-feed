'use strict'
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
var react_1 = __importDefault(require('linkifyjs/react'))
function splitMessage(message) {
  var breakIndex = message.indexOf('\n')
  // consider that there can be line without a break
  if (breakIndex === -1) {
    return message
  }
  return message.substr(0, breakIndex)
}
function ErrorPanel(_a) {
  var error = _a.error
  /* This checks for error logTypes and shortens the message in the console by wrapping
    it a <details /> tag and putting the first line in a <summary /> tag and the other lines
    follow after that. This creates a nice collapsible error message */
  var otherErrorLines
  var firstLine = splitMessage(error)
  var msgArray = error.split('\n')
  if (msgArray.length > 1) {
    otherErrorLines = msgArray.slice(1)
  }
  if (!otherErrorLines) {
    return React.createElement(react_1['default'], null, error)
  }
  return React.createElement(
    'details',
    null,
    React.createElement(
      'summary',
      { style: { outline: 'none', cursor: 'pointer' } },
      firstLine
    ),
    React.createElement(react_1['default'], null, otherErrorLines.join('\n\r'))
  )
}
exports['default'] = ErrorPanel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L21lc3NhZ2UtcGFyc2Vycy9FcnJvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE4QjtBQUM5QiwwREFBcUM7QUFFckMsU0FBUyxZQUFZLENBQUMsT0FBZTtJQUNuQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLGtEQUFrRDtJQUNsRCxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNyQixPQUFPLE9BQU8sQ0FBQTtLQUNmO0lBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsRUFBNEI7UUFBMUIsS0FBSyxXQUFBO0lBQ3pCOzt1RUFFbUU7SUFDbkUsSUFBSSxlQUFlLENBQUE7SUFDbkIsSUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2QixlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNwQztJQUVELElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDcEIsT0FBTyxvQkFBQyxrQkFBTyxRQUFFLEtBQUssQ0FBVyxDQUFBO0tBQ2xDO0lBRUQsT0FBTyxDQUNMO1FBQ0UsaUNBQVMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQ25ELFNBQVMsQ0FDRjtRQUNWLG9CQUFDLGtCQUFPLFFBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBVyxDQUN6QyxDQUNYLENBQUE7QUFDSCxDQUFDO0FBRUQscUJBQWUsVUFBVSxDQUFBIn0=
