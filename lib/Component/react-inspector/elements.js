'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Constructor = exports.HTML = exports.Table = exports.Root = void 0
var theme_1 = __importDefault(require('../theme'))
/**
 * Object root
 */
exports.Root = (0, theme_1['default'])('div')({
  display: 'inline-block',
  wordBreak: 'break-all',
  '&::after': {
    content: "' '",
    display: 'inline-block',
  },
  '& > li, & > ol, & > details': {
    backgroundColor: 'transparent !important',
    display: 'inline-block',
  },
  '& ol:empty': {
    paddingLeft: '0 !important',
  },
})
/**
 * Table
 */
exports.Table = (0, theme_1['default'])('span')({
  '& > li': {
    display: 'inline-block',
    marginTop: 5,
  },
})
/**
 * HTML
 */
exports.HTML = (0, theme_1['default'])('span')({
  display: 'inline-block',
  '& div:hover': {
    backgroundColor: 'rgba(255, 220, 158, .05) !important',
    borderRadius: '2px',
  },
})
/**
 * Object constructor
 */
exports.Constructor = (0, theme_1['default'])('span')({
  '& > span > span:nth-child(1)': {
    opacity: 0.6,
  },
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9lbGVtZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBQTZCO0FBRTdCOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsSUFBQSxrQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFDRCw2QkFBNkIsRUFBRTtRQUM3QixlQUFlLEVBQUUsd0JBQXdCO1FBQ3pDLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLGNBQWM7S0FDNUI7Q0FDRixDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsS0FBSyxHQUFHLElBQUEsa0JBQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixTQUFTLEVBQUUsQ0FBQztLQUNiO0NBQ0YsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLElBQUksR0FBRyxJQUFBLGtCQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsT0FBTyxFQUFFLGNBQWM7SUFDdkIsYUFBYSxFQUFFO1FBQ2IsZUFBZSxFQUFFLHFDQUFxQztRQUN0RCxZQUFZLEVBQUUsS0FBSztLQUNwQjtDQUNGLENBQUMsQ0FBQTtBQUVGOztHQUVHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsSUFBQSxrQkFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLDhCQUE4QixFQUFFO1FBQzlCLE9BQU8sRUFBRSxHQUFHO0tBQ2I7Q0FDRixDQUFDLENBQUEifQ==
