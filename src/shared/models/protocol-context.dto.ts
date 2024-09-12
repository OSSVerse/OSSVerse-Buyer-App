export interface ProtocolContext {
  domain: string
  country: string
  city: string
  action: ProtocolContextAction
  core_version: string
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