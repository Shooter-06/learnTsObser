updateData(id: number, data: PortalSite): Observable<PortalSite> {
    const index = this.portalSiteData.findIndex(site => site.portalServiceSiteId === id);
    if (index > -1) {
        this.portalSiteData[index] = { ...this.portalSiteData[index], ...data };
        this.portalSiteData$.next(this.portalSiteData);
    }
    return of(this.portalSiteData[index]);
}


onSubmit() {
    if (this.isEdit) {
      this.siteService.updateData(this.editIndex, this.adminForm.value).subscribe(
        () => this.router.navigate(['/site']) 
      );
    } else {
      this.siteService.saveData(this.adminForm.value).subscribe(
        () => this.router.navigate(['/site'])
      );
    }
    this.adminForm.reset();
}
