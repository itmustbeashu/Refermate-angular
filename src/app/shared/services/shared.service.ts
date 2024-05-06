import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService implements OnDestroy {
    isSideMenuCollapsed = false;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
    ) { }

    ngOnDestroy() {
        console.log('destroyed service');
        this.destroy$.next(true);
    }
}


