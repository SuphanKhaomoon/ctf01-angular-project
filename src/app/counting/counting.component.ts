import { Component } from '@angular/core';

@Component({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class CountingComponent {
    count : number = 0;
    countNumber() {
        this.count += 1;
    }
}