import { Component, OnInit } from "@angular/core";
import { DataStorageService } from '../services/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor(private dataStorageService: DataStorageService){}

    ngOnInit(){

    }

    onLogOut(){
        this.dataStorageService.logOut();
    }
    
}