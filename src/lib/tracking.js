import * as ab from './airbridge';

export const event = (params) => {
  ab.event(params.category, {action: params.action, label: params.label, value: params.value});
}