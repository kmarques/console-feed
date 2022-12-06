'use strict'
exports.__esModule = true
/**
 * Serialize a function into JSON
 */
exports['default'] = {
  type: 'Function',
  lookup: Function,
  shouldTransform: function (type, obj) {
    return typeof obj === 'function'
  },
  toSerializable: function (func) {
    var body = ''
    try {
      body = func
        .toString()
        .substring(body.indexOf('{') + 1, body.lastIndexOf('}'))
    } catch (e) {}
    return {
      name: func.name,
      body: body,
      proto: Object.getPrototypeOf(func).constructor.name,
    }
  },
  fromSerializable: function (data) {
    try {
      var tempFunc = function () {}
      if (typeof data.name === 'string') {
        Object.defineProperty(tempFunc, 'name', {
          value: data.name,
          writable: false,
        })
      }
      if (typeof data.body === 'string') {
        Object.defineProperty(tempFunc, 'body', {
          value: data.body,
          writable: false,
        })
      }
      if (typeof data.proto === 'string') {
        // @ts-ignore
        tempFunc.constructor = {
          name: data.proto,
        }
      }
      return tempFunc
    } catch (e) {
      return data
    }
  },
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL0Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUE7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGVBQWUsWUFBQyxJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsY0FBYyxZQUFDLElBQWM7UUFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2IsSUFBSTtZQUNGLElBQUksR0FBRyxJQUFJO2lCQUNSLFFBQVEsRUFBRTtpQkFDVixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQzNEO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUVkLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLE1BQUE7WUFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTtTQUNwRCxDQUFBO0lBQ0gsQ0FBQztJQUNELGdCQUFnQixZQUFDLElBQWE7UUFDNUIsSUFBSTtZQUNGLElBQU0sUUFBUSxHQUFHLGNBQWEsQ0FBQyxDQUFBO1lBRS9CLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7YUFDSDtZQUVELElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7YUFDSDtZQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsYUFBYTtnQkFDYixRQUFRLENBQUMsV0FBVyxHQUFHO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2pCLENBQUE7YUFDRjtZQUVELE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGLENBQUEifQ==
