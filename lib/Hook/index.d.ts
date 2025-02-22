import { HookedConsole, Callback } from '../definitions/Console'
export interface HookOptions {
  encode?: boolean
  async?: boolean
  limit?: number
}
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */
export default function Hook(
  console: Console,
  callback: Callback,
  optionsIn?: boolean | HookOptions,
  limit?: number
): HookedConsole
