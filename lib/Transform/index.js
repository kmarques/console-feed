'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Decode = exports.Encode = void 0
var arithmetic_1 = __importDefault(require('./arithmetic'))
var Function_1 = __importDefault(require('./Function'))
var HTML_1 = __importDefault(require('./HTML'))
var Map_1 = __importDefault(require('./Map'))
var replicator_1 = __importDefault(require('./replicator'))
var transforms = [
  HTML_1['default'],
  Function_1['default'],
  arithmetic_1['default'],
  Map_1['default'],
]
var replicator = new replicator_1['default']()
replicator.addTransforms(transforms)
function Encode(data, limit) {
  return JSON.parse(replicator.encode(data, limit))
}
exports.Encode = Encode
function Decode(data) {
  var decoded = replicator.decode(JSON.stringify(data))
  // remove __console_feed_remaining__
  decoded.data.pop()
  return decoded
}
exports.Decode = Decode
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDREQUFxQztBQUNyQyx3REFBaUM7QUFDakMsZ0RBQXlCO0FBQ3pCLDhDQUF1QjtBQUV2Qiw0REFBcUM7QUFFckMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBSSxFQUFFLHFCQUFRLEVBQUUsdUJBQVUsRUFBRSxnQkFBRyxDQUFDLENBQUE7QUFFcEQsSUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7QUFDbkMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUVwQyxTQUFnQixNQUFNLENBQUksSUFBUyxFQUFFLEtBQWM7SUFDakQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDbkQsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLElBQVM7SUFDOUIsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDdkQsb0NBQW9DO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbEIsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQztBQUxELHdCQUtDIn0=
