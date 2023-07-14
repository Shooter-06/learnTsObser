import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PortalSite } from '../models/portal-site.model';

@Injectable({
  providedIn: 'root'
})
export class SiteServiceService {
  private _sites = new BehaviorSubject<PortalSite[]>([]);
  
  get sites(): Observable<PortalSite[]> {
    return this._sites.asObservable();
  }

  getData(): void {
    // your logic to get data goes here.
    // When you have the data, use next to update the value.
    this._sites.next(data);
  }

  getSingleData(id: number): Observable<PortalSite> {
    return this._sites.value.find(site => site.portalServiceSiteId === id);
  }

  saveData(newSite: PortalSite): void {
    const sites = [...this._sites.value, newSite];
    this._sites.next(sites);
  }

  updateData(id: number, updatedSite: PortalSite): void {
    const sites = this._sites.value.map(site => {
      return site.portalServiceSiteId === id ? updatedSite : site;
    });
    this._sites.next(sites);
  }

  deleteData(id: number): void {
    const sites = this._sites.value.filter(site => site.portalServiceSiteId !== id);
    this._sites.next(sites);
  }
}
