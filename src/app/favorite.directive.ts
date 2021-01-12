import { Directive,Host,HostBinding, HostListener,Input } from '@angular/core';

@Directive({
    selector: '[markFav]'
})

export class FavoriteDirective {

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
    }
}
