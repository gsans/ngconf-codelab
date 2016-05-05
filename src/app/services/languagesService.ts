// a simple service
import {Injectable} from '@angular/core';

@Injectable()
export class LanguagesService {
  get() {
    return ['en', 'es', 'fr'];
  }
}
