import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
    
    //Quando utilizamos o input podemos receber valores na sua forma declarativa
    @Input() description = '';
    @Input() url = '';
    
    constructor() { }
    
    ngOnInit() {
    }
    
}
