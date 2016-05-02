import {describe, it, expect, inject, beforeEach, beforeEachProviders} from 'angular2/testing';
import {LanguagesService} from './languagesService';
import {UsersService} from './usersService';

describe('Service: LanguagesService', () => {
  let service;

  beforeEachProviders(() => [
    LanguagesService,
    UsersService
  ]);

  beforeEach(inject([LanguagesService], s => {
    service = s;
  }));

  it('should return available languages', () => {
    let languages = service.get();
    expect(languages).toContain('en');
    expect(languages).toContain('es');
    expect(languages).toContain('fr');
    expect(languages.length).toEqual(3);
  });
});
