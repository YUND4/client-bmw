import { TextFieldModule } from '@angular/cdk/text-field';
import { NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';


@Component({
    selector     : 'events',
    standalone   : true,
    templateUrl  : './events.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [MatButtonToggleModule, FormsModule, NgFor, FuseCardComponent, MatButtonModule, MatIconModule, RouterLink, NgClass, MatMenuModule, MatCheckboxModule, MatProgressBarModule, MatFormFieldModule, MatInputModule, TextFieldModule, MatDividerModule, MatTooltipModule, TitleCasePipe]
})
export class EventsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
