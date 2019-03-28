import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SearchbarComponent } from '@components/searchbar/searchbar.component';
import { SortbyComponent } from '@components/sortby/sortby.component';
import { DataListComponent } from '@components/data-list/data-list.component';
import { SvgComponent } from '@components/svg/svg.component';
import { ModalComponent } from '@components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@modules/shared.module';
import { ApiService } from '@services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalService } from '@components/modal/shared/modal.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

const apiServiceMock = {

};

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SearchbarComponent,
        SortbyComponent,
        DataListComponent,
        SvgComponent,
        ModalComponent,
      ],
      imports: [
        ReactiveFormsModule,
        SharedModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ApiService, ModalService]
    }).compileComponents();
  }));

  describe(':', () => {

    // Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().
    // The setup() function returns an object literal with the variables, such as app, that a test might reference.
    // You don't define semi-global variables (e.g., let app,fixture ) in the body of the describe().
    // Then each test invokes setup() in its first line, before continuing with steps that
    // manipulate the test subject and assert expectations.

    function setup() {
      const fixture = TestBed.createComponent(HomeComponent);
      const app = fixture.debugElement.componentInstance;
      return { fixture, app };
    }

    it('should create the app', async(() => {
      const { app } = setup();
      expect(app).toBeTruthy();
    }));

    it('should search', async(() => {
      const { app, fixture } = setup();

      // # GIVEN - Capture reference to DebugElement not NativeElement and verify initial state
      const buttonDE = fixture.debugElement.query(By.css('sortbyEl'));
      console.log('TESTTTT:::', buttonDE);
      expect(app.clickCounter).toEqual(0);

      // // # WHEN - Simulate the user input event and detect changes.
      //   buttonDE.triggerEventHandler('click', {});
      // fixture.detectChanges();

      // // # THEN - Assert change in component's state
      // expect(app.clickCounter).toEqual(1);

      // this.savedList = [{id: '1', name: 'company1'}, {id: '1', name: 'company1'}];
      // fixture.detectChanges();
      // const button = fixture.debugElement.query(By.css('favBtnRef'));
    }));
  });

});

