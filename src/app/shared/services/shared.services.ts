import { Injectable } from "@angular/core";
import { AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedServices {
    private menuAdmin : TemplateRef<any>;
    private menu : TemplateRef<any>;
    private menuView : ViewContainerRef;

    setMenuAdmin(menuAdmin : TemplateRef<any>): void{
        this.menuAdmin = menuAdmin;
    }

    setMenu(menu : TemplateRef<any>,): void{
        this.menu = menu;
    }
    
    setMenuView(menuView : ViewContainerRef) : void{
        this.menuView = menuView;
    }
    
    cambioMenu(): void {
        let sesion  = localStorage.getItem('htoken');
        if(sesion) this.menuView.createEmbeddedView(this.menuAdmin);
        else this.menuView.createEmbeddedView(this.menu);
    }
}