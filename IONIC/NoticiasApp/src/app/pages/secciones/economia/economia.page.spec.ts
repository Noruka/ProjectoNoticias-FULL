import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EconomiaPage } from './economia.page';

describe('EconomiaPage', () => {
  let component: EconomiaPage;
  let fixture: ComponentFixture<EconomiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EconomiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
