import { TestBed, async } from '@angular/core/testing';
import {  MovieFilterPipe } from './app.filter.pipe';

describe(' MovieFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new  MovieFilterPipe();
    expect(pipe).toBeTruthy();
  });
});