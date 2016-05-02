// a simple service
import {Injectable} from 'angular2/core';

@Injectable()
export class LanguagesService {
  get() {
    return ['en', 'es', 'fr'];
  }
}
