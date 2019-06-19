export enum SERVERITY {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}
export enum EVENT_TYPE {
  SECURITY = 'security',
  LOG = 'log'
}

export interface IEventTypes {
  type: EVENT_TYPE;
  severity: SERVERITY;
  description: string;
}
