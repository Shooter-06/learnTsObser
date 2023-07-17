createData(data: PortalSite): Observable<PortalSite> {
    const newId = this.portalSiteData.length > 0 ?
        Math.max(...this.portalSiteData.map(site => site.portalServiceSiteId)) + 1 :
        1;
    const newSite = { ...data, portalServiceSiteId: newId };

    this.portalSiteData.push(newSite);
    this.portalSiteData$.next(this.portalSiteData);

    return of(newSite);
}

onSubmit() {
    if (this.editIndex) {
        this.formService.updateData(this.editIndex, this.adminForm.value).subscribe(
            () => this.router.navigate(['/site']) 
        );
    } else {
        this.formService.createData(this.adminForm.value).subscribe(
            () => this.router.navigate(['/site']) 
        );
    }
}


saveData(id: number, data: PortalSite): Observable<PortalSite> {
    if (id) {
        return this.updateData(id, data);
    } else {
        return this.createData(data);
    }
}


onSubmit() {
    this.formService.saveData(this.editIndex, this.adminForm.value).subscribe(
        () => this.router.navigate(['/site'])
    );
}

