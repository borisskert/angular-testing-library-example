import {AppComponent} from './app.component';
import {CounterComponent} from "./counter/counter.component";
import {render, screen} from "@testing-library/angular";

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent, {
      declarations: [
        CounterComponent
      ]
    })
  });

  it('should create the app', () => {
    expect(screen.getByText('angular-testing-library-example app is running!')).toBeInTheDocument()
  });
});
