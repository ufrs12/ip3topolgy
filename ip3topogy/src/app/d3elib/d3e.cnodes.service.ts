import { Injectable } from '@angular/core';
import { Cnode } from './d3emodel';

@Injectable({
  providedIn: 'root'
})
export class D3eCnodesService {

  public cnodes:Cnode[] = [];

  constructor() {
    this.cnodes = JSON.parse('['+
      '{"version": "0.3.0", "scope": "node", "name": "Auto 2P", "category": "composite", "title": "QF", "description": null,'+
          '"properties": {"P1": "", "P2": "", "nominal": ""}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Auto 1P", "category": "composite", "title": "QF", "description": null,'+
          '"properties": {"P1": "", "nominal": ""}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Auto 3P", "category": "composite", "title": "QF", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Motor 3L", "category": "action", "title": "Motor", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3", "P4": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Motor 1L", "category": "action", "title": "Motor", "description": null,'+
          '"properties": {"P1": "L1", "P2": "N", "P3": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Diff 4P", "category": "composite", "title": "DF", "description": null,'+
          '"properties": {"P1": "L1","P2": "L2","P3": "L3","P4": "N"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Diff 2P", "category": "composite", "title": "DF", "description": null,'+
          '"properties": {"P1": "L1", "P2": "N"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "KM 1P", "category": "composite", "title": "KM", "description": null,'+
          '"properties": {"P1": "L1"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "KM 3P", "category": "composite", "title": "KM", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Counter 1P", "category": "composite", "title": "Wh", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Counter 4P", "category": "composite", "title": "Wh", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3", "P4": "N"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Light", "category": "action", "title": "grL", "description": null,'+
          '"properties": {"P1": "L1", "P2": "N", "P3": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Socket 3P", "category": "action", "title": "S", "description": null,'+
          '"properties": { "P1": "L2", "P2": "N", "P3": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Socket 5P", "category": "action", "title": "S", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3", "P4": "N", "P5": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "FreqConv 3P", "category": "composite", "title": "FC", "description": null,'+
          '"properties": {"P1": "L1", "P2": "N", "P3": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Consumer 3P", "category": "action", "title": "Потребитель", "description": null,'+
          '"properties": {"P1": "L1", "P2": "N", "P3": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Consumer 5P", "category": "action", "title": "Потребитель", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3", "P4": "N", "P5": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "FreqConv 5P", "category": "composite", "title": "FC", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3", "P4": "N", "P5": "PE"}},'+
      '{"version": "0.3.0", "scope": "node", "name": "Thermal Relay 3P", "category": "composite", "title": "RT", "description": null,'+
          '"properties": {"P1": "L1", "P2": "L2", "P3": "L3"}}]'
    )
  }
}
