import { Directive,Host,HostBinding, HostListener,Input, Output } from '@angular/core';

@Directive({
    selector: '[markFav]'
})

export class FavoriteDirective {
    @Input() itemDetails;
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseenter(){
        this.hovering=true;
    };
    @HostListener('mouseleave') onMouseleave(){
        this.hovering=false;
    }
    @Input() set markFav(value){
        this.isFavorite=value;
        if(value===true){
            console.log("value is",value);
        }
        else{
            console.log("value is",value);
        }
    }
    
    
}
