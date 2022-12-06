'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Content =
  exports.Timestamp =
  exports.AmountIcon =
  exports.Icon =
  exports.Message =
  exports.Root =
    void 0
var theme_1 = __importDefault(require('./theme'))
/**
 * Return themed log-method style
 * @param style The style
 * @param type The method
 */
var Themed = function (style, method, styles) {
  return (
    styles[
      'LOG_'.concat(method.toUpperCase(), '_').concat(style.toUpperCase())
    ] || styles['LOG_'.concat(style.toUpperCase())]
  )
}
/**
 * console-feed
 */
exports.Root = (0, theme_1['default'])('div')({
  wordBreak: 'break-word',
  width: '100%',
})
/**
 * console-message
 */
exports.Message = (0, theme_1['default'])('div')(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method
  return {
    position: 'relative',
    display: 'flex',
    color: Themed('color', method, styles),
    backgroundColor: Themed('background', method, styles),
    borderTop: '1px solid '.concat(Themed('border', method, styles)),
    borderBottom: '1px solid '.concat(Themed('border', method, styles)),
    marginTop: -1,
    marginBottom: +/^warn|error$/.test(method),
    paddingLeft: 10,
    boxSizing: 'border-box',
    '& *': {
      verticalAlign: 'top',
      boxSizing: 'border-box',
      fontFamily: styles.BASE_FONT_FAMILY,
      whiteSpace: 'pre-wrap',
      fontSize: styles.BASE_FONT_SIZE,
    },
    '& a': {
      color: styles.LOG_LINK_COLOR,
    },
  }
})
/**
 * message-icon
 */
exports.Icon = (0, theme_1['default'])('div')(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method
  return {
    width: styles.LOG_ICON_WIDTH,
    height: styles.LOG_ICON_HEIGHT,
    backgroundImage: Themed('icon', method, styles),
    backgroundRepeat: 'no-repeat',
    backgroundSize: styles.LOG_ICON_BACKGROUND_SIZE,
    backgroundPosition: '50% 50%',
  }
})
/**
 * message-amount
 */
exports.AmountIcon = (0, theme_1['default'])('div')(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method
  return {
    height: '16px',
    margin: '1px 0',
    whiteSpace: 'nowrap',
    fontSize: '10px',
    lineHeight: '17px',
    padding: '0px 3px',
    background: Themed('amount_background', method, styles),
    color: Themed('amount_color', method, styles),
    borderRadius: '8px',
    minWidth: '18px',
    textAlign: 'center',
  }
})
/**
 * timestamp
 */
exports.Timestamp = (0, theme_1['default'])('div')(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method
  return {
    padding: '3px 0px 0px 5px',
    width: '110px',
    height: styles.LOG_ICON_HEIGHT,
    color: 'dimgray',
  }
})
/**
 * console-content
 */
exports.Content = (0, theme_1['default'])('div')(function (_a) {
  var styles = _a.theme.styles
  return {
    clear: 'right',
    position: 'relative',
    padding: styles.PADDING,
    marginLeft: 15,
    minHeight: 18,
    flex: 'auto',
    width: 'calc(100% - 15px)',
  }
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2VsZW1lbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBNEI7QUFFNUI7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQ2IsS0FBYSxFQUNiLE1BQWMsRUFDZCxNQUFrQztJQUVsQyxPQUFBLE1BQU0sQ0FBQyxjQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztRQUM1RCxNQUFNLENBQUMsY0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztBQURwQyxDQUNvQyxDQUFBO0FBRXRDOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsSUFBQSxrQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxJQUFBLGtCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUE2QjtRQUEzQixhQUF5QixFQUFoQixNQUFNLFlBQUEsRUFBRSxNQUFNLFlBQUE7SUFBUyxPQUFBLENBQUM7UUFDdkUsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3RDLGVBQWUsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDckQsU0FBUyxFQUFFLG9CQUFhLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFFO1FBQzFELFlBQVksRUFBRSxvQkFBYSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBRTtRQUM3RCxTQUFT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
