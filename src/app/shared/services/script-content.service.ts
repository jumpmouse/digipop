import { Injectable } from '@angular/core';
import { Skripta } from '@app/models/skripta.model';
import { SadrzajSkripte } from 'src/assets/script-content/script-content.constant';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptContentService {
  private currentScriptContent: Skripta = JSON.parse(JSON.stringify(SadrzajSkripte));
  private currentScriptContent$: BehaviorSubject<Skripta> = new BehaviorSubject(this.currentScriptContent);

  constructor() {}

  get scriptContent(): Observable<Skripta> {
    return this.currentScriptContent$.asObservable();
  }

  setScriptContent(scriptObject: Skripta) {
    this.currentScriptContent = Object.assign(this.currentScriptContent, scriptObject);
    this.currentScriptContent$.next(this.currentScriptContent);
    this.updateScript();
  }

  private updateScript(): void {
    // update json file on the server
  }
}
