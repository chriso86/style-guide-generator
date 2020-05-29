import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Loader} from './loader.model';
import {ApplicationError} from '../errors/type/application-error';
import {DefaultLoaderStatesEnum} from './default-loader-states.enum';
import {LoaderService} from './loader.service';

@Component({
  selector: 'sgg-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {
  // Input params
  @Input() loader?: Loader;
  @Input() loadingStates?: string[];
  @Input() idleStates?: string[];
  @Input() defaultState: string;
  @Input() startLoadingOnInit: boolean = true;

  // Output events
  @Output() started: EventEmitter<Loader> = new EventEmitter<Loader>();
  @Output() stopped: EventEmitter<Loader> = new EventEmitter<Loader>();

  constructor(private loaderService: LoaderService) {
  }

  // Lifecycle hooks
  ngOnInit(): void {
    let states = null;

    if (!this.loadingStates || !this.idleStates) {
      console.warn('Loader component: There are no loading or idle states provided to the component. The states will defaulted');
    }

    if (this.loadingStates && this.idleStates) {
      states = this.loadingStates.concat(this.idleStates);
    }

    this.loader = this.loaderService.buildLoader(states, this.defaultState);

    if (this.startLoadingOnInit) {
      this.start();
    }
  }

  // Public methods
  public start(): void {
    if (!this.loader) {
      throw new ApplicationError(new Error('Loader Component -> loader not specified'));
    }

    this.loader.setState(DefaultLoaderStatesEnum.Loading);

    this.started.emit(this.loader);
  }

  public stop(): void {
    if (!this.loader) {
      throw new ApplicationError(new Error('Loader Component -> loader not specified'));
    }

    this.loader.setState(DefaultLoaderStatesEnum.AwaitingUserInput);

    this.stopped.emit(this.loader);
  }
}
