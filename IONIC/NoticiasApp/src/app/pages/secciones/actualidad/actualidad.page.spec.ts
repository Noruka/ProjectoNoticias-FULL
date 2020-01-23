import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualidadPage } from './actualidad.page';

describe('ActualidadPage', () => {
  let component: ActualidadPage;
  let fixture: ComponentFixture<ActualidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
