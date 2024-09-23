export interface ProtocolContext {
  domain: string
  
  location: {
    country: {
      name: string
      code: string
    }
    city: {
      name: string
      code: string
    }
  }
  // city: {}
  // name: string
  // code: string
  action: ProtocolContextAction
  version: string
  bap_id?: string
  bap_uri?: string
  bpp_id?: string
  bpp_uri?: string
  transaction_id: string
  message_id: string
  timestamp: string
}

export enum ProtocolContextAction {
  SEARCH = 'search',
  SELECT = 'select',
  INIT = 'init',
  CONFIRM = 'confirm',
  UPDATE = 'update',
  STATUS = 'status',
  TRACK = 'track',
  CANCEL = 'cancel',
  RATING = 'rating',
  SUPPORT = 'support'
}