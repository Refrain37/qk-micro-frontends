export enum microStateAcionTypes {
  GET = 'get',
  SET = 'set',
}

export interface IMicroStateAction {
  type: microStateAcionTypes
  payload?: any
}

export function setMicroState(payload: any): IMicroStateAction {
  return {
    type: microStateAcionTypes.SET,
    payload,
  }
}

export function getMicroState() {
  return {
    type: microStateAcionTypes.GET,
  }
}
