import { LikeWidgetComponent } from './like-widget.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetModule } from './like-widget.module';

describe( LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [ LikeWidgetModule ]
    }).compileComponents();

    fixture = TestBed.createComponent( LikeWidgetComponent );
  });

  it('should create component', () => {
    const component = fixture.componentInstance;

    expect( component ).toBeTruthy();
  });

  it('should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect( component.id ).toBeTruthy();
  });

  it('should NOT generate ID when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'someId';

    component.id = someId;
    fixture.detectChanges();

    expect( component.id ).toBe( someId );
  });
});
