/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TopComponent } from './top.component';
import { NameService } from '../name.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { MaterialModule } from '@angular/material';

describe('Compent: Top', () => {
    let nameServiceStub;
    let nameServiceOberserver: Observer<string>;
    let nameServiceObservable: Observable<string>;

    beforeEach(() => {

        nameServiceObservable = Observable.create(observer => {
            nameServiceOberserver = observer;
        });

        nameServiceStub = {
            dispatch: nameServiceObservable
        };

        TestBed.configureTestingModule({
            declarations: [ TopComponent ],
            imports: [MaterialModule],
            providers: [{ provide: NameService, useValue: nameServiceStub }]
        });
    });

    it('should update name when service emits a value', async(() => {
        let fixture = TestBed.createComponent(TopComponent);
        let component = fixture.debugElement.componentInstance;
        nameServiceOberserver.next('Jonny');
        expect(component.name).toEqual('Jonny');
    }));

});
